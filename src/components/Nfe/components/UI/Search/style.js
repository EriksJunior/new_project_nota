import styled from "styled-components";

export const ContentSearch = styled.div`
  display: flex;
  justify-content: flex-end;
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
  border-bottom: 1px solid white;
  color: white;
  outline: none;
    &:focus{
      border: solid 1px red;
    }

  ` 