import { NavBar } from "../../components/NavBar"

export function PageNavegation({ visible }) {
  return (
    <>
    { !visible ? (
    <NavBar />
    ): <></>
  }
    </>
 ) 
}