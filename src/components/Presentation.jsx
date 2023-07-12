import React from 'react'
import '../stylesheets/presentacion.css'
import { Icons } from './Icons'
export function Presentation ({ name, secondName, subtitle }) {
  return (
    <main className='label'>
      <div className='presentacion_recuadro'>
        <div className='presentacion_recuadro_texto'>
          <h1>{ name }</h1>
          <h1>{ secondName }</h1>
        </div>
        <h2>{ subtitle }</h2>
        <Icons />
      </div>
    </main>
  )
}
