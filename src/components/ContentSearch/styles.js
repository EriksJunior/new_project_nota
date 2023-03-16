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
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  height: 100%;
`

export const ContentSearchAndFilter = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 798px) {
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
    flex-wrap: wrap;
  }
`

export const BorderInput = styled.div`
  border-bottom: solid 1px #afb4b6;

  @media screen and (max-width: 798px) {
    width: 50%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
  }
`

export const BorderInputDate = styled.div`
  position: relative;
  border: solid 1px #afb4b6;
  border-radius: 5px;

  span {
    position: absolute;
    color: #afb4b6;
    top: -25px;
  }
`

export const InputDate = styled.input`
  width: 150px;
  height: 25px;
  background-color: transparent;
  color: #a6a3a3;
  border: none;
  border-radius: 5px;
  display: block;
  padding: 5px;

  :focus{
    outline: none;
  }

  @media screen and (max-width: 798px) {
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
  }
`

export const ContentDates = styled.div`
   display: flex;
   gap: 15px;

  @media screen and (max-width: 798px) {
    width: 100%;
      
    .endDate {
      width: 50%;
      margin-top: 20px;
    }

    .startDate {
      width: 50%;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 492px) {
    flex-wrap: wrap;

    .endDate {
      width: 100%;
      margin-top: 20px;
    }

    .startDate {
      width: 100%;
      margin-top: 20px;
    }
  }
`

export const Search  = styled.span`
  background-color: transparent;
  border: solid 1px #afb4b6;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    background-color: red;
  }
`

