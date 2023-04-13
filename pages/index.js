import { Inter } from 'next/font/google'
import React from 'react'
import Select from 'react-select'
import style from "../styles/home.module.scss"
import { useState, useEffect, useId } from 'react';
import { debounce } from 'lodash';

const inter = Inter({ subsets: ['latin'] })
const options = [
  { value: 'chocolate', label: 'Chocolate' },
]


function HandleInput(event){
  console.log(event);
}


export default function Home() {
  return (
    <>
      <main>
        <div className={style.contain}>
        <h1>Et si vous découvriez un nouveau jeu?</h1>
        <Select instanceId={useId()} options={options} onInputChange={HandleInput} ></Select>
        </div>
      </main>
    </>
  )
}
