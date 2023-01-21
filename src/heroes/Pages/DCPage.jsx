import React from 'react'
import { HeroeList } from '../Components/HeroeList'
import '../../assets/styles/main-pages.css'

export const DCPage = () => {
  return (
    <>
        <div className='box-title'>
          <h1>DC Heroes</h1>
        </div>
        <HeroeList publisher='DC Comics'/>
    </>
  )
}
