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
    }
    100% {
      opacity: 1
    }
  }
`

export const Div = styled.div`

`

export const DivContentCheckBox = styled.div`
  margin-top: 28px;
`

export const Label = styled.label`
  color: white;
`

export const LabelForCheckBox = styled.label`
  color: #11b1e5;
`

export const Select = styled.select`
`

export const Option = styled.option`
`

export const Input = styled.input`
`

export const InputCheckbox = styled.input`
`

export const PAlert = styled.p`
  color: #11b1e5;
`

export const P = styled.p`
  color: white;
`


export const ContentGeneralButtons = styled.div`
  border-top: solid 1px #0d566f;

`

export const ContentButtonsSaveOrClear = styled.div`
  display: flex;
  gap: 20px;
`

export const Button = styled.button`
`