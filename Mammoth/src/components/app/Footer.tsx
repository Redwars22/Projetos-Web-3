import React from 'react';
import AuthorBadgeComponent from './AuthorBadge';
import styled from 'styled-components';

export default function FooterComponent() {
  return (
    <Footer>
      <Text>Criado usando Bootstrap Icons, Styled-Components e ReactJS</Text>
      <a href="https://github.com/Redwars22">
        <AuthorBadgeComponent />
      </a>
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10vh;
`;

const Text = styled.p`
  color: black;
`;
