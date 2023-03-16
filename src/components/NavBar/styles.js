import styled from "styled-components";

export const ContentNavIcons = styled.div`
  width: 100%;
  display: flex;
`

export const ContentExitIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .iconCenter {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .exitIcon {
    transition: ease-in 0.2s all;
    color: red;
  }

  .exitIconLeav {
    transition: ease-in 0.2s all;
    color: white;
  }
`
