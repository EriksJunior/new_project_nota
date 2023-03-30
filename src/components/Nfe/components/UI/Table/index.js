import { useContext } from "react"
import { LeafContext } from "../../../context"

import { BsFillPencilFill, BsXLg } from "react-icons/bs"

import { ContentDetailedDataCard, ContentItensCard, ContentHeaderItens, BtnDownloadXml, BtnEditLeaf, BtnRemoveLeaf, Itens, ItensHeader, ContentActions } from "./styles"
import { AnimateCard } from "../../../../styles"

export function Table({ children }) {
  const { dataSearchLeaf, handleOpenAreaLeaf } = useContext(LeafContext)
  return (
    <div>
      <ContentDetailedDataCard>
        {dataSearchLeaf.length &&
          <table>
            <thead>
              <ContentHeaderItens>
                <ItensHeader>Nome Cliente</ItensHeader>
                <ItensHeader>Status</ItensHeader>
                <ItensHeader>Modelo</ItensHeader>
                <ItensHeader>Nº Doc</ItensHeader>
                <ItensHeader>Data</ItensHeader>
                <ItensHeader>Ações</ItensHeader>
              </ContentHeaderItens>
            </thead>

            <tbody>
              {dataSearchLeaf.map((item) =>
                <ContentItensCard key={item.id}>
                  <Itens>
                    {item.nomeCliente}
                  </Itens>

                  <Itens>
                    {item.status}
                  </Itens>

                  <Itens>
                    {item.modelo === "1" ? "NF-e" : "NFC-e"}
                  </Itens>

                  <Itens>
                    {item.response.nfe || "-- --"}
                  </Itens>

                  <Itens>
                    {item.data.split(" ")[0].split("-").reverse().join("/")}
                  </Itens>

                  <ContentActions>
                      <BtnDownloadXml>Download XML</BtnDownloadXml>
                      <BtnEditLeaf onClick={handleOpenAreaLeaf}><BsFillPencilFill color="black" /></BtnEditLeaf>
                      <BtnRemoveLeaf><BsXLg color="black" /></BtnRemoveLeaf>
                  </ContentActions>
                </ContentItensCard>
              )}
            </tbody>
          </table>
        }


      </ContentDetailedDataCard>
      {/* <ContentTable className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="text-center">Cliente</th>
              <th className="text-center">CPF / CNPJ</th>
              <th className="text-center">Data</th>
              <th className="text-center">Modelo</th>
              <th className="text-center">Nº</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {dataSearchLeaf.map((leaf) =>
              <tr key={leaf.id} className="underlineCustomer" onClick={() => handleOpenAreaLeaf(leaf.id)}>
                <td className="text-center ">{leaf.nomeCliente}</td>
                <td className="text-center ">{leaf.cpfCnpj}</td>
                <td className="text-center ">{`${leaf.data.split(" ")[0].split("-").reverse().join("/")} ${leaf.data.split(" ")[1]}`}</td>
                <td className="text-center ">{leaf.response.modelo}</td>
                <td className="text-center ">{leaf.response.nfe}</td>
                <td className="text-center ">{leaf.status}</td>
              </tr>
            )}
          </tbody>
        </table>
      </ContentTable> */}

      <AnimateCard>
        {children}
      </AnimateCard>
    </div >
  )
}