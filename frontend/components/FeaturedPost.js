import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Metadata } from 'components';

const Container = styled.div``;
const Title = styled.h1``;

const FeaturedPost = ({ data }) => {
  const { title, duration, date, author } = data;
  console.log(data);
  return (
    <Container className="flex flex-col justify-between">
      <Title className="text-100 font-semibold text-xl">{title}</Title>
      <Metadata date={date} author={author} duration={duration} />
    </Container>
  )
}

FeaturedPost.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
  }).isRequired,
}

export default FeaturedPost;
