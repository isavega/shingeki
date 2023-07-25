import React from "react";
import styled from "styled-components";

interface MainContainerProps {
  backgroundimage: string;
  children: React.ReactNode;
}

const MainContainerWrapper = styled.div<MainContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundimage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer: React.FC<MainContainerProps> = ({
  backgroundimage,
  children,
}) => {
  return (
    <MainContainerWrapper backgroundimage={backgroundimage}>
      {children}
    </MainContainerWrapper>
  );
};

export default MainContainer;
