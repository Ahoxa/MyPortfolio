import { useState, useEffect } from "react";
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
  const shortText = "Ahoxa();";

  const breakpointValue = useBreakpointValue({ base: shortText, md: fulltext });
  const [targetText, setTargetText] = useState(breakpointValue);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, []);

  useEffect(() => {
    setTargetText(breakpointValue);
    setDisplayText("");
  }, [breakpointValue]);

  useEffect(() => {
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < targetText.length) {
        setDisplayText((prevText) => prevText + targetText[index]);
        index++;
      } else {
        if (displayText.endsWith("undefined")) {
          setDisplayText((prevText) => prevText.replace("undefined", ""));
        }
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [targetText]);

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
        {displayText}
      </Text>
    </Box>
  );
};

export default HeroImage;
