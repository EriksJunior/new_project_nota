import styled from "styled-components";

export const ContentTable = styled.div`
  overflow-x: auto;
  
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
   @media screen and (max-width: 1190px) {
      min-width: 690px;
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
  overflow-x: auto;

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


export const TdWidth33 = styled.td`
  width: 33%;
  border-right: 1px solid #b4b2b2;
`

export const TdWidth16 = styled.td`
  width: 12%;
  border-right: 1px solid #b4b2b2;
`

export const TdWidth12 = styled.td`
  width: 12%;
  border-right: 1px solid #b4b2b2;
`

export const TdWidthTotal = styled.td`
  width: 12%;
`

export const HeaderTdWidthTotal = styled.td`
  width: 12%;
  background-color: #02769c;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const TdWidth10 = styled.td`
  width: 12%;
  border-right: 1px solid #b4b2b2;
`

export const TdActions = styled.td`
  width: 12%;
  border-left: 1px solid #b4b2b2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InvisibleHeaderTdActions = styled.td`
 width: 12%;
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
  border: solid 1px #02769c;
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