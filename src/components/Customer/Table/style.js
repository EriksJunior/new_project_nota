import styled from "styled-components";

export const ContentTable = styled.div`
  th, td {
    font-size: 14px;
  }

  tbody {
    /* background-color: red; */
  }

  .name{
    color: rgb(2, 118, 156)!important;
    cursor: pointer;
    transition: all 0.2s;
  }

  .name:hover > td{
    text-decoration: underline;
    color: deepskyblue!important;
  }


  box-shadow: black 0px 1px 3px 1px!important ;
`