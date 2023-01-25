import React from 'react'
import { getHeroParameter } from '../Helpers/getHeroesByPublisher'
import { HeroItem } from './HeroItem'
import '../../assets/styles/heroList.css'
  import { useMemo } from 'react'
import { useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

export const ListSearch = () => {

    const [data, setdata] = useState([]);
    const ubicacion=useLocation();
    const {q=''}=queryString.parse(ubicacion.search);

  useMemo(()=>{
     setdata(getHeroParameter(q));
  },[q]);

  const MostrarMensaje=()=>{
    return data?.length===0 && q?.length>0;
  }

  return (
    <>
    <section className='box-grid'>
        <div className='grid'>
          {
            MostrarMensaje()? <h2 className='titulo-null'>No hay heroes con {q}</h2>:
            data.map(heroe=>{
              return <HeroItem key={heroe.id} id={heroe.id} superhero={heroe.superhero} alter_ego={heroe.alter_ego} firts_ap={heroe.first_appearance}
              characters={heroe.characters} LinkBar={true}/>
          })
          }
        </div>
    </section>
    </>
  )
}