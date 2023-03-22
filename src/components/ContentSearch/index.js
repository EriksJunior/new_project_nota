import { useState } from "react"
import { InputSelect } from "../InputSelect"
import { BsSearch } from "react-icons/bs"

import { INITIAL_STATE_SEARCH_LEAF } from "./initialStates"
import { ContentInputSearch, Input, InputLabel, BorderInput, BorderInputDate, InputDate, ContentDates, ContentSearchAndFilter, Search } from "./styles"

export function InputSearch({ search, dataFilter = [] }) {
  const [wantedItems, setWantedItems] = useState(INITIAL_STATE_SEARCH_LEAF)
  const [filter, setFilter] = useState("") 

  return (
    <ContentInputSearch>
      <ContentSearchAndFilter>
        <BorderInput >
          <Input name="text" className="inputTextSearch" id="inputSearch" onChange={({ target }) => setWantedItems({ ...wantedItems, text: target.value })} />
          <InputLabel htmlFor="inputSearch">Pesquisar</InputLabel>
        </BorderInput>

        <InputSelect getFilter={setFilter} data={dataFilter}/>
      </ContentSearchAndFilter>


      <ContentDates>
        <BorderInputDate className="startDate">
          <InputDate type="date" id="inputStartDate" onChange={({ target }) => setWantedItems({ ...wantedItems, startDate: target.value })}/>
          <InputLabel htmlFor="inputStartDate">Data inicio</InputLabel>
        </BorderInputDate>

        <BorderInputDate className="endDate">
          <InputDate type="date" id="inputEndDate" onChange={({ target }) => setWantedItems({ ...wantedItems, endDate: target.value })}/>
          <InputLabel htmlFor="inputEndDate">Data Fim</InputLabel>
        </BorderInputDate>
      </ContentDates>

      <Search>
        <BsSearch color="white" onClick={() => search(wantedItems.text, filter, 1, wantedItems.startDate, wantedItems.endDate)} />
      </Search>
    </ContentInputSearch>
  )
}