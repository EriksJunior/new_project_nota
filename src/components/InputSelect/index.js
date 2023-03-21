
import { useState, useRef, useEffect } from "react"
import { BorderButton, ButtonFilter, InputLabel, DropDownSelect, ContentTileAndIcon, ContentIcon, AnimateDropDown } from "./styles"
import { BsArrowDownShort } from "react-icons/bs"

export function InputSelect({ title = "Filtro", data = ["Cliente", "CPF/CNPJ", "NF-e", "NFC-e"], getFilter }) {
  const [openDropDown, setOpenDropDown] = useState(false)
  const [clickedType, setClickedType] = useState("")
  const isClicked = useRef(null)

  useEffect(() => {
    function handleSideClick(event) {
      if (isClicked.current && !isClicked.current.contains(event.target)) {
        setOpenDropDown(false)
      }
    }

    document.addEventListener('click', handleSideClick);
  }, [isClicked])


  return (
    <BorderButton>
      <ButtonFilter placeholder="Filtro" ref={isClicked} className="isOpen" onClick={() => setOpenDropDown(!openDropDown)}>
        <ContentTileAndIcon>
          <InputLabel focused={openDropDown}>{title}</InputLabel>
          <span>{clickedType || "Selecione"}</span>
          <ContentIcon>
            <BsArrowDownShort size={25} color={"white"} className="animateIcon" />
          </ContentIcon>
        </ContentTileAndIcon>


        <AnimateDropDown>
          {openDropDown &&
            <DropDownSelect className={"animateDrop"}>
              {data.map((item, index) =>
                <div key={index} style={{ width: "100%" }} className="items" onClick={() => {
                  setClickedType(item)
                  getFilter(state => ({...state, filter: item}))
                }}>
                  <span>{item}</span>
                </div>
              )}
            </DropDownSelect>
          }
        </AnimateDropDown>

      </ButtonFilter>
    </BorderButton>
  )
}