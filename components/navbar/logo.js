import Link from "next/link";
import { Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 55px;
  line-height: 20px;
  transition: all 0.3s ease-in-out;

  &:hover .bracket {
    transform: translateX(-5px);
  }

  &:hover .end-bracket {
    transform: translateX(5px);
  }
`;

const Bracket = styled.span`
  font-size: 40px;
  font-family: "Cormorant Garamond";
  font-weight: light;
  transition: all 0.3s ease-in-out;
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Bracket className="bracket">{"{"}</Bracket>
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
        <Bracket className="end-bracket">{"}"}</Bracket>
      </LogoBox>
    </Link>
  );
};

export default Logo;
