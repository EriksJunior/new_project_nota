import { InputSelect } from "../InputSelect"
import { ContentInputSearch, Input, BorderInput, BorderInputDate, InputDate, ContentDates, ContentSearchAndFilter } from "./styles"

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


    </ContentInputSearch>
  )
}