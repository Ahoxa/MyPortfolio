import { Box, Heading, Link, Button } from "@chakra-ui/react";
import { CustomSection } from "../lib/customSection";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";

const SNSButton = ({ children, icon }) => {
  return (
    <Button
      variant="ghost"
      size={{ base: "md", md: "lg" }}
      fontFamily="Inika, serif"
      fontSize={{ base: "1rem", md: "1.75rem" }}
      leftIcon={icon}
    >
      {children}
    </Button>
  );
};

const AtCoderIcon = () => {
  return (
    <Box
      boxSize="1em"
      as="span"
      display="inline-block"
      lineHeight="1em"
      position="relative"
    >
      <Image src="/atcoder.svg" alt="AtCoder" layout="fill" />
    </Box>
  );
};

const SNS = () => {
  const linkFont = "Inter, sans-serif";
  const iconSize = 24;

  return (
    <>
      <Heading variant="section-title" mt="5vh" mb="2vh">
        On the Web
      </Heading>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <CustomSection>
          <Link href="https://github.com/Ahoxa" target="_blank">
            <SNSButton icon={<AiFillGithub />}>@Ahoxa</SNSButton>
          </Link>
        </CustomSection>
        <CustomSection>
          <Link
            href="https://www.instagram.com/retro.medamayaki/"
            target="_blank"
          >
            <SNSButton icon={<AiFillInstagram />}>@retromedamayaki</SNSButton>
          </Link>
        </CustomSection>
        <CustomSection>
          <Link href="https://twitter.com/4h0xa" target="_blank">
            <SNSButton icon={<AiFillTwitterCircle />}>@Ahoxa</SNSButton>
          </Link>
        </CustomSection>
        <CustomSection>
          <Link href="https://atcoder.jp/users/Ah0xa" target="_blank">
            <SNSButton icon={<AtCoderIcon />}>@Ahoxa</SNSButton>
          </Link>
        </CustomSection>
      </Box>
    </>
  );
};

export default SNS;
