import React from 'react';
import BoxShadowPreviewComponent from './BoxShadowPreview';
import styled from 'styled-components';
import { Logic } from '../code/logic';

export default function FormComponent() {
  let logic = new Logic();

  return (
    <FormContainer>
      <Form>
        <label htmlFor="shiftr">PARA A DIREITA</label>
        <Input type="number" id="shiftr" min="-50" max="50" defaultValue="0" />
        <label htmlFor="shiftd">PARA BAIXO</label>
        <Input type="number" id="shiftd" min="-50" max="50" defaultValue="0" />
        <label htmlFor="">BLUR</label>
        <Input type="number" id="blur" min="0" max="50" defaultValue="0" />
        <label htmlFor="spread">DISTÂNCIA</label>
        <Input type="number" id="spread" min="-30" max="50" defaultValue="0" />
        <label htmlFor="color">COR DA SOMBRA</label>
        <ColorInput type="color" id="color" />
        <label htmlFor="">COR DO QUADRADO</label>
        <ColorInput type="color" id="backg" defaultValue="#4f4f4f" />
        <Button onClick={applyShadow} title="Pré-visualizar">
          <i className="bi bi-eye"></i>
        </Button>
      </Form>
      <BoxShadowPreviewComponent />
    </FormContainer>
  );

  function applyShadow() {
    logic.applyEffects();
  }
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  gap: 25px;
  background-color: #00895cc9;
  padding: 15px;
  border-radius: 5px;
  margin-top: 15vh;

  @media (min-width: 500px){
    margin-left: 150px;
    margin-right: 150px;
    justify-content: space-around;
  }
`;

const Input = styled.input`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: #93c47d;
`;

const ColorInput = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #93c47d;
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: #93c47d;
  color: darkgreen;
  width: 60px;
  font-size: 25px;

  :hover {
    background-color: green;
    color: white;
  }
`;
