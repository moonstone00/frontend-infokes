import React, { useEffect, useState } from 'react'
import gundar from "../assets/gundar.png"
import Footer from './FooterStaff'
import { axios } from '../utils/axios/config.js'
// import { useParams } from 'react-router-dom';
import Modals from '../utils/Modals'

export default function PendaftaranPasien() {

    // const [dataNIP, setDataNIP] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isOpenModalCart, setIsOpenModalCart] = useState(false)
    
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:3200/api/v1/resources/pasien/:nik`
        }).then((result) => {
            console.log(result)
            // setDataNIP(result)
            // console.log(result.data.pasien)
        })
    }, [])
    
    // const nik = localStorage.getItem("nik")

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: `http://localhost:3200/api/v1/resources/pasien/${nik}`
    //     }).then((result) => {
    //         console.log(result)
    //         setDataNIP(result)
    //         // console.log(result.data.pasien)
    //     })
    // }, [])

    const handleSearchNIP = (event) => {
        event.preventDefault();
        axios.get(`/pasien/${searchValue}`).then((result) => {
            const status = result.data.status
            if (status === false) {
                window.location.replace(`/pendaftaranPasien/${searchValue}`)
            } else if (status === true) {
                window.location.replace(`/patientList/${searchValue}`)
            }
        })

        // Cek apakah searchValue ada di dalam dataNIP
        // const foundData = dataNIP.find(pasien => pasien.nip === searchValue);
        // console.log(foundData)

        // if (foundData) {
        //     setIsOpenModalCart(false)
        // window.location.replace('/patientList')

        // } else {
        //     setIsOpenModalCart(true)
        // }
    };

    const handleCancelModal = () => {
        setIsOpenModalCart(false)
        console.log(isOpenModalCart)
    }

    return (
        <>
            {isOpenModalCart ? <Modals onCancel={handleCancelModal} /> : null}
            <section>
                <div className='flex flex-col items-center min-h-screen mt-[110px]'>
                    <div className='flex flex-col justify-center items-center mb-12'>
                        <img src={gundar} className='w-56 mb-14' />
                        <h1 className='text-[#388E3C] text-[48px] font-semibold'>Pendaftaran Pasien</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSearchNIP}>
                            <div className="flex">
                                <div className="relative w-[755px]">
                                    <input type="text" id='nik' onChange={(event) => setSearchValue(event.target.value)} className="block p-2.5 w-full z-20 text-sm rounded-e-lg  border-s-2 border border-[#388E3C] focus:ring-[#388E3C] focus:border-[#388E3C] dark:border-[#388E3C] dark:placeholder-gray-400 dark:text-black dark:focus:border-[#388E3C] rounded-lg shadow-sm focus:outline-none" placeholder="Masukkan NIK Pasien..." style={{ border: "2.5px solid #388E3C" }} />
                                    <button type='submit' className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#388E3C] rounded-lg border border-[#388E3C] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p className='text-center mt-16 text-[22px]'>Aplikasi ini masih dalam tahap pengembangan.
                        <br />
                        Kami berdedikasi untuk melakukan pengembangan
                        <br />
                        hingga aplikasi ini memenuhi standar
                        <br />
                        <span className='font-semibold'>Sistem Informasi Manajemen Rumah Sakit</span>
                        <br />
                        Kementrian Kesehatan Republik Indonesia.
                    </p>
                </div>
            </section>
            <Footer />
        </>


    )
}
