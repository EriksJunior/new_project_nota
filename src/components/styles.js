import styled from "styled-components";

import { BsTrash } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

export const CardHeader = styled.div`
  width: 99.8%;
  background-color: #02769c9c;
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

export const CardHeaderTextCenter = styled.div`
  width: 100%;
  margin-bottom: 10px;
  color: #ebebeb;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  border-radius: 5px;
  
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


export const AnimateCard = styled.div`
  .animate {
    animation-name: alterOpacity;
    animation-duration: 0.3s;
  }

  @keyframes alterOpacity {
    0% {
      opacity: 0;
      /* transform: rotateX(0deg); */
    }
    100% {
      /* transform: rotateY(360deg); */
      opacity: 1
    }
  }
`