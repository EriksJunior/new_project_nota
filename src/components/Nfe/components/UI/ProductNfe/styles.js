import styled from "styled-components";

export const ContentTable = styled.div`
    /* overflow-x: auto; */

  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  ::-webkit-scrollbar {
      height:10px;
      background: #F4F4F4;
      border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
      background: deepskyblue;
      border-radius: 5px;
  }
`

export const Table = styled.table`
    width: 100%;
   @media screen and (max-width: 1191px) {
      min-width: 690px;
      /* overflow-x: auto; */
    }
`

export const InputTable = styled.input`
  width: 100%;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: none;
  background-color: #202529;
  outline: none;
  color: #b4b2b2;
`

export const InputSelect = styled.select`
  width: 100%;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: none;
  background-color: #202529;
  outline: none;
  color: #b4b2b2;

  .form-select:focus {
    border-color: red!important;
    outline: 0;
    box-shadow: 0 0 0 0.10rem  red!important;
  }
`


export const TdHeaderName = styled.td`
  width: 30%;
  border-right: 1px solid #b4b2b2;
`

export const TdBodyName = styled.td`
  width: 30%;
  border: solid 1px #02769c;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

export const TdHeaderUnit = styled.td`
  width: 12%;
  border-right: 1px solid #b4b2b2;
`

export const TdBodyUnit = styled.td`
  width: 12%;
  border: solid 1px #02769c;
`

export const TdHeaderAmmount = styled.td`
  width: 10%;
  border-right: 1px solid #b4b2b2;
`

export const TdBodyAmmount = styled.td`
  width: 10%;
  border: solid 1px #02769c;
`

export const TdHeaderSubtotal = styled.td`
  width: 15%;
  border-right: 1px solid #b4b2b2;
`

export const TdBodySubtotal = styled.td`
  width: 15%;
  border: solid 1px #02769c;
`

export const TdHeaderDiscount = styled.td`
  width: 15%;
  border-right: 1px solid #b4b2b2;
`

export const TdBodyDiscount = styled.td`
  width: 15%;
  border: solid 1px #02769c;
`

export const TdHeaderTotal = styled.td`
  width: 13.6%;
  background-color: #02769c;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const TdBodyTotal = styled.td`
  width: 13.6%;
  border: solid 1px #02769c;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const Scrollllll = styled.div`
   @media screen and (max-width: 1191px) {
      overflow-x: auto;

      .dropdownActions {
        right: 190px!important;
        bottom: 30px!important;
      }
    }
`

export const TdActions = styled.td`
  width: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .productActions {
    position: absolute;
    right: 0px;
  }

  .dropdownActions{
    display: none;
    position: absolute;
    right: 30px;
    bottom: 0px;
    z-index: 999;
  }

  .action {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .action:focus ~ .dropdownActions{
    display: block;
  }
`

export const TableHeader = styled.tr`
  width: 100%;
  display: flex;
  
   tr, td{
    border-top: none;
    border-bottom: none;
    border-left: none;
    padding: 5px;
    color: white;
  }

  .colorTdHeader {
    background-color: #02769c;
  }
  .fistTdItemHeader {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

export const TrBodyContent = styled.tr`
  width: 100%;
  display: flex;
  border-radius: 5px ;
`

export const ContentButtonAddMoreItems = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`