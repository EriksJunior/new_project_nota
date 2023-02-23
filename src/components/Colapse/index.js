import { useState } from "react"
import { ContentTypePayments, ContentColapseIcon, ContentChildrenColapse } from "./styles"
import { BsDashLg, BsPlusLg } from "react-icons/bs"

export function Colapse({ children, title }) {
  const [enable, setEnable] = useState(false)

  const open = () => {
    setEnable(!enable)
  }

  return (
    <div>
      <ContentTypePayments onClick={open}>
        <ContentColapseIcon>
          {enable ? <BsDashLg color="white" size={17} /> : <BsPlusLg color="white" size={17} />}
        </ContentColapseIcon>

        <div style={{ width: "100%" }}>
          <label>{title}</label>
        </div>
      </ContentTypePayments>

      <ContentChildrenColapse hidden={!enable}>
        {children}
      </ContentChildrenColapse>
    </div>
  )
}