import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

const getPageMetaData = (post) => {
  const properties = post.properties;

  const id = post.id;
  const slug = properties.Slug.rich_text[0].plain_text;
  const title = properties.Name.title[0].text.content;
  const tags = properties.Tags.multi_select.map((tag) => {
    return tag.name;
  });
  const lastEdited = formatData(post.last_edited_time);
  const image = properties.media.files[0].file.url;

  return {
    id: id,
    slug: slug,
    title: title,
    tags: tags,
    lastEdited: lastEdited,
    image: image,
  };
};

const formatData = (dataString) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Intl.DateTimeFormat("ja-JP", options)
    .format(new Date(dataString))
    .replace(/年|月/g, "/")
    .replace(/日/g, "");
};

const getSinglePost = async (slug) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);
 
  return { metadata, markdown: mdString.parent };
};

export { getAllPosts, getSinglePost };
