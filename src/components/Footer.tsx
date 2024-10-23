import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <HStack justifyContent="center" alignItems="center" spacing={2} padding={4}>
      <Icon as={FaCopyright} />
      <Text textAlign="center">
        2024 Manju Raghavendra. All rights reserved
      </Text>
    </HStack>
  );
};

export default Footer;
