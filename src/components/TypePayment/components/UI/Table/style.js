import styled from "styled-components";

export const ContentTable = styled.div`
  box-shadow: black 0px 1px 3px 1px!important ;

  table {
    width: 95%;
    background-color: #0d566f;
    border-radius: 5px;
    
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

  .underlineTypePayment:hover > .tdName{
    text-decoration: underline;
    color: deepskyblue!important;
  }
`


export const Container = styled.div`
`
