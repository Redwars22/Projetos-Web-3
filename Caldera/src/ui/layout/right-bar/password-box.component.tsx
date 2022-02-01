import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

function generatePassword() {
  const abc = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const ABC = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const symbols = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '+',
    '=',
    '`',
    '{',
    '}',
    '[',
    ']',
    '^',
    '~',
    ':',
    ';',
    '.',
    ',',
    '/',
    '\\',
  ];
  let code: string = '';
  let index: number = 0;
  let arr: number = 0;

  for (let i = 0; i < 16; i++) {
    arr = Math.floor(Math.random() * 8);
    if (arr == 0 || arr == 4) {
      index = Math.floor(Math.random() * 16);
      code += abc[index];
    } else if (arr == 1 || arr == 5) {
      index = Math.floor(Math.random() * 16);
      code += ABC[index];
    } else if (arr == 2 || arr == 6) {
      index = Math.floor(Math.random() * 10);
      code += number[index];
    } else if (arr == 3 || arr == 7) {
      index = Math.floor(Math.random() * 26);
      code += symbols[index];
    }
    /*index = Math.floor(Math.random() * 16);
    code += abc[index];*/
  }

  document.getElementById('password').innerText = code;
}

export default function PasswordBox() {
  useEffect(() => {
    generatePassword();
  });

  return (
    <PasswordBoxContainer>
      <PasswordText id="password">945dXn*&!@rTt$5^</PasswordText>
    </PasswordBoxContainer>
  );
}

const PasswordBoxContainer = styled.div`
  min-height: 80px;
  min-width: fit-content;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  border-radius: 20px;
  border: 10px solid seagreen;
  background-color: var(--light-green);
  color: white;
  display: grid;
  place-items: center;

  @media (min-width: 481px){
    min-width: fit-content;
    max-width: 60%;
  }
`;

const PasswordText = styled.span`
  font-size: 25px;
  padding: 10px;
  font-weight: bold;

  @media (min-width: 481px){
    font-size: 70px;
  }
`;
