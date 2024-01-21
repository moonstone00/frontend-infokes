import React, { useEffect, useState } from 'react'
import gundar from "../assets/gundar.png"
import Footer from './Footer'
import axios from 'axios'

export default function PendaftaranProfile() {

    const [dataProfil, setDataProfile] = useState('')

    const id = localStorage.getItem("id")

    useEffect(() => {
        
        axios({
            method: "GET",
            url: `http://localhost:3200/api/v1/resources/profile/${id}`
        }).then((result) => {
            console.log(result) 
            setDataProfile(result.data)
        })
    }, [id])

    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img  src={gundar} className='w-56 mb-8'/>
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Profile</h1>

                    <div className='w-[511px] px-16 py-11 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <div className='font-medium mb-8'>
                            <div className='text-[32px] mb-8'>{dataProfil.nama}</div>
                            <div>Staff Pendaftaran</div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center'>
                                <div className='w-1/2 font-medium'>NIP</div>
                                <div>{dataProfil.nip}</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-1/2 font-medium'>Tanggal Lahir</div>
                                <div>{dataProfil.tanggalLahir}</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-1/2 font-medium'>Gender</div>
                                <div>{dataProfil.gender}</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-1/2 font-medium'>Alamat</div>
                                <div>{dataProfil.alamat}</div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>

        
    )
}
