import styled from "styled-components"

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5%;
  padding: 10px;

  @media (max-width: 1154px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  
`

// export const ContentAreaCustomer = styled.div`
//   width: 100%;
//   display: flex;
//   gap: 15px;
//   margin-bottom: 20px;
//   margin-top: 20px;
// `

export const HeaderCustomer = styled.div`
  width: 40%;
  min-width: 430px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: #0d566f;

  @media (max-width: 1154px) {
    width: 100%;
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
    /* letter-spacing: 3px */
`


export const CardHeaderTextCenter = styled.div`
  width: 55%;
  min-width: 430px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: #0d566f;
  color: #ebebeb;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  border-radius: 5px;

  p{
    margin: 0;
  }
  
  @media (max-width: 1154px) {
    width: 100%;
  }
  `
export const ContentIndividualMetrics = styled.div`
    width: 100%;
    height: 200px;
  
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