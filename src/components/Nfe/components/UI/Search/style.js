import styled from "styled-components";

export const ContentSearch = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  margin-top: 30px;

  .inputSearch{
    height: 50px;
  }

@media screen and (max-width: 575px) {
   .inputSearch {
    width: 100%;
   }
}
`

export const InputSearch = styled.input`
  border: none;
  width: 100px;
  height: 25px;
  background-color: transparent;
  color: white;
    &:focus{
      outline: none;
    }

  ` 

export const ContentInputSearch = styled.div`
  border: none;
  border-bottom: solid 1px #afb4b6;
  height: 100%;
` 