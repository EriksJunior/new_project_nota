import styled from "styled-components";

export const ContainerGeneral = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  min-height: 100vh;
  position: fixed;
  top: 0;
  z-index: 2000;
  background-color: #0d566fa1;
  animation: opacFade 0.15s;

  @keyframes opacFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &.hide {
    display: none;
  }

  &.show {
    display: block;
    animation: opacFadeInDown 0.18s;
  }

`

export const ContentModalChildren = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;

`

export const ModalChildren = styled.div`
  width: 500px;
`