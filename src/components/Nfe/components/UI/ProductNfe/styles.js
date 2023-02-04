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

export const Separator = styled.div`
 height: 20px;
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
  border-right: 1px solid white;
`

export const TdWidth16 = styled.td`
  width: 12%;
  border-right: 1px solid white;
`

export const TdWidth12 = styled.td`
  width: 12%;
  border-right: 1px solid white;
`

export const TdWidthTotal = styled.td`
  width: 12%;
`

export const TdWidth10 = styled.td`
  width: 12%;
  border-right: 1px solid white;
`

export const TableHeader = styled.tr`
  display: flex;
  background-color: #02769c;
  border-radius: 5px;
  
   tr, td{
    border-top: none;
    border-bottom: none;
    border-left: none;
    padding: 5px;
    color: white;
  }
`

export const TableBodyContent = styled.tr`
  width: 100%;
  display: flex;
  border: solid 1px #02769c;
  border-radius: 5px ;

    @media screen and (max-width: 1190px) {
      min-width: 690px;
    }
`