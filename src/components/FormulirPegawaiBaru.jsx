import React from 'react'
import gundar from "../assets/gundar.png"
import Footer from './Footer'
import axios from 'axios'
import { Result } from 'antd'

export default function FormulirPegawaiBaru() {

    const handleFormulirPegawaiBaru = (event) => {
        event.preventDefault()

        const spesialis = event.target.spesialis.value

        const selectPenempatanPoli = document.querySelector('input[name="penempatanPoli"]:checked')

        const penempatanPoli = selectPenempatanPoli ? selectPenempatanPoli.value : null

        const requestingData = {
            spesialis,
            penempatanPoli
        }

        axios({
            method: "POST",
            url: "...",
            data: requestingData
        }).then((Result) => {
            window.location.replace('/')
        })

    }

    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img  src={gundar} className='w-56 mb-8'/>
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Formulir Pegawai Baru</h1>

                    <div className='w-[511px] px-11 p-8 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <form className="max-w-md mx-auto translate[-50%] top-[20%] relative">
                        <p className='mb-5 text-[20px] font-medium'>Selesaikan Pendaftaran</p>
                        <p className='mb-20 text-[14px] font-medium'>Dr.Ari Lesmana</p>
                        <div className="flex justify-center relative z-0 w-full mb-8 group">
                            <input type="text" name="spesialis" id="spesialis" className="block px-0 py-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Spesialis... " required />
                        </div>
                        <div className="flex flex-col relative w-full mb-5">
                            <label  htmlFor="">Penempatan Poli</label>
                            <div className='grid w-full mt-2'>
                                <div class="relative flex items-center rounded-full cursor-pointer ml-4" htmlFor="customStyle">
                                    <input type="checkbox" name='penempatanPoli' id='umum' value='umum'  />
                                    <p className='ml-2'>Umum</p>
                                </div>
                                <div class="relative flex items-center rounded-full cursor-pointer ml-4" htmlFor="customStyle">
                                    <input type='checkbox' name='penempatanPoli' id='penyakitDalam' value='penyakitDalam' />
                                    <p className='ml-2'>Penyakit Dalam</p>
                                </div>
                                <div class="relative flex items-center rounded-full cursor-pointer ml-4" htmlFor="customStyle">
                                    <input type='checkbox' name='penempatanPoli' id='jantung' value='jantung' />
                                    <p className='ml-2'>Jantung</p>
                                </div>
                                <hr className='w-full bg-gray-600 h-[1.5px] bg-transparent mt-2' style={{border: "none"}} />
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-[#388E3C] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center mx-auto block">Selesai</button>
                        </form>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}