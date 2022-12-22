import styled from "styled-components"

export const ContainerNav = styled.div`
  width: 80%;
`

export const ContentNavItems = styled.div`
  position: absolute;
  left: 20px;

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

export const NavItems = styled.div`
  width: 70px;
  height: 70px;
  background-color: #1e2529;
  margin-bottom: 3px;
  cursor: pointer;
  
  @media screen and (max-width: 794px) {
  width: 50px;
  height: 50px;
  }
`