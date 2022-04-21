import React from 'react'

export default function Equipo(props) {
    
  return (
    <table className={props.equipo.nombre}>
        <tbody>
            {props?.equipo?.jugadores?.map(jugador => {
                return (
                    <tr key={jugador.id}>
                        <td>{jugador.nombre}</td>
                        <td>
                            <button onClick={() => props.handleCanasta({
                                juego: props.equipo.juego,
                                puntos: 1,
                                jugadorId: jugador.id
                            })}>
                                Libre
                            </button>
                            <button onClick={() => props.handleCanasta({
                                juego: props.equipo.juego,
                                puntos: 2,
                                jugadorId: jugador.id
                            })}>
                                Doble
                            </button>
                            <button onClick={() => props.handleCanasta({
                                juego: props.equipo.juego,
                                puntos: 3,
                                jugadorId: jugador.id
                            })}>
                                Triple
                            </button>

                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
