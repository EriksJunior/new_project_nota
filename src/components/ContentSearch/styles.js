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
  height: 100%;
  padding: 10px;
  background-color: transparent;
  color: white;
  outline: none;
  padding: 0;
  ${({ dataIsExist }) => dataIsExist ? `
      outline: none;
      + ${InputLabel} {
        top: -20px;
        color: deepskyblue;
      };
      height: 100%;
  ` :
    `
    &:focus{
      outline: none;
      + ${InputLabel} {
        color: deepskyblue;
        top: -20px;
      };
      height: 100%;
    }
  `
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

export const BorderInput = styled.div`
  position: relative;
  transition: all 0.3s;
  background-color: #02769c;
  color: white;
  border-radius: 5px;
  height: 35px;
  box-shadow: 1px 2px 8px -3px #02769c; 


  &:focus-within {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.10rem deepskyblue;
  }

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

export const BorderInputDate = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 2px;
  align-items: flex-end;
  background-color: #02769c;
  border-radius: 5px;
  height: 35px;
  transition: all 0.3s;

  &:focus-within {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.10rem deepskyblue;
  }

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
  transition: all 0.3s;

  &:focus{
      outline: none;
      + ${InputLabel} {
        top: -20px;
        color: #86b7fe;
      };
      height: 100%;
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

