import React, { useEffect, useState } from "react";
import {
  ColumnHeadRowStyled,
  ColumnNameElementStyled,
  CustomLink,
  NoOptionAvailableWrapper,
  THeadStyled,
  TableCellActionsPropsStyled,
  TableCellPropsStyled,
  TableContainerStyled,
  TableRowStyled,
  TagWrapperStyled,
} from "./styled";
import StatusIndicatorCommon from "../../../../commons/StatusIndicatorCommon";
import { useNavigate } from "react-router-dom";
import SmallButtonCommon from "../../../../commons/SmallButtonCommon";

interface IProps {
  tableData?: any;
  onClickTableCell: (id: string) => void;
  userSelected?: string | null;
}

// Import statements...
const TableHomeComponent: React.FC<IProps> = ({ tableData, onClickTableCell, userSelected }) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState<string>("");
  const [itemToDeleteCode, setItemToDeleteCode] = useState<string>("");
  const [itemToEditId, setItemToEditId] = useState<string>("");

  useEffect(() => {
    console.log(itemToDeleteCode);
    console.log(itemToDeleteId);
  }, [itemToDeleteCode, itemToDeleteId]);

  const handleDeleteClick = (objectId: string, objectCode: string) => {
    setItemToDeleteId(objectId);
    setIsModalDeleteOpen(true);
    setItemToDeleteCode(objectCode);
  };

  const handleEditClick = (objectId: string) => {
    setItemToEditId(objectId);
    setIsModalEditOpen(true);
  };

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  const navigate = useNavigate();

  return (
    <>
      <TableContainerStyled $variant="details">
        <THeadStyled>
          <ColumnHeadRowStyled $variant="details">
            <ColumnNameElementStyled $flex="3">Serviço</ColumnNameElementStyled>
            <ColumnNameElementStyled $flex="1">Nome</ColumnNameElementStyled>
            <ColumnNameElementStyled $flex="1">Bairro</ColumnNameElementStyled>
            <ColumnNameElementStyled $flex="1">Status</ColumnNameElementStyled>
          </ColumnHeadRowStyled>
        </THeadStyled>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item: any, index: any) => (
              <TableRowStyled key={index} $variant="details" $isActive={userSelected === item.id}>
                <TableCellPropsStyled
                  onClick={() => onClickTableCell(item.id)}
                  $flex="3"
                  $variant="details"
                >
                  {Array.isArray(item.tagsList) &&
                    item.tagsList.length > 0 &&
                    item.tagsList.map((el: string, index: number) => (
                      <TagWrapperStyled key={index}>{el}</TagWrapperStyled>
                    ))}
                </TableCellPropsStyled>
                <TableCellPropsStyled
                  onClick={() => onClickTableCell(item.id)}
                  $flex="1"
                  $variant="details"
                >
                  {item.name}
                </TableCellPropsStyled>
                <TableCellPropsStyled
                  onClick={() => onClickTableCell(item.id)}
                  $flex="1"
                  $variant="details"
                >
                  {item.district}
                </TableCellPropsStyled>
                <TableCellPropsStyled
                  onClick={() => onClickTableCell(item.id)}
                  $flex="1"
                  $variant="details"
                >
                  <StatusIndicatorCommon isActive={item.Status} />
                </TableCellPropsStyled>
              </TableRowStyled>
            ))
          ) : (
            <tr>
              <td>
                <NoOptionAvailableWrapper>
                  Sem opções disponíveis
                </NoOptionAvailableWrapper>
              </td>
            </tr>
          )}
        </tbody>
      </TableContainerStyled>
    </>
  );
};

export default TableHomeComponent;
