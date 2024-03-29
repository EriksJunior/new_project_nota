import styled from "styled-components";

export const InputLabel = styled.label`
  position: absolute;
  color: white;
  top: -3px;
  left: 2px;
  font-size: 12px;
  transition: all 0.3s;
  cursor: pointer;
  ${({focused}) => focused && `top: -20px; color: #86b7fe;`}
`

export const ButtonFilter = styled.button`
  position: relative;
  width: 150px;
  height: 100%;
  background-color: transparent;
  color: white;
  border-radius: 0.2rem;
  border: none;
  display: block;

  @media screen and (max-width: 1086px) {
    width: 100%;
  }

  @media screen and (max-width: 798px) {
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
  }
`

export const DropDownSelect = styled.div`
  width: 150px;
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 9999;
  background-color: white;
  border-radius: 0.2rem;
  max-height: 150px;
  overflow: auto;
  color: black;
  font-family: sans-serif;
  font-size: 14px;

  .items {
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
  }

  .items:hover {
    background-color: #02769c;
    color: white;
    transition: ease-in 0.1s all;
  }

  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  ::-webkit-scrollbar {
      width: 3px;
      background: #F4F4F4;
      border-radius: 0.2rem;
  }
  ::-webkit-scrollbar-thumb {
      background: deepskyblue;
      border-radius: 0.2rem;
  }

  @media screen and (max-width: 1086px) {
    width: 100%;
  }

  @media screen and (max-width: 861px) {
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
  }
`

export const ContentIcon = styled.span`
  color: white;
  position: absolute;
  right: 0;
`

export const AnimateDropDown = styled.div`
  .animateDrop {
    animation-name: animationDropDown;
    animation-duration: 0.3s;
  }

  @keyframes animationDropDown {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    } 
  }
`

export const ContentTileAndIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;

  @media screen and (max-width: 1086px) {
    width: 100%;
  }

  @media screen and (max-width: 861px) {
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    justify-content: center;
    width: 100%;
  }
` 

export const BorderButton = styled.div`
  position: relative;
  background-color: #02769c;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  transition: all 0.3s;

  &:focus-within {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.10rem deepskyblue;
  }

  @media screen and (max-width: 1086px) {
    width: 50%;
  }

  @media screen and (max-width: 861px) {
    width: 50%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
    margin-top: 16px;
  }
`
