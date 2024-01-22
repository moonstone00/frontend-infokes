import React, { useState } from 'react'
import gundar from "../assets/gundar.png"
import Footer from './Footer'
import { axios } from '../utils/axios/config.js'

export default function PasienFormNot() {

    const userRegister = (event) => {
        event.preventDefault()
        const nik = event.target.nik.value
        const nama = event.target.nama.value
        const tanggal_lahir = event.target.tanggalLahir.value
        const gender = event.target.gender.checked ? "pria" : "wanita"
        const alamat = event.target.alamat.value


        const requestingData = {
            nik, 
            nama,
            tanggal_lahir,
            gender,
            alamat
        }
        axios.post("/pasien/tambah", requestingData).then((result) => {
            console.log(requestingData)
            // console.log(result.config.data.nik)
            // window.localStorage.setItem("nik", requestingData.nik)
            window.location.replace(`pendaftaranPoli/${result.data.id}`)
        })
    }

    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img  src={gundar} className='w-56 mb-8'/>
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Data Pasien</h1>
                    <p>Pasien tidak terdaftar</p>

                    <div className='w-[511px] px-11 p-8 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <form className="max-w-md mx-auto translate[-50%] top-[20%] relative" onSubmit={userRegister}>
                        <p className='mb-5 text-[32px] font-medium'>Pendaftaran Pasien</p>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="nik" id="nik" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="nik" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor='nik' >NIK</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="nama" id="nama" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                            <label for="nama" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama...</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="tanggalLahir" id="tanggalLahir" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="tanggalLahir" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Lahir...</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                        <div className="flex flex-col justify-center w-full mb-5">
                                    <label className='mb-4'>Gender</label>
                                    <div className='flex'>
                                        <div class="relative flex items-center rounded-full cursor-pointer mr-4">
                                            <input type="checkbox" id="pria" name='gender'  />
                                            <p className='ml-2'>Pria</p>
                                        </div>
                                        <div class="relative flex items-center rounded-full cursor-pointer">
                                            <input type='checkbox' id='wanita'  />
                                            <p className='ml-2'>Wanita</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="alamat" id="alamat" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="alamat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat</label>
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
