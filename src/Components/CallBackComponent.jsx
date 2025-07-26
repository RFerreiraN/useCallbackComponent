import { ButtonAdd } from "./ButtonAdd";
import { useCallback, useState } from "react";

export const CallBackComponent = () => {

  const [contador, setContador] = useState(0);

  const incrementar = useCallback((val) => {
    setContador(counter => counter + val) // lo debemos hacer así para asegurar que traemos el valor del setContador y sumarle un valor más
  }, [])

  return (
    <>
      <h1>Hook use Callback </h1>
      <hr />
      <h2>Contador : {contador}</h2>
      <ButtonAdd incrementarPadre={incrementar}/>
    </>
  )
}

