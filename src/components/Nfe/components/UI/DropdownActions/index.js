import { Dropdown } from "./styles"

export function DropdownActions({ remove }) {
  return (
    <Dropdown>
      <ul>
        <li>Impostos</li>
        <li>Duplicas produto</li>
        <li onClick={remove}>Exluir</li>
      </ul>
    </Dropdown>
  )
}