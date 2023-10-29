import { Box, Heading, Text } from "@chakra-ui/react";
import { CustomSection, Tag } from "../lib/customSection";

const Bio = () => {
  const fontSize = { base: "0.9rem", md: "1.3rem" };

  return (
    <>
      <Heading variant="section-title">Bio</Heading>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <CustomSection>
          <Tag>2000</Tag>
          <Text fontSize={fontSize}>Born in the Tottori（鳥取）, Japan.</Text>
        </CustomSection>
        <CustomSection>
          <Tag>2019</Tag>
          <Text fontSize={fontSize}>
            Entered the Faculty of Economics, Osaka University.
          </Text>
        </CustomSection>
        <CustomSection>
          <Tag>2020</Tag>
          <Text fontSize={fontSize}>
            Encounters Python and begins to learn programming with a focus on
            data science.
          </Text>
        </CustomSection>
        <CustomSection>
          <Tag>2025</Tag>
          <Text fontSize={fontSize}>The best start in the best company.</Text>
        </CustomSection>
      </Box>
    </>
  );
};

export default Bio;
