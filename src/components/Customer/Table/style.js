import { BsTrash } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

import styled from "styled-components";

export const IconEdit = styled(TbEdit)`
&:hover{
  color: greenyellow;
}
`

export const IconDelete = styled(BsTrash)`
&:hover{
  color: red;
}
`