import gundar from "../assets/gundar.png"
import Footer from './FooterDokter'
import { React, useEffect, useState } from 'react'
import { axios } from '../utils/axios/config.js'

export default function ProfileDoktor() {

    // const [pasienList, setPasienList] = useState([])
    // const [idPasien, setIdPasien] = useState(null);
    const [dataDokter, setDataDokter] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('id');
        // You need to use the `id` from the params in the API request
        axios.get(`/profile/${id}`).then((result) => {
            setDataDokter(result.data);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img src={gundar} alt="gundar" className='w-56 mb-8' />
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Profile Dokter</h1>

                    <div className='w-[511px] px-16 py-11 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <div className='font-medium mb-8'>
                            <div className='text-[32px] mb-3'>{dataDokter.nama}</div>
                            <div>Spesialis {dataDokter.spesialisasi}</div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>NIP</div>
                                <div>{dataDokter.nip}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Tanggal Lahir</div>
                                <div>{dataDokter.tanggal_lahir}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Gender</div>
                                <div>{dataDokter.gender}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Alamat</div>
                                <div>{dataDokter.alamat}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Poli</div>
                                <div>{dataDokter.poli}</div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>


    )
}
