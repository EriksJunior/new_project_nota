import { useState } from "react"
export function UseTypePayment() {
  const [openLayouts, setOpenLayouts] = useState(false)

  const handleOpenLayouts = () => {
    setOpenLayouts(state => !state)
  }


  return { openLayouts, handleOpenLayouts }
} 