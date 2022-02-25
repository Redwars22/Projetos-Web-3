import React from 'react';
import styled from 'styled-components';
import { Data } from '../code/filehandling';
import { Logic } from '../code/logic';

export default function HeaderComponent() {
  let data = new Data();
  let logic = new Logic();

  function aboutWindow() {
    window.alert(
      'ProjectMammoth. Criado por André Pereira(@Redwars22) em Bootstrap Icons, Styled-Componets e ReactJS'
    );
  }

  function moreProjects() {
    window.open('https://redwars22.github.io/Projetos-Web-3/');
  }

  return (
    <Header>
      <AppIcon
        src="https://redwars22.github.io/Projetos-Web-3/resx/mammoth.png"
        width="50"
      ></AppIcon>
      <div>
        <Button title="Salvar" onClick={data.saveData}>
          <i className="bi bi-save"></i>
        </Button>
        <Button title="Gerar código CSS" onClick={logic.getCode}>
          <i className="bi bi-code-slash"></i>
        </Button>
        <Button title="Abrir" onClick={data.openData}>
          <i className="bi bi-folder2-open"></i>
        </Button>
        <Button title="Sobre o App" onClick={aboutWindow}>
          <i className="bi bi-info-square"></i>
        </Button>
        <Button title="Mais Projetos" onClick={moreProjects}>
          <i className="bi bi-window-dock"></i>
        </Button>
      </div>
    </Header>
  );
}

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const AppIcon = styled.img`
  margin-right: 20px;
`;

const Button = styled.button`
  margin: 2px;
  width: 35px;
  height: 35px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: lightgreen;
  color: black;

  :hover {
    background-color: green;
    color: white;
  }
`;
