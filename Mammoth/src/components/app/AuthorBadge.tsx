import React from 'react';
import styled from 'styled-components';

export default function AuthorBadgeComponent() {
  return (
    <Badge>
      <p>Criado por @Redwars22</p>
      <Photo src="https://github.com/Redwars22.png" />
    </Badge>
  );
}

const Badge = styled.div`
  border: 1px solid #00895cc9;
  display: flex;
  flex-direction: row;
  padding: 5px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-radius: 9px;
  align-items: center;
  background-color: #00895cc9;
`;

const Photo = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
  border-radius: 100%;
`;
