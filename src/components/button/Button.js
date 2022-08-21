import React from 'react';
import styled, { css } from 'styled-components';

const _getColor = (color) => {
  switch (color) {
    case "lighter":
      return css`background-color: #a9d6e5;`;
    case "orange":
      return css`background-color: #ff8500;`;
    default:
      return css`background-color: #2a6f97;`;
  }
}

const StyledButton = styled.button`
  border: none;
  color: #fff;
  font-size: 45px;
  font-weight: medium;
  width: 105px;
  height: 105px;
  border-radius: 60px;
  cursor: pointer;
  ${(props) => _getColor(props.color)}
  ${(props) => {
    if (props.span > 1) {
      return css`
        grid-column: 1 / ${props.span} span;
        width: ${(props.span * 105) + (props.span * 5)}px;
      `
    } 
  }}
`;

const Button = (props) => { 
  return (
    <StyledButton color={props.color} span={props.span}>{props.children}</StyledButton>
  );
}

export default Button;