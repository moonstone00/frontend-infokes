import React from 'react'
import gundar from "../assets/gundar.png"
import Footer from './Footer'
import axios from 'axios'

export default function AdminManager() {

    const handleAdminManager = (event) => {
        event.preventDefault()
        const namaPoli = event.target.namaPoli.value

        const requestingData = {
            namaPoli
        }

        axios({
            method: "POST",
            url: "http://localhost:3200/users",
            data: requestingData
        }).then((result) => {
            window.location.replace('/login')
        })
    }

    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img  src={gundar} className='w-56 mb-8'/>
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Formulir Poli Baru</h1>

                    <div className='w-[511px] px-11 p-8 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <form onSubmit={handleAdminManager} className="max-w-md mx-auto translate[-50%] top-[20%] relative">
                        <p className='mb-5 text-[32px] font-medium'>Tambah Poli</p>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name='namaPoli' id="namaPoli" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Poli...</label>
                        </div>
                        <button type="submit" className="text-white bg-[#388E3C] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mx-auto block">Tambahkan</button>
                        </form>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}