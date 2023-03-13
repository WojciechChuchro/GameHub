import React from "react";
import useData from "../hook/useData";
import useGenres from "../hook/useGenre";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imageUrl";
const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
