import styled from "styled-components";

export const ButtonFilter = styled.button`
  width: 150px;
  height: 25px;
  background-color: transparent;
  color: #b4b2b2;
  border-radius: 0.2rem;
  border: none;
  display: block;

  @media screen and (max-width: 798px) {
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
  }
`

export const DropDownSelect = styled.div`
  width: 150px;
  /* display: flex;
  flex-direction: column; */
  position: absolute;
  left: 0;
  top: 30px;
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

  @media screen and (max-width: 798px) {
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

  @media screen and (max-width: 798px) {
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    justify-content: flex-start;
    width: 100%;
  }
` 

export const BorderButton = styled.div`
  position: relative;
  border: solid 1px #6b6b6b9f;
  border-radius: 0.2rem;

  @media screen and (max-width: 798px) {
    width: 50%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
    margin-top: 16px;
  }
`
