import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = (props) => {
  const { toggleColorMode } = useColorMode();
  const ToggleIcon = useColorModeValue(MoonIcon, SunIcon);
  const text = useColorModeValue("dark", "light");

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<ToggleIcon />}
      varient="outline"
      {...props}
    />
  );
};

export default ThemeToggleButton;
