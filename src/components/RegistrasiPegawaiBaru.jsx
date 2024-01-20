import React, { useState } from 'react'
import gundar from "../assets/gundar.png"
import Footer from './Footer'
import axios from 'axios'

export default function RegistrasiPegawaiBaru() {


    const handleRegistrasiPegawai = (event) => {
        event.preventDefault()
        const nip = event.target.nip.value
        const nama = event.target.nama.value
        const tanggalLahir = event.target.tanggalLahir.value
        const gender = event.target.gender.checked ? "pria" : "wanita"
        const alamat = event.target.alamat.value
        
         // Mendapatkan nilai bagian yang dipilih
        const selectedBagian = document.querySelector('input[name="bagian"]:checked');

        // Memeriksa apakah ada bagian yang dipilih
        const bagian = selectedBagian ? selectedBagian.value : null;
        
        const requestingData = {
            nip, 
            nama,
            tanggalLahir,
            gender, 
            alamat,
            bagian
        }
        console.log(requestingData)
        axios({
            method: "POST",
            url: "...",
            data: requestingData
        }).then((result) => {
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
                        <form onSubmit={handleRegistrasiPegawai} className="max-w-md mx-auto translate[-50%] top-[20%] relative">
                            <p className='mb-5 text-[20px] font-medium'>Registrasi</p>
                            <div className="flex justify-center relative z-0 w-full mb-8 group">
                                <input type="text" name="nip" id="nip" className="block px-0 py-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="NIP... " required />
                            </div>
                            <div className="flex justify-center relative z-0 w-full mb-8 group">
                                <input type="text" name="nama" id="nama" className="block px-0 py-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Nama... " required />
                            </div>
                            <div className="flex justify-center relative w-full mb-8 group">
                                <input type="text" name="tanggalLahir" id="tanggalLahir" className="block px-0 py-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Tanggal Lahir... " required />
                            </div>
                            <div className="relative w-full mb-5">
                                <label className='w-[200px]' htmlFor="">Gender</label>
                                <div className='flex flex-col w-full mt-2 mb-8'>
                                    <div class="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                        <input type="checkbox" id='pria' name='gender'/>
                                        <p className='ml-2'>Pria</p>
                                    </div>
                                    <div class="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                        <input type='checkbox' id='wanita'/>
                                        <p className='ml-2'>Wanita</p>
                                    </div>
                                    <hr className='w-full bg-gray-600 h-[1.5px] mt-2' style={{border: "none"}} />
                                </div>
                            </div>
                            <div className="flex justify-center relative w-full mb-8 group">
                                <input type="text" name="alamat" id="alamat" className="block px-0 py-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Alamat " required />
                            </div>
                            <div className="relative w-full mb-5">
                                <label className='w-[200px]' htmlFor="">Bagian</label>
                                <div className='grid grid-cols-2 w-full mt-2'>
                                    <div class="flex items-center cursor-pointer" htmlFor="customStyle">
                                        <input type="checkbox" name='bagian' id='dokter' value='dokter'/>
                                        <p className='ml-2'>Dokter</p>
                                    </div>
                                    <div class="flex items-center cursor-pointer" htmlFor="customStyle">
                                        <input type='checkbox' name='bagian' id='admin' value='admin' />
                                        <p className='ml-2'>Admin</p>
                                    </div>
                                    <div class="flex items-center cursor-pointer" htmlFor="customStyle">
                                        <input type='checkbox' name='bagian' id='manager' value='manager' />
                                        <p className='ml-2'>Manager</p>
                                    </div>
                                    <div class="flex items-center cursor-pointer" htmlFor="customStyle">
                                        <input type='checkbox' name='bagian' id='stafPendaftaran' value='stafPendaftaran' />
                                        <p className='ml-2'>Staf Pendaftaran</p>
                                    </div>
                                </div>
                                <hr className='w-full bg-gray-600 h-[1.5px] mt-2 mb-8' style={{border: "none"}} />
                            </div>
                            <button type="submit" className="text-white bg-[#388E3C] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center mx-auto block">Daftarkan</button>
                        </form>
                    </div>
                </div>


            </section>
            <Footer/>
        </>
    )
}