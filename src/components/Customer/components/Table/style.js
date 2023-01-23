import styled from "styled-components";

export const ContentTable = styled.div`

  th, td {
    font-size: 14px;
  }

  tbody {
    /* background-color: red; */
  }

  td{
    cursor: pointer;
    transition: all 0.2s;
  }

  .name:hover > td{
    text-decoration: underline;
    color: deepskyblue!important;
  }
`


export const Container = styled.div`
`
