import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import NextImage from "next/image";
import { auth } from "../lib/mutation";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };
  return (
    <Box width="100vw" height="100vh" bg="black">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/spotify-1.svg" height="60px" width="120px" />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form
            onSubmit={handleSubmit}
            style={{ display: "block", textAlign: "center" }}
          >
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              marginBottom="10px"
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              marginBottom="10px"
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{ "&:hover": { bg: "green.300" } }}
              textTransform="capitalize"
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
export default AuthForm;
