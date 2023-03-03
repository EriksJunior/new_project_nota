import { useContext } from 'react';
import { TypePaymentContext } from '../context';

import { CreateTypePayment } from "./CreateTypePayment"
import { AreaTypePayment } from "./AreaTypePayment"

import { AnimateCard } from "../../styles"

export function TypePayment() {
  const { openLayouts } = useContext(TypePaymentContext)
  return (
    <div style={{ width: "100%", backgroundColor: "black", padding: "15px", marginTop: "50px", borderRadius: "5px" }}>
      {openLayouts ?
        <AnimateCard>
          <CreateTypePayment />
        </AnimateCard>
        :
        <AnimateCard>
          <AreaTypePayment />
        </AnimateCard>
      }

    </div>
  )
}