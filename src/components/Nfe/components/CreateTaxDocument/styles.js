import styled from "styled-components";

export const ContentTaxDocument = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`
export const ContentActions = styled.div`
  width: 100%;
  height: 100%;
  background-color: #202529;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 3px 4px 0px black;

    @media screen and (max-width: 869px) {
    width: 100%;
  }
`

export const ContentActionsItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

export const ActionsItems = styled.label`
  display: flex;
  gap: 5px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #02769c;
  height: 25px;
  padding: 0 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0px #02769c ;
  font-size: 14px;
  transition: ease-in 0.1s all;
  position: relative;

  &:hover{
     background-color: #009dd1;
     transition: ease-in 0.1s all;
  }
`

export const ContentDropdownActions = styled.div`
  position: absolute;
  top: -60px;
  right: -10px;
  bottom: 0px;
  z-index: 999;

  ${({enableDropDown}) => enableDropDown ? `display: block;` : `display: none;`}
`

export const ContentItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputActions = styled.input`
  display: none;
`

export const TitleItems = styled.div`
  height: 100%;
`