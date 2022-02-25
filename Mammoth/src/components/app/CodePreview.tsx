import React from 'react';
import styled from 'styled-components';

export default function CodePreviewComponent() {
  return (
    <Container>
      <Code id="code"></Code>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: -20px;
`;

const Code = styled.span`
  color: white;
  font-size: 25px;
`;
