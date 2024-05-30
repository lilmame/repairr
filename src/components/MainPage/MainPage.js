import React from 'react'
import style from './MainPage.module.css'
import Header from '../Header/Header'
function MainPage() {
  return (
    <div className={style.mainCard} >
        <div className={style.header}>
        <Header/>
        </div>
        
        
    </div>
  )
}

export default MainPage