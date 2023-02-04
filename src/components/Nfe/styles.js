import styled from "styled-components";

export const ContentNfe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentNav = styled.div`
  width: 80%;
  margin-top: 10px;
  border-radius: 5px;

  @media screen and (max-width: 794px) {
    width: 100%;
  }
`

export const ContentHeaderTitle = styled.div`
  h5 {
    color: #b4b2b2;
  }

  hr {
    color: #b4b2b2;
  }
`