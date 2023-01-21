import React from 'react'
import { HeroeList } from '../Components/HeroeList'
import '../../assets/styles/main-pages.css'

export const MarvelPage = () => {
  return (
    <>
        <div className='box-title'>
          <h1>Marvel Heroes</h1>
        </div>
        <HeroeList publisher={'Marvel Comics'}/>
    </>
  )
}
