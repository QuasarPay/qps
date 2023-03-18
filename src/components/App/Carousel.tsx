import React, { useState } from "react";
import { Avatar, IconButton, HStack, Flex, Text } from "@chakra-ui/react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { initialData } from "../../../fakedata";

const Carousel = () => {
  const [data, setData] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(newIndex);
  };

  const visibleData = data.slice(currentIndex, currentIndex + 5);
  const disablePrev = visibleData.length === 5 && currentIndex === 0;
  const disableNext =
    visibleData.length === 5 &&
    currentIndex + visibleData.length === data.length;

  return (
    <Flex
      bg="#FFF"
      borderRadius="md"
      h="110px"
      justify="center"
      align="center"
      w="760px"
      py={2}
      px={4}
    >
      <HStack spacing={8}>
        <IconButton
          aria-label="Previous"
          variant="link"
          icon={<IoChevronBackOutline />}
          onClick={handlePrev}
          disabled={disablePrev}
        />
        {visibleData.map((avatar) => (
          <Flex direction="column" align="center" gap={1} key={avatar.id}>
            <Avatar
              name={avatar.name}
              src={avatar.imageUrl}
              size="xl"
              w="70px"
              h="70px"
              border={"3px solid " + avatar.border || "#400050"}
            />
            <Text
              fontSize={18}
              fontWeight={500}
              noOfLines={1}
              overflow="hidden"
              textOverflow="ellipsis"
              maxWidth="80px"
            >
              {avatar.name}
            </Text>
          </Flex>
        ))}
        <IconButton
          aria-label="Next"
          variant="link"
          icon={<IoChevronForwardOutline />}
          onClick={handleNext}
          disabled={disableNext}
        />
      </HStack>
    </Flex>
  );
};

export default Carousel;
