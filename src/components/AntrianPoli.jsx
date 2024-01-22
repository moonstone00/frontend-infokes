import imageGundar from '../assets/gundar.png'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AntrianPoli() {

    const [antriPoliJantung, setAntriPoliJantung] = useState([])

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: "http://localhost:3200/pasien"
    //     }).then((result) => {
    //         setAntriPoliJantung(result.data.pasien)
    //     })
    // })

    const handleStatus = () => {
        window.location.replace('/treatment')
    }

    return (
        <>
            <section className='w-full min-h-screen bg-[#fafff6] p-12'>
            <div className='w-full flex flex-col items-center justify-center mb-1'>
                <img src={imageGundar} alt="gundar" className='w-56 mb-[28px]' />
                <h1 className='text-[#388E3C] text-[48px] font-semibold'>Antrian Poli Jantung</h1>
                <p className='mb-[38px] font-semibold'>23/08/2023</p>
                <div className='flex flex-col items-center mb-12 font-semibold'>
                    <h3 className='text-[36px]'>Dr. Johanes Leimena</h3>
                    <p>1982 2318 38461 936</p>
                </div>
            </div>

            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-[#388E3C] text-white">
                        <tr>
                            <th scope="col" className="py-3 px-6">Antrian</th>
                            <th scope="col" className="py-3 px-6">Nama Pasien</th>
                            <th scope="col" className="py-3 px-6">NIP</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                        </tr>
                        </thead>
                    <tbody>
                        {
                        antriPoliJantung.map((data, index) => {

                            // const {antrian, namaPasien, nip, status} = data
                            const {id, nip, status, createdAt} = data


                            if((index + 1) % 2 === 1) {
                            return (
                                <tr className="bg-white text-black font-semibold">
                                    <td className="py-4 px-6">{id}</td>
                                    <td className="py-4 px-6">{createdAt}</td>
                                    <td className="py-4 px-6">{nip}</td>
                                    <td className="py-4 px-6">
                                        {status === 'out' ? (
                                            <button className='bg-red-700 text-white p-2 rounded-lg'>{status}</button>
                                        ) : (
                                            <button>{status}</button>
                                        )
                                    }
                                    </td>
                                </tr>
                            )
                            } else if((index + 1) % 2 === 0) {
                            return (
                                <tr className="bg-[#dedede] text-black font-semibold">
                                    <td className="py-4 px-6">{id}</td>
                                    <td className="py-4 px-6">{createdAt}</td>
                                    <td className="py-4 px-6">{nip}</td>
                                    <td className="py-4 px-6">
                                        {status === 'out' ? 
                                        (
                                            <button className='bg-red-700 text-white p-2 rounded-lg' onClick={handleStatus}>{status}</button>
                                        ) : (
                                            <button>{status}</button>
                                        )
                                    }
                                    </td>
                                </tr>
                            )
                            }
                        })
                        }
                    </tbody>
                </table>
                </div>

            </div>
            </section>
            <Footer/>
        </>
    )
}
