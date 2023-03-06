import styled from "styled-components";

export const ContentTable = styled.div`
  box-shadow: black 0px 1px 3px 1px!important ;
  max-height: 200px;
  overflow-x: auto;

  table {
    width: 93%;
    background-color: #0d566f;
    border-radius: 5px;
    padding: 5px;
  }

  td {
    font-size: 14px;
    border-radius: 5px;
    background-color: black;
  }

  td{
    color: rgb(2, 118, 156)!important;
    cursor: pointer;
    transition: all 0.2s;
  }

  .underlineTypePayment:hover > .type{
    text-decoration: underline;
    color: deepskyblue!important;
  }

  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
      border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
      background: deepskyblue;
      border-radius: 5px;
  }
`


export const Container = styled.div`
`
