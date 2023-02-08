import { useState } from "react";

export function useGlobal() {
  const [loading, setLoading] = useState(false);



  return { loading, setLoading }
}