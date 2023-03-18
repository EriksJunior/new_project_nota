import { useState } from "react";
import { useLocation } from "react-router-dom";

export function useGlobal() {
  const [loading, setLoading] = useState(false);
  const location = useLocation()

  const getQueryParams = (query) => {
    return new URLSearchParams(location.search).get(query);
  }

  return { loading, setLoading, getQueryParams }
}