import React from "react";
import styled from "styled-components";

interface TitleProps {
  text: string;
}

const StyledTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 300;
  color: #ffffff;
`;

const Title: React.FC<TitleProps> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
