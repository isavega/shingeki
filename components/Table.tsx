import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TableData {
  id: number;
  resource: string;
  quantity: string;
  entryDate: string;
}

interface TableProps {
  data: Array<TableData>;
  handleDeleteRow: (id: number) => void;
}

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 50%;
  border: 1px solid #ccc;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  font-family: "Raleway", sans-serif;
  color: #fff;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  font-family: "Raleway", sans-serif;
  color: #fff;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

const Table: React.FC<TableProps> = ({ data, handleDeleteRow }) => {
  const [tableData, setTableData] = useState<TableData[]>(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <TableContainer>
      <thead>
        <tr>
          <TableHeader>Recurso</TableHeader>
          <TableHeader>Cantidad</TableHeader>
          <TableHeader>Fecha Ingreso</TableHeader>
          <TableHeader>Eliminar</TableHeader>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <TableCell>{row.resource}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>{row.entryDate}</TableCell>
            <TableCell>
              <DeleteIcon
                icon={faTrash}
                onClick={() => handleDeleteRow(row.id)}
              />
            </TableCell>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
