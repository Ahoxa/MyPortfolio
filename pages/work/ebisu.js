import NextLink from "next/link";
import HeadingImg from "../../components/common/headingImg";
import P from "../../components/common/paragraph";
import {
  Container,
  VStack,
  Badge,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/workItem";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import WorkingJitoneko from "../../public/work/jitoneko_work.svg";
import ebisu from "../../public/work/ebisu/ebisu.png";
import ebisu01 from "../../public/work/ebisu/ebisu01.jpg";
import ebisu02 from "../../public/work/ebisu/ebisu02.jpg";

const Work = () => {
  return (
    <Container pt={10} maxW="60vw">
      <HeadingImg title="Work" img={WorkingJitoneko} alt="working cat" />
      <Title>
        Ebisu Poster <Badge>2022</Badge>
      </Title>
      <P>
        This poster is the official poster used at the "Yebisu Otoko Selection @
        Osaka University Hill" held at the beginning of the New Year.
      </P>
      <P>
        I was in charge of the event as the executive committee chairman, and
        was in charge of everything from the management to the poster design.
      </P>
      <P>This poster was created using Adobe Illustrator and Photoshop.</P>
      <List ml={5} my={7}>
        <ListItem>
          <Meta>website</Meta>
          <Link as={NextLink} href="https://mtmr.jp/ebisu/">
            https://mtmr.jp/ebisu/
            <ExternalLinkIcon mx="5px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>post</Meta>
          <Link
            as={NextLink}
            href="https://www.city.ikeda.osaka.jp/ikedamoyo/16130.html"
            isExternal
          >
            https://www.city.ikeda.osaka.jp/ikedamoyo/16130.html
            <ExternalLinkIcon mx="5px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>stack</Meta>
          <span>Adobe Illustrator, Photoshop</span>
        </ListItem>
      </List>
      <VStack>
        <WorkImage src={ebisu} alt="poster" />
        <WorkImage src={ebisu01} alt="start" />
        <WorkImage src={ebisu02} alt="entrance" />
      </VStack>
    </Container>
  );
};

export default Work;
