import React from 'react';
import styled from 'styled-components';

export default function BoxShadowPreviewComponent() {
  return <BoxShadowPreview id="box" />;
}

const BoxShadowPreview = styled.div`
  min-width: 130px;
  max-width: 130px;
  max-height: 130px;
  background-color: white;
  border-radius: 10px;

  @media (min-width: 500px){
    min-width: 180px;
    max-width: 180px;
    max-height: 180px;
  }
`;
