
import { Dropdown, ContentRemoveIrem } from "./styles"
import { BsCheck2 } from "react-icons/bs"

export function DropdownActions({ remove, index, cancel, dataList = ["Impostos", "Duplicar produto"], newWidth = "170px" }) {
  return (
    <Dropdown width={newWidth}>
      <ul>
        {dataList.map((item, indice) =>
          <div key={indice}>
            <li>{item}</li>
          </div>
        )}

        {remove &&
          <li>
            <ContentRemoveIrem htmlFor={`remove-${index}`}>
              Exluir
              <input hidden className="remove" type="checkbox" name={`remove-${index}`} id={`remove-${index}`} />

              <div className="checkRemoveIcon" onClick={remove}>
                <BsCheck2 size={16} color={"#ffffff"} />
              </div>
            </ContentRemoveIrem>
          </li>
        }

        {cancel &&
          <li onClick={cancel}>
            Cancelar
          </li>
        }

      </ul>
    </Dropdown>
  )
}