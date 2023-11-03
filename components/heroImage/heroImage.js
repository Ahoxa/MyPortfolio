import { useState, useEffect } from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Model from "./model";

const HeroImage = () => {
  const fulltext = `
  const Ahoxa = () => {
    const elements = ['convenience', 'beauty', 'innovation' ];
    const combine = (items) => items.map((item) => \`Web’s \${item}\`).join(',');

    return 'My mission is to pursue and constantly improve  \${combine(elements)}';
    makeWorldBetter();
    };
  `;
  const shortText = "Ahoxa();";

  const text = useBreakpointValue({ base: shortText, md: fulltext });

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 110);
    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <Box
      position="relative"
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
      <Text fontSize="2rem" position="absolute" zIndex={2}>
        {displayText}
      </Text>
      <Model />
    </Box>
  );
};

export default HeroImage;
