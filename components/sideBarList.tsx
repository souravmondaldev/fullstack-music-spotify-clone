import NextLink from "next/link";
import {
  List,
  ListIcon,
  ListItem,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

const SideBarList = ({ menuList, playlist = false }) => {
  return (
    <List spacing="2px">
      {menuList.map((menu) => (
        <ListItem
          paddingX="20px"
          fontSize="16px"
          key={playlist ? menu : menu.name}
        >
          <LinkBox>
            <NextLink href={playlist ? "/" : menu.route}>
              <LinkOverlay href={playlist ? "/" : menu.route}>
                {!playlist && (
                  <ListIcon as={menu.icon} color="white" marginRight="20px" />
                )}
                {playlist ? menu : menu.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarList;
