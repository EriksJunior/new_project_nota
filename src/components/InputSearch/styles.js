import styled from "styled-components";

export const Input = styled.input`
  border: none;
  width: 200px;
  height: 25px;
  background-color: transparent;
  color: #a6a3a3;
    &:focus{
      outline: none;
    }

  `

export const ContentInputSearch = styled.div`
  border: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  height: 100%;
`

export const BorderInput = styled.div`
  border-bottom: solid 1px #afb4b6;
`

export const BorderButton = styled.div`
  position: relative;
  border: solid 1px #afb4b6;
  border-radius: 5px;
`

export const ButtonFilter = styled.button`
  width: 150px;
  height: 25px;
  background-color: transparent;
  color: #a6a3a3;
  border-radius: 5px;
  border: none;
  display: block;
  
  .notActive {
    display: none;
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
  border-radius: 5px;
  max-height: 150px;
  overflow: auto;
  color: black;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 13px;

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
      border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
      background: deepskyblue;
      border-radius: 5px;
  }
`

export const ContentIcon = styled.span`
  color: white;
  position: absolute;
  right: 0;
  
  /* .animateIcon {
  animation: rotateIcon 0.5s forwards;

  @keyframes rotateIcon {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
} */
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
` 
