import React from 'react'
import f1 from '../../assests/f1.webp';
import f2 from '../../assests/f2.webp';
import f3 from '../../assests/f3.webp';
import f4 from '../../assests/f4.webp';
import f5 from '../../assests/f5.webp';
import f6 from '../../assests/f6.webp';
import f7 from '../../assests/f7.webp';
import style from './DropDownSection.module.css'
const DropDownSection = () => {
  return (
    <div className={style.container}>
        <div title='Gift'>
            <img src={f1} alt="" />
        </div>
        <div title='Buy Surf'>
            <img src={f2} alt="" />
        </div>
        <div title='Mobile Phone'>
            <img src={f3} alt="" />
        </div>
        <div title='Shopping Product'>
            <img src={f4} alt="" />
        </div>
        <div title='Laptop'>
            <img src={f5} alt="" />
        </div>
        <div title='Grossery Products'>
            <img src={f6} alt="" />
        </div>
        <div title='Traveling of Timing '>
            <img src={f7} alt="" />
        </div>
    </div>
  )
}

export default DropDownSection