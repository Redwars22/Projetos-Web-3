import React from 'react';
import styled from 'styled-components';

export default function LeftBarComponent() {
  function reloadPage() {
    window.location.reload(false);
  }

  return (
    <LeftBar className="column left-side">
      <AppIcon src="https://redwars22.github.io/Projetos-Web-3/resx/caldera.png" />
      <Line />
      <Button onClick={reloadPage}>
        <i className="material-icons">autorenew</i>
      </Button>
      <Button
        onClick={() =>
          window.open('https://redwars22.github.io/Projetos-Web-3/')
        }
      >
        <i className="material-icons">apps</i>
      </Button>
      <Button
        onClick={() =>
          window.alert(
            'ProjectCaldera. Gerador de senhas aleatórias criado por André Pereira(@Redwars22) usando ReactJS.'
          )
        }
      >
        <i className="material-icons">info</i>
      </Button>
      <Button
        onClick={() =>
          window.open(
            'https://redwars22.notion.site/Ajuda-do-Project-Caldera-61c4af25d5704fbeb282cec62ccd992c'
          )
        }
      >
        <i className="material-icons">live_help</i>
      </Button>
      <Button
        onClick={() => window.open('mailto:andrewpereira.megabyte@gmail.com')}
      >
        <i className="material-icons">bug_report</i>
      </Button>
    </LeftBar>
  );
}

const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 3px solid seagreen;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const AppIcon = styled.img`
  height: 55px;
  width: 55px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: white;
  background-color: var(--dark-green);
  padding: 10px;
  margin-top: 15px;
  border: 4px solid green;
  border-radius: 10px;
`;

const Line = styled.hr`
  width: 90%;
  opacity: 15%;
  border: 0.5px dotted var(--dark-green);
  margin-top: 10px;
`;
