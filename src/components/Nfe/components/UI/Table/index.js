import { useContext } from "react"
import { LeafContext } from "../../../context"

import { BsFillPencilFill, BsXLg } from "react-icons/bs"

import { ContentDetailedDataCard, ContentItensCard, ContentHeaderItens, BtnDownloadXml, BtnEditLeaf, LabelDetailsItens, Itens, ItensHeader, ContentActions } from "./styles"
// import { ContentTable } from "./style"
import { AnimateCard } from "../../../../styles"

export function Table({ children }) {
  const { dataSearchLeaf, handleOpenAreaLeaf } = useContext(LeafContext)
  return (
    <div>
      <ContentDetailedDataCard>
        <table>
          <thead>
            <ContentHeaderItens>
              <ItensHeader colSpan={1}>Nome Cliente</ItensHeader>
              <ItensHeader colSpan={1}>Status</ItensHeader>
              <ItensHeader colSpan={1}>Modelo</ItensHeader>
              <ItensHeader colSpan={1}>Nº Doc</ItensHeader>
              <ItensHeader colSpan={3}>Data</ItensHeader>
              <ItensHeader ></ItensHeader>
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
                  <div>
                    <BtnDownloadXml>Download XML</BtnDownloadXml>
                  </div>
                  <div>
                    <BtnEditLeaf><BsFillPencilFill color="black" /></BtnEditLeaf>
                  </div>
                  <div>
                    <BtnEditLeaf><BsXLg color="black" /></BtnEditLeaf>
                  </div>
                </ContentActions>
              </ContentItensCard>
            )}
          </tbody>

        </table>


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
    </div>
  )
}