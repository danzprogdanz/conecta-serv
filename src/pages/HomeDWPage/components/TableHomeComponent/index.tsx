import React, { useEffect, useState } from "react";
import { ColumnHeadRowStyled, ColumnNameElementStyled, CustomLink, NoOptionAvailableWrapper, THeadStyled, TableCellActionsPropsStyled, TableCellPropsStyled, TableContainerStyled, TableRowStyled } from "./styled";
import StatusIndicatorCommon from "../../../../commons/StatusIndicatorCommon";
import { useNavigate } from "react-router-dom";
import SmallButtonCommon from "../../../../commons/SmallButtonCommon";

interface IProps {
  tableData?: any;
}

// Import statements...
const TableHomeComponent: React.FC<IProps> = ({
  tableData,
}) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState<string>('');
  const [itemToDeleteCode, setItemToDeleteCode] = useState<string>('');
  const [itemToEditId, setItemToEditId] = useState<string>('');

  useEffect(() => {
    console.log(itemToDeleteCode)
    console.log(itemToDeleteId)

  }, [itemToDeleteCode, itemToDeleteId])
  
  const handleDeleteClick = (objectId: string, objectCode: string) => {
    setItemToDeleteId(objectId);
    setIsModalDeleteOpen(true);
    setItemToDeleteCode(objectCode);
  };

  const handleEditClick = (objectId: string) => {
    setItemToEditId(objectId);
    setIsModalEditOpen(true);
  };

  useEffect(() => {console.log(tableData)}, [tableData])

  const navigate = useNavigate();

  const onClickTableCell = (id: string) => {
    navigate(`/dispositivos/${id}`);
  }

  return (
    <>
      <TableContainerStyled $variant="details">
        <THeadStyled>
          <ColumnHeadRowStyled $variant="details">
            <ColumnNameElementStyled $flex="1">xxxxx</ColumnNameElementStyled>
            <ColumnNameElementStyled $flex="2">
              yyyyyyyy
            </ColumnNameElementStyled>
            <ColumnNameElementStyled $flex="4">
              wwwwwww
            </ColumnNameElementStyled>
            <ColumnNameElementStyled $flex="1.5">Status</ColumnNameElementStyled>
            <ColumnNameElementStyled $flex="3">Ações</ColumnNameElementStyled>
          </ColumnHeadRowStyled>
        </THeadStyled>
        {/* <tbody>
          {tableData.length > 0 ? (tableData.map((item: any, index: any) => (
              <TableRowStyled  key={index} $variant="details">
                <TableCellPropsStyled onClick={() => onClickTableCell(item.id)} $flex="1" $variant="details">
                  {item.Camera}
                </TableCellPropsStyled>
                <TableCellPropsStyled onClick={() => onClickTableCell(item.id)} $flex="2" $variant="details">
                  {item.CidadeUF}
                </TableCellPropsStyled>
                <TableCellPropsStyled onClick={() => onClickTableCell(item.id)} $flex="4" $variant="details">
                  {item.Endereco}
                </TableCellPropsStyled>
                <TableCellPropsStyled onClick={() => onClickTableCell(item.id)} $flex="1.5" $variant="details">
                  <StatusIndicatorCommon isActive={item.Status} />
                </TableCellPropsStyled>
                <TableCellActionsPropsStyled $flex="3" $variant="details">
                  <SmallButtonCommon
                    /* variant="deleteElement"
                    tooltipContent="Deletar"
                    onClick={() => handleDeleteClick(item.id, item.Camera)}
                  />
                  <SmallButtonCommon
                    /* variant="edit" 
                    tooltipContent="Editar"
                    onClick={() => handleEditClick(item.id)}
                  />
                  <CustomLink to={`/dispositivos/${item.id}/modulos`}>
                    <SmallButtonCommon 
                      /* variant="analytics"  
                      tooltipContent="Analítico"
                      onClick={() => console.log(item)}
                    />
                  </CustomLink>
                  {/* <CustomLink to="/home/configurarcamera" > */}
                    {/* <SmallButtonDWCommon 
                      variant="camsettings" 
                      tooltipContent="Câmera"
                      $isDisabled={true}
                  /> */}
                  {/* </CustomLink> }
                </TableCellActionsPropsStyled>
              </TableRowStyled>
          ))) : (
            <tr>
              <td>
              <NoOptionAvailableWrapper>
                Sem opções disponíveis
              </NoOptionAvailableWrapper>
              </td>
            </tr>
          )}
        </tbody> */ }
      </TableContainerStyled>
    </>
  );
};

export default TableHomeComponent;
