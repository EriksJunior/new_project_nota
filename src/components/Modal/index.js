
import { ContainerGeneral, ContentModalChildren, ModalChildren } from "./styles"

export function Modal({ isOpen = "hide", closeModal, children }) {
  return (
    <ContainerGeneral className={isOpen} onClick={() => closeModal("hide")}>
      <ContentModalChildren>
        <ModalChildren onClick={e => e.stopPropagation()}>
          {children}
        </ModalChildren>
      </ContentModalChildren>
    </ContainerGeneral>
  )
}