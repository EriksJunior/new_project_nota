import styled from "styled-components";
export const ContainerGeneral = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  outline: 0;
  background-color: #0d566fa1;

  &.hide {
    display: none;
  }

  &.show {
    display: block;
  }
`

export const ContentModalChildren = styled.div`
  display: flex;
  justify-content: center;
`