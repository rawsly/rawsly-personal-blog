import Head from 'next/head';
import styled from 'styled-components';
import { SearchIcon, BookmarkIcon, BellIcon } from '@heroicons/react/outline';

import { Button, Quote, BlogPost } from 'components';
import { posts } from 'dummy-data/posts';

const Home = () => {
  return (
    <Container className="flex w-full flex-col p-0 my-0 mx-auto">
      <Head>
        <title>Anasayfa - rawsly.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderContainer className="w-full h-20 shadow">
        <Header className="flex flex-row justify-between h-full items-center w-container my-0 mx-auto">
          <Logo className="h-12 w-auto" src="/vercel.svg" />
          <Header.Actions className="flex flex-row justify-end gap-x-4 items-center">
            <Button
              type="icon"
              icon={<SearchIcon className="h-6 w-6 stroke-1" />}
              onClick={() => {}}
            />
            <Button
              type="icon"
              icon={<BookmarkIcon className="h-6 w-6 stroke-1" />}
              onClick={() => {}}
            />
            <Button
              type="icon"
              icon={<BellIcon className="h-6 w-6 stroke-1" />}
              onClick={() => {}}
            />
            <Write
              content="Write"
              type="outline"
              onClick={() => console.log('write')}
            />
            {/* <ProfileIcon /> */}
          </Header.Actions>
        </Header>
      </HeaderContainer>
      <Main className="flex flex-row w-container my-0 mx-auto justify-center h-full py-4">
        <Content className="flex flex-col flex-2 h-full">
          <Quote />
          {/* TODO: Create story section here */}
          <BlogPosts className="flex flex-col gap-y-8 my-4">
            {posts.map((post) => (
              <BlogPost key={post.id} data={post} />
            ))}
          </BlogPosts>
        </Content>
        <Divider className="min-h-screen w-px bg-divider mx-8 -mt-4" />
        <Sidebar className="flex flex-col flex-1">
          <Sidebar.Content className="bg-warning gap-y-8 sticky h-sidebar top-0 mt-0">
            Test 2
          </Sidebar.Content>
        </Sidebar>
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div``;
const HeaderContainer = styled.header``;
const Header = styled.div``;
const Logo = styled.img``;
const Actions = styled.div``;
const Write = styled(Button)``;
const Main = styled.main``;
const Content = styled.section``;
const Sidebar = styled.aside``;
const BlogPosts = styled.div``;
const SidebarContent = styled.div``;
const Divider = styled.div``;
Sidebar.Content = SidebarContent;
Header.Actions = Actions;
