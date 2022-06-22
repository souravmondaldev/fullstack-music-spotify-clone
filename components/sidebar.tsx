import NextImage from "next/image";
import { Box, Divider, Center } from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import SideBarList from "./sideBarList";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

// const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const SideBar = () => {
  const { playlist } = usePlaylist();

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="10px" paddingX="10px">
          <NextImage src="/spotify-1.svg" height="60px" width="120px" />
        </Box>
        <Box marginBottom="20px">
          <SideBarList menuList={navMenu} />
        </Box>
        <Box marginY="20px">
          <SideBarList menuList={musicMenu} />
        </Box>
        <Divider color="gray.700" />
        <Box height="50%" overflowY="auto" marginY="20px">
          <SideBarList menuList={playlist} playlist />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
