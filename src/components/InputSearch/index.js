import { ContentInputSearch, Input, BorderInput, BorderButton, ButtonFilter, DropDownSelect, ContentTileAndIcon, ContentIcon, AnimateDropDown } from "./styles"
import { BsArrowDownShort } from "react-icons/bs"
export function InputSearch({ active = "", title = "Filtro", data = ["Cliente", "CPF/CNPJ", "NF-e", "NFC-e"] }) {
  return (
    <ContentInputSearch>
      <BorderInput>
        <Input name="text" placeholder="Pesquisar" />
      </BorderInput>

      <BorderButton>
        <ButtonFilter placeholder="Filtro" className="isOpen">
          <ContentTileAndIcon>
            {title}
            <ContentIcon>
              <BsArrowDownShort size={25} color={"#a6a3a3"} className="animateIcon" />
            </ContentIcon>
          </ContentTileAndIcon>


          <AnimateDropDown>
            <DropDownSelect className={`${active} animateDrop`}>
              {data.map((item, index) =>
                <div key={index} style={{width: "100%"}} className="items">
                  <span>{item}</span>
                </div>
              )}
            </DropDownSelect>
          </AnimateDropDown>

        </ButtonFilter>
      </BorderButton>
    </ContentInputSearch>
  )
}