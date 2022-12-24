import styled from "styled-components"

export const ContainerNav = styled.div`
  width: 100%; 
`

export const ContentNavItems = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;


  @media screen and (max-width: 794px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
    gap: 3px;
  }
`

export const NavItems = styled.button`
  width: 60px;
  height: 60px;
  padding: 0px;
  margin-bottom: 3px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e2529;
  gap: 3px;
  border-radius: 5px;

  p{
    padding: 0px;
    margin: 0px;
    color: white;
    font-size: 11px;
  }
  
  @media screen and (max-width: 794px) {
    width: 80px;
    height: 60px;
    border-radius: 5px;
  }
`

export const Div = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 794px) {
    display: flex;
    flex-direction: column;
  }
`