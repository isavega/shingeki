import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #de2727;
  width: 300px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  margin-bottom: 15px;

  &:hover {
    background-color: #ee6565;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
