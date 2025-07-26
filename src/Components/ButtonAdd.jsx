import React from 'react'

export const ButtonAdd = React.memo(({incrementarPadre}) => {

    console.log('Redibujando...')

  return (
    <>
      <button onClick={() => incrementarPadre(1)}>Add +</button>
    </>
  )
})
