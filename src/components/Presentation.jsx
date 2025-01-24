import React from 'react'
import '../stylesheets/presentacion.css'
import { Icons } from './Icons'
export function Presentation ({ name, secondName, subtitle }) {
  return (
    <main className='label'>
      <div className='presentacion presentacion_recuadro recuadro_fondo'>
        <div className='recuadro_texto'>
          <h1>{ name }</h1>
          <h1>{ secondName }</h1>
        </div>
        <h2>{ subtitle }</h2>
        <Icons />
      </div>
    </main>
  )
}
