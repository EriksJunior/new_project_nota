
import { ContainerGeneral, ContentModalChildren, ModalChildren } from "./styles"

export function Modal({ isOpen = "hide", closeModal, children }) {
  return (
    <ContainerGeneral className={`${isOpen} modal modalOpen`} onClick={() => closeModal("hide")}>
      <ContentModalChildren>
        <ModalChildren onClick={e => e.stopPropagation()}>
          {children}
        </ModalChildren>
      </ContentModalChildren>
    </ContainerGeneral>
  )
}