import React, { useState } from "react"
import Image from 'next/image'
import Link from "next/link";
import classNames from 'classnames';
import SearchByName from "./SearchByName";

export default function Nav({ onChange, value, onClick }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const showMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full">
      {/* mobile */}
      <div className="bg-pinkLiverpool block md:hidden h-12">
        <div className="flex flex-row justify-between items-center mx-4">
          <div className="mt-3">
            <button  onClick={showMenu}>
              <Image src='/icon/menu.png' alt='menu' height='15px' width='15px'/>
            </button>
          </div>
          {/* <div className={classNames(
            "w-full block",
            isMenuOpen ? "block" : "hidden"
          )}> */}
            {/* botones en Mobile */}
            {/* <div className={classNames(
              "text-sm",
              "bg-white",
              "shadow-2xl shadow-slate-400",
              "h-1/4 w-1/2 absolute",
            )}>
              <div className="flex flex-col justify-evenly items-left h-full">
                <div>
                  <Link href={"/mujeres"}>
                    <button className="ml-8">
                      Mujeres
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href={"/hombres"}>
                    <button className="ml-8">
                      Hombres
                    </button>
                  </Link>
                </div>              
              </div>
            </div>
          </div> */}
          <div className="mt-1">
            {/* <Image src='/icon/logoDesktop.png' alt='logotipo' height='40px' width='80px' /> */}
            <img src='/icon/logoLiverp.jpg' alt='logotipo' className='h-[35px] sm:h-[40px]'/>
          </div>
          <div className="mt-2">
            <Link href={"/login"}>
              <button className="text-white">
                Salir
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <SearchByName 
            onChange={onChange}
            value={value}
            onClick={onClick}
           />
        </div>
      </div>

      {/* Desktop */}
      <div className="bg-pinkLiverpool hidden md:block h-14 xl:20">
        <div className="flex flex-row justify-between items-center mx-4">
          <div>
            <img src='/icon/logoLiverp.jpg' alt='logotipo' className='h-[35px] sm:h-[40px]' />
          </div>
          <div className="w-1/2 mt-3">
            <SearchByName 
              onChange={onChange}
              value={value}
              onClick={onClick}
            />
          </div>
          <div className="flex flex-row justify-end items-center">
            <div className="mx-4">
              <Link href={"/mujeres"}>
                <button className="text-white">
                  Mujeres
                </button>
              </Link>
            </div>
            <div className="mx-4">
              <Link href={"/hombres"}>
                <button className="text-white">
                  Hombres
                </button>
              </Link>
            </div>
            <div className="mx-4">
              <Link href={"/login"}>
                <button className="text-white">
                  Salir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
