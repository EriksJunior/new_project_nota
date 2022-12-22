import styled from "styled-components"

export const ContainerNav = styled.div`
  width: 80%;
`

export const ContentNavItems = styled.div`
  position: absolute;
  left: 30px;

  @media screen and (max-width: 794px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 10px;
    gap: 3px;
    left: 0px;
  }
`

export const NavItems = styled.button`
  width: 60px;
  height: 60px;
  padding: 0px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e2529;
  gap: 3px;

  p{
    padding: 0px;
    margin: 0px;
    color: white;
    font-size: 11px;
  }
  
  @media screen and (max-width: 794px) {
    width: 50px;
    height: 50px;
  }
`