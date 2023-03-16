import { InputSelect } from "../InputSelect"
import { BsSearch } from "react-icons/bs"
import { ContentInputSearch, Input, BorderInput, BorderInputDate, InputDate, ContentDates, ContentSearchAndFilter, Search } from "./styles"

export function InputSearch() {
  return (
    <ContentInputSearch>
      <ContentSearchAndFilter>
        <BorderInput>
          <label htmlFor="inputSearch">Pesquisar</label>
          <Input name="text" id="inputSearch"/>
        </BorderInput>

        <InputSelect />
      </ContentSearchAndFilter>


      <ContentDates>
        <BorderInputDate className="startDate">
          <label htmlFor="inputStartDate">Data inicio</label>
          <InputDate type="date" id="inputStartDate"/>
        </BorderInputDate>

        <BorderInputDate className="endDate">
          <label htmlFor="inputEndDate">Data Fim</label>
          <InputDate type="date" id="inputEndDate"/>
        </BorderInputDate>
      </ContentDates>

      <Search>
        <BsSearch color="white" />
      </Search>
    </ContentInputSearch>
  )
}