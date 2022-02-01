import React from 'react';
import styled from 'styled-components';
import PasswordBox from './password-box.component';

export default function RightBarComponent() {
  return (
    <MainArea className="column right-side">
      <MonkeyEmoji>🙈️</MonkeyEmoji>
      <InfoText>Gerador de senhas aleatórias e seguras</InfoText>
      <PasswordBox />
      <AlertText>
        Guarde a senha num local seguro e não a compartilhe com ninguém!
      </AlertText>
      <LinkContainer>
        <Link href="https://github.com/Redwars22">
          Criado por André Pereira(@Redwars22)
        </Link>
      </LinkContainer>
    </MainArea>
  );
}

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MonkeyEmoji = styled.h1`
  font-size: 134px;
  text-align: center;
  margin-top: -10px;

  @media (min-width: 481px){
    font-size: 154px;
  }
`;

const InfoText = styled.h2`
  color: white;
  text-align: center;
  margin-top: -30px;
`;

const AlertText = styled.h3`
  color: white;
  text-align: center;
`;

const LinkContainer = styled.p`
  text-align: right;
  margin-right: 10px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
`;
