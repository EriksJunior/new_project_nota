import { ContentInputSearch, Input, BorderInput, BorderButton, ButtonFilter, DropDownSelect, ContentIcon, AnimateDropDown } from "./styles"
import { BsArrowDownShort } from "react-icons/bs"
export function InputSearch({active = "notActivate", data}) {
  return (
    <ContentInputSearch>
      <BorderInput>
        <Input name="text" placeholder="Pesquisar" />
      </BorderInput>

      <BorderButton>
        <ButtonFilter placeholder="Filtro" className="isOpen">
          Filtro
          <ContentIcon>
            <BsArrowDownShort size={25} color={"#a6a3a3"} className="animateIcon"/>
          </ContentIcon>


          <AnimateDropDown>
            <DropDownSelect className={`${active} animateDrop`}>
              <span>terste</span>
              <span>terste</span>
              <span>terste</span>
              <span>terste</span>
            </DropDownSelect>
          </AnimateDropDown>

        </ButtonFilter>
      </BorderButton>
    </ContentInputSearch>
  )
}