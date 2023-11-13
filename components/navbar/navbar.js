import { forwardRef } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
  Box,
  Link,
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
import ThemeToggleButton from "./themeToggleButton";

const linkStyle = {
  position: "relative",
  _before: {
    content: '""',
    position: "absolute",
    width: "70%",
    height: "2px",
    borderRadius: "4px",
    backgroundColor: "currentColor",
    bottom: "5px",
    left: "15%",
    transformOrigin: "right",
    transform: "scaleX(0)",
    transition: "transform .3s ease-in-out",
  },
  _hover: {
    _before: {
      transformOrigin: "left",
      transform: "scaleX(1)",
    },
  },
};

const LinkItem = ({ href, children }) => {
  return (
    <Link as={NextLink} href={href} scroll={false} p={2} {...linkStyle}>
      {children}
    </Link>
  );
};

const Divider = () => <span style={{ marginX: "8px" }}>/</span>;

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
      zIndex={2}
      display="flex"
      justifyContent="center"
      {...props}
    >
      <Flex
        p={2}
        wrap="wrap"
        align="center"
        justify="space-between"
        w={{ base: "95%", md: "80%" }}
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
          mt={{ base: 4, md: 0 }}
          spacing={3}
          flex={2}
          justifyContent="center"
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <Divider />
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <Divider />
          <LinkItem href="/post" path={path}>
            Post
          </LinkItem>
        </HStack>

        {/* HamburgerMenu */}
        <Box flex={1} align="right">
          <ThemeToggleButton />
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
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} href="/work">
                  Work
                </MenuItem>
                <MenuItem as={MenuLink} href="/post">
                  Post
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
