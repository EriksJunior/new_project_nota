import { InputSelect } from "../InputSelect"
import { ContentInputSearch, Input, BorderInput} from "./styles"

export function InputSearch() {
  return (
    <ContentInputSearch>
      <BorderInput>
        <Input name="text" placeholder="Pesquisar" />
      </BorderInput>

    <InputSelect />
    </ContentInputSearch>
  )
}