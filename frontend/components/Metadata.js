import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Metadata = ({ date, duration, author }) => {
  const { username, profilePhoto } = author;
  return (
    <Container className="flex flex-row justify-start text-default-light text-sm items-center">
      <Date>{date}</Date>
      <Dot className="dot" />
      <Duration>{duration}</Duration>
      <Dot className="dot" />
      <Author className="text-primary text-default font-bold">{username}</Author>
    </Container>
  )
}

Metadata.propTypes = {
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  author: PropTypes.shape({
    profilePhoto: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
}

export default Metadata;

const Container = styled.div``;
const Date = styled.p``;
const Dot = styled.div``;
const Duration = styled.p``;
const Author = styled.div``;
