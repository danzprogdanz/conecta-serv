import React, { useState, useEffect } from "react";
import { UserCardStyled } from "./styled";

interface IErrorObject {
  type: string;
  fields: string[];
}

interface IProps {

}

const UserCardComponent: React.FC<IProps> = () => {

  return (

    <UserCardStyled>

    </UserCardStyled>
  );
};

export default UserCardComponent;
