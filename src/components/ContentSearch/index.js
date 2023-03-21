import { useState } from "react"
import { InputSelect } from "../InputSelect"
import { BsSearch } from "react-icons/bs"

import { INITIAL_STATE_SEARCH_LEAF } from "./initialStates"
import { ContentInputSearch, Input, BorderInput, BorderInputDate, InputDate, ContentDates, ContentSearchAndFilter, Search } from "./styles"

export function InputSearch({ search }) {
  const [wantedItems, setWantedItems] = useState(INITIAL_STATE_SEARCH_LEAF)

  return (
    <ContentInputSearch>
      <ContentSearchAndFilter>
        <BorderInput>
          <label htmlFor="inputSearch">Pesquisar</label>
          <Input name="text" id="inputSearch" onChange={({ target }) => setWantedItems({ ...wantedItems, text: target.value })} />
        </BorderInput>

        <InputSelect getFilter={setWantedItems}/>
      </ContentSearchAndFilter>


      <ContentDates>
        <BorderInputDate className="startDate">
          <label htmlFor="inputStartDate">Data inicio</label>
          <InputDate type="date" id="inputStartDate" onChange={({ target }) => setWantedItems({ ...wantedItems, startDate: target.value })}/>
        </BorderInputDate>

        <BorderInputDate className="endDate">
          <label htmlFor="inputEndDate">Data Fim</label>
          <InputDate type="date" id="inputEndDate" onChange={({ target }) => setWantedItems({ ...wantedItems, endDate: target.value })}/>
        </BorderInputDate>
      </ContentDates>

      <Search>
        <BsSearch color="white" onClick={() => search(wantedItems.text, setWantedItems.filter, 1, wantedItems.startDate, wantedItems.endDate)} />
      </Search>
    </ContentInputSearch>
  )
}