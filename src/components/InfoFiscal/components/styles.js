import styled from "styled-components";

export const ContentInfoFiscal = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;


  @media screen and (max-width: 1614px) {
    width: 100%;
    flex-direction: column;
  }
`

export const CardInfoFiscal = styled.div`
  width: 100%;
  height: 250px;
  overflow-x: auto;
  border-radius: 5px;
  padding: 10px;

  @media screen and (max-width: 1000px) {
    height: auto;
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