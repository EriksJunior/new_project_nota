import styled from "styled-components";

export const Dropdown = styled.div`
  position: absolute;
  z-index: 999;
  width: 170px;
  background-color: black;
  color: white;
  font-size: 13px;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    list-style-type: none;
    width: 100%;
    padding: 5px;

  }

  li:hover {
    background-color: #02769c9c;
    border-radius: 5px;
    cursor: pointer;
  }
`

export const ContentRemoveIrem = styled.label`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  
  .checkRemoveIcon { 
    display: none;
  }

  .remove:checked ~ .checkRemoveIcon{
    display: block;
    cursor: pointer;
    background-color: red;
    border-radius: 5px;
  }

`