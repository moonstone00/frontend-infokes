import React, { useEffect, useState } from 'react'
import gundar from "../assets/gundar.png"
import Footer from './Footer'
import axios from 'axios'

export default function PendaftaranProfile() {

    const [dataProfil, setDataProfile] = useState('')

    useEffect(() => {


        axios({
            method: "GET",
            url: `http://localhost:3200/api/v1/resource/profile/:user_id`
        }).then((result) => {
            console.log(result) 
        })
    }, [])

    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img  src={gundar} className='w-56 mb-8'/>
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Profile</h1>

                    <div className='w-[511px] px-16 py-11 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <div className='font-medium mb-8'>
                            <div className='text-[32px] mb-8'>{localStorage.getItem("nama")}</div>
                            <div>Staff Pendaftaran</div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>NIP</div>
                                <div>{localStorage.getItem("nip")}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Tanggal Lahir</div>
                                <div>{localStorage.getItem("tanggalLahir")}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Gender</div>
                                <div>{localStorage.getItem("gender")}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Alamat</div>
                                <div>{localStorage.getItem("alamat")}</div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>

        
    )
}
