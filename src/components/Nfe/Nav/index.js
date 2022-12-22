import { ContentNavItems, NavItems } from "./styles"
import { ContentNav } from "../styles"

export function Nav({ children }) {
  return (
    <div>
      <ContentNavItems>
        <NavItems></NavItems>
        <NavItems></NavItems>
        <NavItems></NavItems>
        <NavItems></NavItems>
      </ContentNavItems>

      <ContentNav>
        {children}
      </ContentNav>
    </div>
  )
}