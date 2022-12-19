import styled from "styled-components";

import { BsTrash } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

export const CardHeader = styled.div`
  width: 100%;
  background-color: #202529;
  margin-bottom: 10px;
  color: #ebebeb;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 19px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px black;
  p{
    margin: 0;
  }
`

export const IconEdit = styled(TbEdit)`
&:hover{
  color: #3bd240;
}
`

export const IconDelete = styled(BsTrash)`
&:hover{
  color: red;
}
`