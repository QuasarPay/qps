import {
    IconButton,
    Avatar,
    Flex,
    HStack,
    Image,
    Text,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    MenuGroup,
    VStack,
  } from "@chakra-ui/react";
  
  import NextLink from "next/link";
  import {
    IoNotificationsOutline,
  } from "react-icons/io5";
  import { CgProfile } from "react-icons/cg";
  import { FiSettings, FiBookmark, FiLogOut } from "react-icons/fi";
  import { RiContactsBookLine } from "react-icons/ri";
  import React from "react";
  import { useRouter } from "next/router";
  import axios from 'axios';
  
  export default function UserProfile() {
    const router = useRouter();
    const data = JSON.parse(window.localStorage.getItem('profile')!)
    const user = JSON.parse(window.localStorage.getItem('user')!)
    // const real = axios.get('http://127.0.0.1:5000/users').then((response: any) => {
    //   return response
    // })
  
    return (
      <Flex align="center" gap={5}>
         <Image
              src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/NG.svg`}
              borderRadius="md"
              alt={`NG-flag`}
              h="6"
              pointerEvents="none"
            />
            <IconButton icon={<IoNotificationsOutline  />} fontSize="24px" variant="ghost"  aria-label="Notifications" />
          <Flex
            _hover={{ bg: "#E6E6E6", color: "#000a16" }}
            borderRadius="10px"
            py={2}
            px={2}
            bg={{ base: "none", md: "none" }}
            minW={{ base: 0, md: 40 }}
            h={{ base: 0, md: 14 }}
            align='center'
          >
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack
                  spacing="2"
                  align="center"
                  cursor="pointer"

                  display={{ base: "none", md: "flex" }}
                >
                  <VStack
                    flexDir="column"
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-end"
                    spacing="1px"
                  >
                    <Text fontWeight={600} fontSize="0.9em">
                    {user ? user[0] : "John"} {user ? user[1] : "Udoumoh"} 
                    </Text>
                  </VStack>
                  <Avatar name={user[0]} src={ data ? data[0] : "https://i.imgur.com/mJqC8j2.jpg" } size="md" ml={1} mr={1} borderRadius="10px" />
                </HStack>
              </MenuButton>
              <MenuList
                // fontSize="md"
                bg="white"
                color="gray.700"
                borderColor="gray.200"
                display={{ base: "none", md: "block" }}
                mt={-2}
              >
                <MenuGroup title="My Account">
                  <NextLink href="#"  passHref>
                    <MenuItem icon={<CgProfile />}
                    >Profile</MenuItem>
                  </NextLink>
                  <MenuItem icon={<RiContactsBookLine />}>My Loans</MenuItem>
                  <MenuItem icon={<FiSettings />}>Settings</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuItem icon={<FiLogOut />} 
                onClick={() => {
                  window.localStorage.clear()
                  router.push("/");
                }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
      </Flex>
    );
  }