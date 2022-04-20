import React, { useEffect, useState } from 'react'
import { getEquipoLocal, getEquipoVisitante } from '../services/Equipos';

export default function Marcador() {

    const logoNBA = 'https://i.ibb.co/k5yXNgy/nba.jpg';
    const [equipoLocal, setEquipoLocal] = useState({});
    const [equipoVisitante, setEquipoVisitante] = useState({});
    const [puntos, setPuntos] = useState({
        locales: 0,
        visitantes: 0
    })


    useEffect(() => {
        setEquipoLocal(getEquipoLocal());
        setEquipoVisitante(getEquipoVisitante());
    }, []) // Se invoque cuando se monte el componente

    return (
        <>
            <div className="marcador">
                <div className="logo">
                    <img src={equipoLocal.logo} alt="Logo equipo local" />
                </div>
                <div className="puntos">
                    <span>{puntos.locales}</span>
                    <img src={logoNBA} alt="Logo NBA" />
                    <span>{puntos.visitantes}</span>
                </div>
                <div className="logo">
                    <img src={equipoVisitante.logo} alt="Logo equipo visitante" />
                </div>
            </div>
        </>
    )
}
