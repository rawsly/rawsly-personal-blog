import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container className="flex flex-row justify-start gap-x-8">
      <Link className="font-base text-default" href="/hakkimda">Hakkımda</Link>
      <Link className="font-base text-default" href="/iletisim">İletişim</Link>
      <Link className="font-base text-default" href="/sosyal-medya">Sosyal Medya</Link>
    </Container>
  )
};

export default Footer;

const Container = styled.div``;
const Link = styled.a``;