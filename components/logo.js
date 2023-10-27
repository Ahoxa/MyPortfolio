import Link from "next/link";
import { Text, VStack, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-family: "Noticia Text", serif;
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
  const color = useColorModeValue("rgb(29,43,88)", "rgb(238,226,882)");
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Text color={color} fontSize="40px" >
          {"{"}
        </Text>
        <VStack alignItems="start" mx={1}>
          <Text color={color} fontSize="20px">
            Ahoxa
          </Text>
          <Text color={color} fontSize="20px">
            Portfolio
          </Text>
        </VStack>
        <Text color={color} fontSize="40px">
          {"}"}
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
