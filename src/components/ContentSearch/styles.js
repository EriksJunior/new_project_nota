import styled from "styled-components";

export const InputLabel = styled.label`
  position: absolute;
  color: white;
  transition: all 0.3s;
  width: 100%;
  top: -3px;
  left: 2px;
  font-size: 12px;
  cursor: text;
`

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 20px;
  background-color: transparent;
  color: white;
    &:focus{
      outline: none;
      + ${InputLabel} {
        top: -20px;
      }
    }
  `

export const ContentInputSearch = styled.div`
  width: 100%;
  height: 80px;
  border: none;
  display: flex;
  align-content: center;
  border-radius: 5px;
  /* background-color: #02769c; */
  gap: 15px;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;

  @media screen and (min-width: 1500px) {
    justify-content: flex-end;
    gap: 30px;
  }

  @media screen and (max-width: 1131px) {
    height: auto!important;
    padding: 30px
  }
`

export const ContentSearchAndFilter = styled.div`
  display: flex;
  gap: 15px;


  @media screen and (max-width: 1086px) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 861px) {
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1500px) {
    gap: 30px;
  }
`

export const BorderInput = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 2px;
  align-items: flex-end;
  border: solid 1px white;
  border-radius: 5px;
  height: 35px;

  @media screen and (max-width: 1086px) {
    width: 50%;
  }

  @media screen and (max-width: 861px) {
    width: 50%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
  }
`

export const BorderInputDate = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 2px;
  align-items: flex-end;
  border: solid 1px white;
  border-radius: 5px;
  height: 35px;

  label {
    position: absolute;
    color: white;
    width: 100%;
    top: -3px;
    left: 2px;
    font-size: 12px;
    cursor: text;
  }
`

export const InputDate = styled.input`
  width: 150px;
  height: 25px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 0.2rem;
  display: block;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;

  &:focus{
      outline: none;
      + ${InputLabel} {
        top: -20px;
      }
    }

  @media screen and (max-width: 1086px) {
    width: 100%;
  }

  @media screen and (max-width: 861px) {
    width: 100%;
  }

  @media screen and (max-width: 492px) {
    width: 100%;
  }
`

export const ContentDates = styled.div`
   display: flex;
   gap: 15px;

  @media screen and (max-width: 861px) {
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

  @media screen and (max-width: 1086px) {
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

  @media screen and (min-width: 1500px) {
    gap: 30px;
  }
`

export const Search = styled.span`
  background-color: transparent;
  border: solid 1px white;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% 50%;
  cursor: pointer;

  &:focus {
    background-color: red;
  }
`

