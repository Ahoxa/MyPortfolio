import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionBox = ({ children }) => {
  return (
    <StyledDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10, transition: { duration: 0.8, delay: 0.4 } }}
      transition={{ duration: 0.5, type: "easeInOut" }}
    >
      {children}
    </StyledDiv>
  );
};

export default MotionBox;
