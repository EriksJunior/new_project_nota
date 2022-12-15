import styled from "styled-components";

export const ContentSearch = styled.div`
  display: flex!important;
  gap: 15px;
  margin-bottom: 10px;
  margin-top: 30px;

  .icon{
    position: relative;
    left: -45px;
    background-color: #0070fc;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
  
@media screen and (max-width: 575px) {
   .inputSearch{
    width: 100%;
   }
  }
`