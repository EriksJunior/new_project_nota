import { ContainerGeneral, ContentModalChildren } from "./styles"

export function Modal({ isOpen = "hide", children }) {
  return (
    <ContainerGeneral className={isOpen}>
      <ContentModalChildren>
        {children}
      </ContentModalChildren>
    </ContainerGeneral>
  )
}