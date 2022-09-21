import Link from "next/link";
import {
  Flex,
  Text,
  AppBar,
  SkipToMainContent,
  Container,
  Button,
} from "@components/common";
import { DarkThemeButton } from "./DarkThemeButton";

export default function NavBar({ }) {
  return (
    <nav>
      <SkipToMainContent />
      <AppBar size="2" color="loContrast" border sticky >
        <Container size="3">
          <Flex justify="between" align="center">
            <Flex gap="4" align="center">
              <Text>Jason Pyke</Text>
            </Flex>
            <Flex gap="4" align="center">
              <Button href="/contact">
                <Text>Contact</Text>
              </Button>
              <DarkThemeButton />
            </Flex>
          </Flex>
        </Container>
      </AppBar>
    </nav>
  );
}
