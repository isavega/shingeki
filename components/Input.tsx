import React, { useState } from "react";
import styled from "styled-components";

interface InputProps {
  value: number;
  onChange: (newValue: number) => void;
  placeholder?: string;
  measure: string;
}

const InputContainer = styled.div`
  display: flex;
  font-family: "Raleway", sans-serif;
  align-items: center;
  width: 300px;
  height: 40px;
  border-radius: 12px;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  text-align: center;
`;

const MeasureText = styled.span`
  padding: 10px;
  font-family: "Raleway", sans-serif;
  background-color: #de2727;
  color: #fff;
`;

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  measure,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  return (
    <InputContainer>
      <StyledInput
        type="number"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <MeasureText>{measure}</MeasureText>
    </InputContainer>
  );
};

export default Input;
