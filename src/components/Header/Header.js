import React, { useState } from 'react'
import style from './Header.module.css'
import imgslide from '../../img/slideBar.svg'
import imgPhove from '../../img/phone.svg'
function Header() {
    const [scrollDirection, setScrollDirection] = useState(1);
    const handleScroll = () => {
        setScrollDirection((prevDirection) => prevDirection * -1);
    };
    return (
        <div>
            <div className={style.header}>
                <div className={style.header_info}>
                    <img src={imgslide}></img>
                    <p>+7(918) 101-10-91</p>
                </div>
                <div className={style.header_info}>
                    <p>ЗАКАЗАТЬ ЗВОНОК</p>
                    <div className="scrolling-image" onClick={handleScroll}>
                        <img src={imgPhove} className={scrollDirection === 1 ? 'scroll-right' : 'scroll-left'} alt="scrolling image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header