import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #02769c;
`

export const Birthdays = styled.div`
  width: 90%;
  height: 100%;
`

export const FavoritesCustomers = styled.div`
  width: 90%;
  height: 100%;
`

export const ContentBirthdays = styled.div`
  width: 100%;
  height: 50%;
  max-height: 210.5px;

  overflow-x: auto;
  color: #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 19px;
  border-radius: 5px;

  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
      border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
      background: deepskyblue;
      border-radius: 5px;
  }
  
  p{
    margin: 0;
  }
`

export const ContentFavoritesCustomer = styled.div`
  width: 100%;
  max-height: 210.5px;
  overflow-x: auto;
  color: #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 19px;
  border-radius: 5px;

  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
      border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
      background: deepskyblue;
      border-radius: 5px;
  }
  
  p{
    margin: 0;
  }
`

export const DivTest = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  gap: 5px;
  border-radius: 5px;
  white-space: normal;
`

export const Pname = styled.p`
  width: 87%;
  padding: 5px;
  background-color: rgb(2, 118, 156);
  border-radius: 5px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`

export const Position = styled.p`
  width: 10%;
  padding: 5px;
  background-color: rgb(2, 118, 156);
  border-radius: 5px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`

