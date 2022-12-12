import { useCallback } from "react";


export function Masks() {
  const maskCep = useCallback((e: React.KeyboardEvent<EventTarget & HTMLInputElement>) => {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{5})(\d)/, "$1-$2")
    e.currentTarget.value = value
  }, [])

  const maskCpfCnpj = useCallback((e: React.KeyboardEvent<EventTarget & HTMLInputElement>) => {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    if (value.length <= 11) {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
      e.currentTarget.value = value;
    } else if (value.length >= 14) {
      let value = e.currentTarget.value;
      value = value.replace(/\D/g, "");
      value = value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        "$1.$2.$3/$4-$5"
      );
      e.currentTarget.value = value;
    }
  }, [])

  const maskCurrency = useCallback((e: React.KeyboardEvent<EventTarget & HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{1})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.currentTarget.value = value
  }, [])

  return { maskCep, maskCpfCnpj, maskCurrency }
}
