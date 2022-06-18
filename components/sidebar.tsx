import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
    {
        name: "Home",
        icon: MdHome,
        route: '/',
    },
    {
        name: "Search",
        icon: MdSearch,
        route: '/search',
    },
    {
        name: "Library",
        icon: MdLibraryMusic,
        route: '/library',
    },
    // {
    //     name: "Playlist",
    //     icon: MdPlaylistAdd,    
    //     route: '/playlist',
    // },
    // {
    //     name: "Favorite",
    //     icon: MdFavorite,
    //     route: '/favorite',
    // },
];
const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20x">
            <NextImage src="/spotify-1.svg" height="60px" width="120px"/>
        </Box>
        <Box marginBottom="20px">
            <List spacing="2px">
                {navMenu.map(menu =>(
                    <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                        <LinkBox>
                            <NextLink href={menu.route}>
                                <LinkOverlay>
                                <ListIcon as={menu.icon} color="white" marginRight="20px"/>
                                {menu.name}
                                </LinkOverlay>
                            </NextLink>
                        </LinkBox>
                    </ListItem>
                ))}
            </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
