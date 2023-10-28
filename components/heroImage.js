import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const HeroImage = () => {
  const fulltext = `
  const Ahoxa = () => {
    const elements = ['convenience', 'beauty', 'innovation' ];
    const combine = (items) => items.map((item) => \`Web’s \${item}\`).join(',');

    return 'My mission is to pursue and constantly improve  \${combine(elements)}';
    makeWorldBetter();
};
  `;

  const shortText = `Ahoxa();`;

  const DisplayText = useBreakpointValue({ base: shortText, md: fulltext });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="90vh"
      mb={10}
      background="transparent"
      whiteSpace="pre-wrap"
      zIndex={1}
    >
      <Text color="white" fontSize="2rem">
        {DisplayText}
      </Text>
    </Box>
  );
};

export default HeroImage;
