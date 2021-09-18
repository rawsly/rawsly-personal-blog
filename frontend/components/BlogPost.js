import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tag, Button } from 'components';
import { BookmarkAltIcon, DotsHorizontalIcon } from '@heroicons/react/outline';

const FeaturedImage = styled.img``;
const Details = styled.div``;
const Title = styled.h1``;
const Description = styled.p``;
const Tags = styled.div``;
const Meta = styled.div``;
const Metadata = styled.div``;
const Actions = styled.div``;
const Date = styled.p``;
const Duration = styled.p``;
const Author = styled.div``;
const Dot = styled.div``;

const BlogPost = ({ data }) => {
  const { title, description, tags, date, duration, author, featuredImg } = data;
  const { profilePhoto, username } = author;

  return (
    <Container className="flex flex-row p-4 shadow rounded-lg bg-secondary transition-shadow hover:cursor-pointer hover:shadow-md" onClick={() => console.log(data)}>
      <Details className="flex flex-col flex-1 justify-between">
        <Title className="text-title text-2xl font-bold">{title}</Title>
        <Description className="text-default text-lg font-light">{description}</Description>
        <Tags className="flex flex-row gap-x-4 justify-start my-4">
          {tags.map(tag => <Tag key={tag.id} data={tag} />)}
        </Tags>
        <Meta className="flex flex-row justify-between">
          <Metadata className="flex flex-row justify-start text-default-light text-sm items-center">
            <Date>{date}</Date>
            <Dot className="dot" />
            <Duration>{duration}</Duration>
            <Dot className="dot" />
            <Author className="text-primary text-default font-bold">{username}</Author>
          </Metadata>
          <Actions className="flex flex-row gap-x-4">
            <Button type="icon" icon={<BookmarkAltIcon className="h-6 w-6 stroke-1" />} onClick={() => {}} />
            <Button type="icon" icon={<DotsHorizontalIcon className="h-6 w-6 stroke-1" />} onClick={() => {}} />
          </Actions>
        </Meta>
      </Details>
      <FeaturedImage className="h-featured-img w-featured-img h-auto rounded-lg ml-4" src={featuredImg} />
    </Container>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    })).isRequired,
    date: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    author: PropTypes.shape({
      profilePhoto: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    featuredImg: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogPost;

const Container = styled.article``;
