/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Header } from "../components/Header";
import {
  Avatar,
  AvatarContainer,
  InfoContainer,
  Text,
  List,
  ListItem,
  MainContainer,
  CardContainer,
  Card,
  CardImage,
  CardTitle,
  MainContent,
  LinkContainer,
  NewsletterContainer,
  HeaderArticles,
  InputContainer,
} from "../styles/homeStyles";

import { FiArrowRight } from "react-icons/fi";
import { NowPlaying } from "../components/NowPlaying";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <InfoContainer>
          <h3>Hi there 👋</h3>

          <h2>Iam Edvaldo Afonso (eadafonso)</h2>

          <Text>
            Iam a passionate Developer currently working with the best web &amp;
            mobile development technologies.
          </Text>

          <List>
            <ListItem>🔭 I’m currently working on Eadfast</ListItem>
            <ListItem>🌱 I’m currently learning Typescript + NextJs + Stitches and Radix</ListItem>
            <ListItem>
              👯 I’m looking to collaborate on open-source projects.
            </ListItem>
          </List>
        </InfoContainer>

        <AvatarContainer>
          <Avatar
            src="https://avatars.githubusercontent.com/u/22629779?v=4"
            alt="Edvaldo Afonso"
          />
        </AvatarContainer>
      </MainContainer>

      <MainContainer>
        <MainContent>
          <HeaderArticles>
            <h2>Artigos em destaques</h2>
            <LinkContainer>
              <a href="#">Todos artigos</a>

              <FiArrowRight />
            </LinkContainer>
          </HeaderArticles>

          <CardContainer>
            <Card>
              <CardImage
                src="https://blog.rocketseat.com.br/content/images/size/w600/2022/04/prisma-rocketseat-blog.png"
                alt="React"
              />
              <CardTitle>
                Prisma: uma das melhores coisas que já aconteceu no ecossistema?
              </CardTitle>
            </Card>

            <Card>
              <CardImage
                src="https://blog.rocketseat.com.br/content/images/size/w600/2022/04/prisma-rocketseat-blog.png"
                alt="React"
              />
              <CardTitle>
                Prisma: uma das melhores coisas que já aconteceu no ecossistema?
              </CardTitle>
            </Card>

            <Card>
              <CardImage
                src="https://blog.rocketseat.com.br/content/images/size/w600/2022/04/prisma-rocketseat-blog.png"
                alt="React"
              />
              <CardTitle>
                Prisma: uma das melhores coisas que já aconteceu no ecossistema?
              </CardTitle>
            </Card>

            <Card>
              <CardImage
                src="https://blog.rocketseat.com.br/content/images/size/w600/2022/04/prisma-rocketseat-blog.png"
                alt="React"
              />
              <CardTitle>
                Prisma: uma das melhores coisas que já aconteceu no ecossistema?
              </CardTitle>
            </Card>
          </CardContainer>
        </MainContent>
      </MainContainer>

      <MainContainer>
        <NewsletterContainer>
          <h2>Subscribe to the newsletter</h2>
          <p>
            Get emails from me about web development, tech, and early access to
            new articles.
          </p>

          <InputContainer>
            <input placeholder="Ex: edvaldo@eadafonso.com" />

            <button>Subscrever</button>
          </InputContainer>
        </NewsletterContainer>
      </MainContainer>

      <NowPlaying />

      {/*  <MainContainer>
        <PlayContainer>
          <div>
            <SiSpotify size={22} />

            <span>
              <b>Not Playing</b> - Spotify
            </span>
          </div>
        </PlayContainer>
      </MainContainer> */}
    </>
  );
};

export default Home;
