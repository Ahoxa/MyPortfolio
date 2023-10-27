import { forwardRef } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  HStack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, children }) => {
  return (
    <Link as={NextLink} href={href} scroll={false} p={2}>
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: " blur(10px)" }}
      zIndex={1}
      {...props}
      // bgColor={"red"}
    >
      <Flex
        p={2}
        wrap="wrap"
        align="center"
        justify="space-between"
      >

        {/* Logo */}
        <Flex align="center" flex={1}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <HStack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          flexGrow={1}
          mt={{ base: 4, normalizemd: 0 }}
          spacing={3}
          flex={2}
          justifyContent="center"
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/illust" path={path}>
            Illustrations
          </LinkItem>
        </HStack>

        {/* HamburgerMenu */}
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem as={MenuLink} href="/illust">
                  Illustrations
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

      </Flex>
    </Box>
  );
};

export default Navbar;
