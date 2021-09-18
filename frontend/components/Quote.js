import React from 'react';
import styled from 'styled-components';

const Quote = () => {
  return (
    <Container className="flex flex-row w-full h-10 items-center justify-start">
      <Title className="text-sm font-semibold uppercase">Quote</Title>
      <Divider className="mx-4 h-9 w-1 bg-default-light rounded" />
      <Content className="text-lg text-default">“Hard work keeps the wrinkles out of the mind and spirit.”</Content>
      <Author className="text-lg text-default-light">- Helena Rubinstein</Author>
    </Container>
  )
}

export default Quote;

const Container = styled.div``;
const Title = styled.p``;
const Divider = styled.div``;
const Content = styled.p``;
const Author = styled.p``;
