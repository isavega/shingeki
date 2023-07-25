import styled from "styled-components";

interface AlertProps {
  text: string;
}

const AlertContainer = styled.div`
  font-family: "Raleway", sans-serif;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f00;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  transition: opacity 0.3s ease;
`;

const Alert: React.FC<AlertProps> = ({ text }) => {
  return <AlertContainer>{text}</AlertContainer>;
};

export default Alert;
