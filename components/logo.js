import Link from "next/link";
import { Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 55px;
  line-height: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Text
          fontSize="40px"
          fontFamily="Cormorant Garamond"
          fontWeight="light"
        >
          {"{"}
        </Text>
        <VStack alignItems="start" mx={2}>
          <Text
            fontSize="20px"
            fontFamily="Cormorant Garamond"
            fontWeight="light"
          >
            Ahoxa
          </Text>
          <Text
            fontSize="20px"
            fontFamily="Cormorant Garamond"
            fontWeight="light"
          >
            Portfolio
          </Text>
        </VStack>
        <Text
          fontSize="40px"
          fontFamily="Cormorant Garamond"
          fontWeight="light"
        >
          {"}"}
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
