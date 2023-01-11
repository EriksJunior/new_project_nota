import styled from "styled-components";

export const ContentProduct = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 869px) {
    flex-direction: column;
    gap: 10px;
  }

`
export const ContentMetrics = styled.div`
  width: 29%;
  height: 100%;

    @media screen and (max-width: 869px) {
    width: 100%;
  }
`