import { ContainerGeneral, ContentModalChildren } from "./styles"

export function Modal({ isOpen = "hide", children }) {
  return (
    <ContainerGeneral className={isOpen}  onClick={() => console.log('clicou')}>
      <ContentModalChildren>
        {children}
      </ContentModalChildren>
    </ContainerGeneral>
  )
}