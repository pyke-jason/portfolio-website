import Header from "@components/NavBar";
import {
  Box,
  Heading,
  Text,
  Container,
  Paragraph,
  Section,
  Flex,
  Separator,
  Image,
  Avatar,
} from "@components/common";
import TitleAndMetaTags from "@components/TitleAndMetaTags";
import { globalStyles } from "@stitches-config";
import { KeywordItem } from "@components/index/KeywordItem";


export default function Home() {
  globalStyles();
  return (
    <>
      <TitleAndMetaTags />
      <Box>
        {/* <Header /> */}
        <main>
          <Box css={{ pt:"200px", backgroundColor: "$indigo2" }}>
            <Section size="3">
              <Container size="3">
                <Flex gap="7" justify={"center"} align={"center"}>
                  <Box>
                    <Image css={{ width: "18em" }} src={"/images/headshot-circle.png"}>
                    </Image>
                  </Box>
                  <Box>
                    <Heading size="4" css={{ mb: "$7" }}>
                      Jason Pyke
                    </Heading>
                    <Paragraph size="2">
                      Senior at the University of Washington
                    </Paragraph>
                  </Box>
                </Flex>
              </Container>
            </Section>
            <Section size="3">
              <Container size="3">
                <Flex gap="7" justify={"center"} align={"center"}>
                  <Paragraph size="1">
                    Senior at the University of Washington
                  </Paragraph>
                  <Paragraph size="1">
                    Email: pyke.jason1@gmail.com
                  </Paragraph>
                  <Paragraph size="1">
                    Senior at the University of Washington
                  </Paragraph>
                </Flex>
              </Container>
            </Section>
          </Box>
          <Flex css={{ mt: "$9", jc: "center" }}>
            <Separator size="2" />
          </Flex>
          <Section size="3">
            <Container size="2">
              <Paragraph size="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </Container>
          </Section>
          <Section size="3">
            <Container size="3">
              <Heading size="3" css={{ ta: "center", mb: "$3" }}>
                Projects
              </Heading>
              <Flex gap="3" wrap="wrap">
                <KeywordItem name="Java" priority={1}
                  description="General-purpose, multi-paradigm programming language."
                  verified tags={["common"]}
                  link="https://en.wikipedia.org/wiki/Java_(programming_language)" />
                <KeywordItem name="Agile Development" priority={2} description="Iterative approach to project management and software development." />
                <KeywordItem name="Git" priority={2} description="Common version control tool used in larger projects" />
                <KeywordItem name="Azure" priority={2} description="A large scale cloud service from Microsoft, frequently used in industry" />
                <KeywordItem name="SQL" priority={2} description="A basic query language used in many relational databases" verified tags={["common"]} />
              </Flex>
            </Container>
          </Section>
          <Section size="3">
            <Container size="3">
              <Heading size="3" css={{ ta: "center", mb: "$3" }}>
                Coalition - Multiplayer FPS
              </Heading>
              <Paragraph size="2" css={{ ta: "center" }}>
                First person shooter for Android.
              </Paragraph>
              <Flex gap="3">

              </Flex>
            </Container>
          </Section>
        </main>
      </Box>
    </>
  );
}
