import styled from "styled-components"

export const Card = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  @media (max-width: 925px) {
    width: 100%;
  }
`

export const ContentItensCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  background-color: #009dd1;
  height: 60px;
  padding: 10px;
  border-radius: 5px;
`

export const LabelDetailsItens = styled.label`
  position: absolute;
  bottom: 40px;
`

export const Itens = styled.div`
  width: 120px;
  color: white;
  padding: 0px;
  position: relative;
` 

export const ContentActions = styled.div`
  display: flex;
  gap: 10px;
`

export const BtnDownloadXml = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none!important;
  text-decoration: none;
  background-color: #02769c;
  color: white;
  border-radius: 20px;
  width: 120px;
  height: 35px;
  box-shadow: 2px 3px 8px 0px #02769c; 
  cursor: pointer;
  font-weight: 600;
`

export const BtnEditLeaf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none!important;
  text-decoration: none;
  background-color: white;
  color: white;
  border-radius: 50% 50%;
  width: 35px;
  height: 35px;
  box-shadow: 2px 3px 8px 0px #02769c; 
  cursor: pointer;
`

export const ContentAreaCustomer = styled.div`
  width: 100%; 
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 925px) {
    flex-direction: column;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0;
  background-color: rgb(2 118 156);
  border-radius: 5px;
  text-align: center;

  p{
    padding: 10px;
  }
`

export const P = styled.p`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  font-size: 19px;
`


export const CardHeaderTextCenter = styled.div`
  width: 100%;
  background-color: #02769c9c;
  color: #ebebeb;
  padding: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;
  font-size: 19px;
  border-radius: 5px;
  box-shadow: black 0px 1px 3px 1px!important;
  
  p{
    margin: 0;
  }
  
  @media (max-width: 1154px) {
    width: 100%;
  }
  `
export const ContentIndividualMetrics = styled.div`
    width: 100%;
    height: 100%;
    max-height: 190px;
  
    overflow-x: auto;
    color: #ebebeb;
    display: flex;
    flex-direction: column;
    gap: 5px;
  
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
  `

export const ItemMetrics = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    gap: 5px;
    border-radius: 5px;
    white-space: normal;
  `

export const PType = styled.p`
    width: 62%;
    padding: 5px;
    background-color: rgb(2, 118, 156);
    border-radius: 5px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  `

export const PData = styled.p`
    width: 35%;
    padding: 5px;
    background-color: rgb(2, 118, 156);
    border-radius: 5px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  `

export const ContentDetailedDataCard = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 12px;

  @media (max-width: 926px) {
    width: 100%;
  }
`