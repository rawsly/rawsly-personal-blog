import Head from 'next/head';
import styled from 'styled-components';
import { SearchIcon, BookmarkIcon, BellIcon } from '@heroicons/react/outline';

import { Button, Quote, BlogPost, Tag, FeaturedPost, Footer } from 'components';
import { posts } from 'dummy-data/posts';
import { categories } from 'dummy-data/categories';

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
          <Sidebar.Content className="sticky top-4 mt-0">
            <Sidebar.Actions className="flex flex-col justify-between items-start px-8 py-4 bg-primary-light rounded-xl">
              <Link className="text-black-100 text-base my-2">Yeni Gelen SSS</Link>
              <Link className="text-black-100 text-base my-2">İlgi Alanlarını Seç</Link>
              <Button className="my-2" type="primary" content="Yeni Makale" onClick={() => console.log("yeni makale!")} />
            </Sidebar.Actions>
            <Space className="h-8" />
            <FeaturedCategories className="flex flex-col gap-y-4">
              <FeaturedCategories.Title className="text-100 font-bold text-lg">Öne çıkan kategoriler</FeaturedCategories.Title>
              <FeaturedCategories.Categories className="flex flex-row gap-x-4 gap-y-4 flex-wrap">
                {categories.map(category => <Tag key={category.id} data={category} />)}
              </FeaturedCategories.Categories>
            </FeaturedCategories>
            <Space className="h-8" />
            <FeaturedPosts className="flex flex-col gap-y-4">
              <FeaturedPosts.Title className="text-100 font-bold text-lg">Öne çıkan makaleler</FeaturedPosts.Title>
              <FeaturedPosts.Posts className="flex flex-col gap-y-4">
                {posts.slice(0, 5).map(post => <FeaturedPost key={post.id} data={post} />)}
              </FeaturedPosts.Posts>
            </FeaturedPosts>
            <Space className="h-8" />
            <ShortDivider className="w-28 h-px bg-divider" />
            <Space className="h-8" />
            <Footer />
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
const Write = styled(Button)``;
const Main = styled.main``;
const Content = styled.section``;
const Sidebar = styled.aside``;
const BlogPosts = styled.div``;
const Divider = styled.div``;
const Link = styled.a``;
const FeaturedCategories = styled.div``;
const FeaturedPosts = styled.div``;
const Posts = styled.div``;
const Title = styled.div``;
const Categories = styled.div``;
const SidebarContent = styled.div``;
const SidebarActions = styled.div``;
const HeaderActions = styled.div``;
const Space = styled.div``;
const ShortDivider = styled.div``;
Header.Actions = HeaderActions;
Sidebar.Content = SidebarContent;
Sidebar.Actions = SidebarActions;
FeaturedCategories.Title = Title;
FeaturedPosts.Title = Title;
FeaturedPosts.Posts = Posts;
FeaturedCategories.Categories = Categories;
