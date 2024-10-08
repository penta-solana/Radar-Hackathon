"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Music, Zap } from "lucide-react";

const NFT_IMAGES = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
];

export default function NFTMusicApp() {
  const [selectedNFT, setSelectedNFT] = useState<number | null>(null);
  const [solAmount, setSolAmount] = useState<string>("");
  const [artistWallet, setArtistWallet] = useState<string>("");
  const [revenuePercentage, setRevenuePercentage] = useState<number>(50);

  const handleTransfer = () => {
    console.log("Transferring", solAmount, "SOL");
    // Implement transfer logic here
  };

  return (
    <Box
      minHeight="100vh"
      p={8}
      bgGradient="linear(to-r, purple.900, green.900)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        maxW="4xl"
        bg="rgba(0, 0, 0, 0.7)"
        p={8}
        rounded="xl"
        backdropFilter="blur(10px)"
        borderWidth={1}
        borderColor="purple.500"
        boxShadow="0px 0px 20px rgba(128, 0, 128, 0.7), 0px 0px 30px rgba(0, 255, 133, 0.7)"
      >
        <Heading
          as="h1"
          size="2xl"
          mb={8}
          textAlign="center"
          bgGradient="linear(to-r, purple.400, green.400)"
          bgClip="text"
        >
          Profit Distribution
        </Heading>

        <VStack spacing={8} align="stretch">
          <Box>
            <Heading
              as="h2"
              size="lg"
              mb={4}
              display="flex"
              alignItems="center"
              color="white"
              textShadow="0px 0px 10px purple"
            >
              <Box as={Music} mr={2} color="purple.400" /> Select Your NFT
            </Heading>
            <RadioGroup
              value={selectedNFT?.toString()}
              onChange={(value) => setSelectedNFT(Number(value))}
            >
              <Flex justifyContent="space-between">
                {NFT_IMAGES.map((src, index) => (
                  <Box key={index} position="relative">
                    <Radio
                      value={index.toString()}
                      id={`nft-${index}`}
                      display="none"
                    />
                    <Image
                      src={src}
                      alt={`NFT ${index + 1}`}
                      boxSize="100px"
                      objectFit="cover"
                      rounded="lg"
                      borderWidth={2}
                      borderColor={
                        selectedNFT === index ? "green.400" : "transparent"
                      }
                      _hover={{
                        transform: "scale(1.05)",
                        boxShadow:
                          selectedNFT === index
                            ? "0px 0px 20px green"
                            : "0px 0px 10px rgba(255, 255, 255, 0.5)",
                        transition: "all 0.2s",
                      }}
                      cursor="pointer"
                      onClick={() => setSelectedNFT(index)}
                    />
                  </Box>
                ))}
              </Flex>
            </RadioGroup>
          </Box>

          <Box>
            <Heading
              as="h2"
              size="lg"
              mb={4}
              display="flex"
              alignItems="center"
              color="white"
              textShadow="0px 0px 10px green"
            >
              <Box as={Zap} mr={2} color="green.400" /> Transfer SOL
            </Heading>
            <Flex>
              <Input
                type="number"
                placeholder="Amount"
                value={solAmount}
                onChange={(e) => setSolAmount(e.target.value)}
                mr={4}
                bg="purple.900"
                borderColor="purple.500"
                _placeholder={{ color: "purple.300" }}
                color="white"
                textShadow="0px 0px 5px purple"
                _hover={{
                  borderColor: "green.400",
                }}
              />
              <Button
                onClick={handleTransfer}
                colorScheme="green"
                boxShadow="0px 0px 10px green"
                _hover={{
                  boxShadow:
                    "0px 0px 20px green, 0px 0px 30px rgba(255, 255, 255, 0.7)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s",
                }}
              >
                Transfer
              </Button>
            </Flex>
          </Box>

          <Box>
            <Heading
              as="h2"
              size="lg"
              mb={4}
              color="white"
              textShadow="0px 0px 10px purple"
            >
              Settings
            </Heading>
            <Stack spacing={4}>
              <Box>
                <Text
                  mb={2}
                  fontSize="sm"
                  fontWeight="medium"
                  color="purple.300"
                  textShadow="0px 0px 5px purple"
                >
                  Artist Wallet Address
                </Text>
                <Input
                  placeholder="Enter wallet address"
                  value={artistWallet}
                  onChange={(e) => setArtistWallet(e.target.value)}
                  bg="purple.900"
                  borderColor="purple.500"
                  _placeholder={{ color: "purple.300" }}
                  color="white"
                  textShadow="0px 0px 5px purple"
                />
              </Box>
              <Box>
                <Text
                  mb={2}
                  fontSize="sm"
                  fontWeight="medium"
                  color="purple.300"
                  textShadow="0px 0px 5px green"
                >
                  Revenue Percentage: {revenuePercentage}%
                </Text>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={revenuePercentage}
                  onChange={(value) => setRevenuePercentage(value)}
                >
                  <SliderTrack bg="purple.900">
                    <SliderFilledTrack bg="green.400" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} bg="green.400" />
                </Slider>
              </Box>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
