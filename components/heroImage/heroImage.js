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

  const breakpointValue = useBreakpointValue({ base: shortText, md: fulltext });
  const [targetText, setTargetText] = useState(breakpointValue);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setTargetText(breakpointValue);
    setDisplayText("");
  }, [breakpointValue]);

  useEffect(() => {
    let index = 0;
    const targetEndsUndefined = targetText.endsWith("undefined");

    const typeInterval = setInterval(() => {
      if (index < targetText.length) {
        setDisplayText((prevText) => prevText + targetText[index]);
        index++;
      } else {
        if (targetEndsUndefined) {
          setDisplayText((prevText) => prevText.replace("undefined", ""));
        }
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [targetText]);

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
