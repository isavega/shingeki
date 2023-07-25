import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownData {
  rid: number;
  name: string;
  measure: string;
}

interface DropdownProps {
  options: Array<DropdownData>;
  onSelect: (selectedOption: DropdownData) => void;
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
`;

const DropdownButton = styled.button`
  background-color: #f1f1f1;
  width: 300px;
  color: #333;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-family: "Raleway", sans-serif;

  align-items: center;
`;

const DropdownIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  width: 16px;
  height: 16px;
`;

const DropdownList = styled.ul<{ isopen: boolean }>`
  width: 300px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  font-family: "Raleway", sans-serif;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${({ isopen }) => (isopen ? "block" : "none")};
`;

const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  font-family: "Raleway", sans-serif;

  &:hover {
    background-color: #ddd;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isopen, setisopen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (option: DropdownData) => {
    setSelectedOption(option.name);
    setisopen(false);
    onSelect(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setisopen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setisopen(!isopen)}>
        <span>{selectedOption || "Seleccione un recurso"}</span>
        <DropdownIcon icon={faCaretDown} />
      </DropdownButton>
      {isopen && (
        <DropdownList isopen={isopen}>
          {options.map((option) => (
            <DropdownItem
              key={option.rid}
              onClick={() => handleItemClick(option)}
            >
              {option.name}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
