import gundar from "../assets/gundar.png"
import Footer from './FooterAdmin'
import { React, useEffect, useState } from 'react'
import { axios } from '../utils/axios/config.js'

export default function ProfileDoktor() {

    // const [pasienList, setPasienList] = useState([])
    // const [idPasien, setIdPasien] = useState(null);
    const [dataPasien, setDataPasien] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('id');
        // You need to use the `id` from the params in the API request
        axios.get(`/profile/${id}`).then((result) => {
            setDataPasien(result.data);
            console.log(result.data);
            //   setIdPasien(result.data.id);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img src={gundar} alt="gundar" className='w-56 mb-8' />
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Profile</h1>

                    <div className='w-[511px] px-16 py-11 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <div className='font-medium mb-8'>
                            <div className='text-[32px] mb-8'>Faizal Maulana</div>
                            <div>Manager</div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>NIP</div>
                                <div>{dataPasien.nip}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Tanggal Lahir</div>
                                <div>{dataPasien.tanggal_lahir}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Gender</div>
                                <div>{dataPasien.gender}</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Alamat</div>
                                <div>{dataPasien.alamat}</div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>


    )
}
