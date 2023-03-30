import styled from "styled-components";

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

export const ContentHeaderItens = styled.tr`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`

export const ContentItensCard = styled.tr`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #009dd1;
  height: 60px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`

export const LabelDetailsItens = styled.label`

`

export const ItensHeader = styled.th`
  width: 16%;
  color: white;
  padding: 0px;
`

export const Itens = styled.td`
  width: 16%;
  color: white;
  padding: 0px;
`

export const ContentActions = styled.td`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 20%;

  @media screen and (max-width: 1160px) {
    width: auto;
  }
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

// export const ContentTable = styled.div`
//   box-shadow: black 0px 1px 3px 1px!important ;

//   th, td {
//     font-size: 14px;
//   }

//   tbody {
//     /* background-color: red; */
//   }

//   td{
//     color: rgb(2, 118, 156)!important;
//     cursor: pointer;
//     transition: all 0.2s;
//   }

//   .underlineCustomer:hover > td{
//     text-decoration: underline;
//     color: deepskyblue!important;
//   }
// `


// export const Container = styled.div`
// `
