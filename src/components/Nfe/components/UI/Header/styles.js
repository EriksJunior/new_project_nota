import styled from "styled-components";

export const ContentNfeHeader = styled.div`
  width: 80%;

  @media screen and (max-width: 794px) {
    width: 100%;
  }

  .btnConfirm {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 35px;
  }

`

export const ContentModal = styled.div`
  width: 100%;
  background-color: black;
  padding: 15px;
  margin-top: 50px;
  border-radius: 5px;
  color: white;

  p {
    color: #b4b2b2
  }

  th,
  td {
    font-weight: 600;
  }
  
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 10px 8px;
  }

  section {
    width: 100%;
  }
 `