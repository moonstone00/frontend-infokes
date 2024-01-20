import React, { useEffect } from 'react'
import gundar from "../assets/gundar.png"
import Footer from './Footer'
import axios from 'axios'

export default function pendaftaranPoli() {

    const userRegister = (event) => {
        event.preventDefault()
        const poli = event.target.poli.value
        const biaya = event.target.biaya.value

        const requestingData = {
            poli: poli,
            biaya: biaya
        }

        axios({
            method: "POST",
            url: "nama localhost nya....",
            data: requestingData
        }).then((result) => {
            window.localStorage.setItem('poli', result.data.users.poli)
            window.localStorage.setItem('biaya', result.data.users.biaya)
            window.location.replace('/searchNik')
        })
    }


    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img  src={gundar} className='w-56 mb-8'/>
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Pendaftaran</h1>

                    <div className='w-[511px] px-11 p-8 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <form className="max-w-md mx-auto translate[-50%] top-[20%] relative" onSubmit={userRegister}>
                        <p className='mb-5 text-[32px] font-medium'>Pendaftaran Pasien</p>
                        <p className='font-semibold pb-2'>Nama Pasien</p>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="poli" id="poli" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="poli" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Poli</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="biaya" id="biaya" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="biaya" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Biaya</label>
                        </div>
                        <button type="submit" className="text-white bg-[#388E3C] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mx-auto block">Masuk</button>
                        </form>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}