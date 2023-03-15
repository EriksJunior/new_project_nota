import { ContentInputSearch, Input, BorderInput, BorderButton, ButtonFilter, DropDownSelect } from "./styles"
import { BsArrowDownShort } from "react-icons/bs"
export function InputSearch() {
  return (
    <ContentInputSearch>
      <BorderInput>
        <Input name="text" placeholder="Pesquisar" />
      </BorderInput>

        <BorderButton>
          <ButtonFilter placeholder="Filtro">
            Filtro
            <span style={{ color: 'white', position: "absolute", right: "0" }}>
              <BsArrowDownShort size={25} color={"#a6a3a3"} />
            </span>

            <DropDownSelect>
              <span>terste</span>
              <span>terste</span>
              <span>terste</span>
              <span>terste</span>
            </DropDownSelect>
          </ButtonFilter>
        </BorderButton>
    </ContentInputSearch>
  )
}