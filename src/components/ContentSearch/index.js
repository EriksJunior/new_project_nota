import { InputSelect } from "../InputSelect"
import { BsSearch } from "react-icons/bs"
import { ContentInputSearch, Input, BorderInput, BorderInputDate, InputDate, ContentDates, ContentSearchAndFilter, Search } from "./styles"

export function InputSearch() {
  return (
    <ContentInputSearch>
      <ContentSearchAndFilter>
        <BorderInput>
          <Input name="text" placeholder="Pesquisar" />
        </BorderInput>

        <InputSelect />
      </ContentSearchAndFilter>


      <ContentDates>
        <BorderInputDate className="startDate">
          <span>Data inicio</span>
          <InputDate type="date" />
        </BorderInputDate>

        <BorderInputDate className="endDate">
          <span>Data Fim</span>
          <InputDate type="date" />
        </BorderInputDate>
      </ContentDates>

      <Search>
        <BsSearch color="white" />
      </Search>
    </ContentInputSearch>
  )
}