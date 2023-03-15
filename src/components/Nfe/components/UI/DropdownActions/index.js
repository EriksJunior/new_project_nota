import { Dropdown, ContentRemoveIrem } from "./styles"
import { BsCheck2 } from "react-icons/bs"

export function DropdownActions({ remove, index }) {
  return (
    <Dropdown>
      <ul>
        <li>Impostos</li>
        <li>Duplicar produto</li>
        <li>
          <ContentRemoveIrem htmlFor={`remove-${index}`}>
            Exluir
            <input hidden className="remove" type="checkbox" name={`remove-${index}`} id={`remove-${index}`} />

            <div className="checkRemoveIcon" onClick={remove}>
              <BsCheck2 size={16} color={"#ffffff"} />
            </div>
          </ContentRemoveIrem>
        </li>
      </ul>
    </Dropdown>
  )
}