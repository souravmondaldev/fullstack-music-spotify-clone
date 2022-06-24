import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const ArtistCard = ({
  artists,
  cardHeading,
  cardSubheading,
  image,
  cardType,
}) => {
  return (
    <Box color="white" paddingX="40px" marginBottom="40px">
      <Box marginBottom="40px">
        <Text fontSize="2xl" fontWeight="bold">
          {cardHeading}
        </Text>
        <Text fontSize="md">{cardSubheading}</Text>
      </Box>
      <Flex>
        {artists.map((artist) => (
          <Box paddingX="10px" width="20%">
            <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
              <Image src={image} borderRadius="100%" />
              <Box marginTop="20px">
                <Text fontSize="large">{artist.name}</Text>
                <Text fontSize="x-small" lineHeight="12px">
                  {cardType}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default ArtistCard;
