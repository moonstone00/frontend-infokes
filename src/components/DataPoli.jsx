import { React, useEffect, useState } from 'react'
import { Container, Center, Spinner } from '@chakra-ui/react'
import datas from '../exports/DataPasien.json'
import imageGundar from '../assets/gundar.png'
import Footer from './FooterAdmin'

export default function DataPoli() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [])

    return (
        <>
            {
                isLoading
                ?
                <Container >
                    <Center h='100vh'>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                            />
                    </Center>
                </Container>
                :
                null
            }
            <section className='w-full min-h-screen bg-[#fafff6] p-12'>
            <div className='w-full flex flex-col items-center justify-center gap-4 mb-3'>
                <img src={imageGundar} alt="gundar" className='w-56 mb-[68px]' />
                <h1 className='text-[#388E3C] text-[48px] font-semibold mb-[38px]'>Daftar Poli</h1>
                <button className="bg-[#388E3C] text-white px-8 py-2 rounded-lg">Tambah Poli</button>
            </div>

            <div className='mt-12 mb-32'>
                <div className='w-full flex justify-between'>
                    <p className='text-5xl font-semibold'>Poli <span className='text-[#388E3C]'>Umum</span></p>
                    <div>
                    <div className="flex items-center mb-4">
                        <h2 className="text-5xl text-[#388E3C] font-semibold">7649</h2>
                        <div className="flex flex-col justify-center">
                            <p>Pasien</p>
                            <p>Ditangani</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                            <thead className="text-xs uppercase bg-[#388E3C] text-white">
                            <tr>
                                <th scope="col" className="py-3 px-6">No</th>
                                <th scope="col" className="py-3 px-6">Nama Dokter</th>
                                <th scope="col" className="py-3 px-6">Pasien Ditangani</th>
                                <th scope="col" className="py-3 px-6">Tanggal Masuk</th>
                            </tr>
                            </thead>
                        <tbody>
                            {
                            datas.map((data, index) => {
                                const {antrian, namaPasien, nip} = data
                                
                                if(index % 2 === 0) {
                                return (
                                    <tr className="bg-white text-black font-semibold">
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">{antrian}</td>
                                        <td className="py-4 px-6">{namaPasien}</td>
                                        <td className="py-4 px-6">{nip}</td>
                                    </tr>
                                )
                                } else if(index % 2 === 1) {
                                return (
                                    <tr className="bg-[#dedede] text-black font-semibold">
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">{antrian}</td>
                                        <td className="py-4 px-6">{namaPasien}</td>
                                        <td className="py-4 px-6">{nip}</td>
                                    </tr>
                                )
                                }
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mb-32'>
                <div className='w-full flex justify-between'>
                    <p className='text-5xl font-semibold'>Poli <span className='text-[#388E3C]'>Penyakit Dalam</span></p>
                    <div>
                    <div className="flex items-center mb-4">
                        <h2 className="text-5xl text-[#388E3C] font-semibold">7649</h2>
                        <div className="flex flex-col justify-center">
                            <p>Pasien</p>
                            <p>Ditangani</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                            <thead className="text-xs uppercase bg-[#388E3C] text-white">
                            <tr>
                                <th scope="col" className="py-3 px-6">No</th>
                                <th scope="col" className="py-3 px-6">Nama Dokter</th>
                                <th scope="col" className="py-3 px-6">Pasien Ditangani</th>
                                <th scope="col" className="py-3 px-6">Tanggal Masuk</th>
                            </tr>
                            </thead>
                        <tbody>
                            {
                            datas.map((data, index) => {
                                const {antrian, namaPasien, nip} = data
                                
                                if(index % 2 === 0) {
                                return (
                                    <tr className="bg-white text-black font-semibold">
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">{antrian}</td>
                                        <td className="py-4 px-6">{namaPasien}</td>
                                        <td className="py-4 px-6">{nip}</td>
                                    </tr>
                                )
                                } else if(index % 2 === 1) {
                                return (
                                    <tr className="bg-[#dedede] text-black font-semibold">
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">{antrian}</td>
                                        <td className="py-4 px-6">{namaPasien}</td>
                                        <td className="py-4 px-6">{nip}</td>
                                    </tr>
                                )
                                }
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mb-32'>
                <div className='w-full flex justify-between'>
                    <p className='text-5xl font-semibold'>Poli <span className='text-[#388E3C]'>Jantung</span></p>
                    <div>
                    <div className="flex items-center mb-4">
                        <h2 className="text-5xl text-[#388E3C] font-semibold">7649</h2>
                        <div className="flex flex-col justify-center">
                            <p>Pasien</p>
                            <p>Ditangani</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                            <thead className="text-xs uppercase bg-[#388E3C] text-white">
                            <tr>
                                <th scope="col" className="py-3 px-6">No</th>
                                <th scope="col" className="py-3 px-6">Nama Dokter</th>
                                <th scope="col" className="py-3 px-6">Pasien Ditangani</th>
                                <th scope="col" className="py-3 px-6">Tanggal Masuk</th>
                            </tr>
                            </thead>
                        <tbody>
                            {
                            datas.map((data, index) => {
                                const {antrian, namaPasien, nip} = data
                                
                                if(index % 2 === 0) {
                                return (
                                    <tr className="bg-white text-black font-semibold">
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">{antrian}</td>
                                        <td className="py-4 px-6">{namaPasien}</td>
                                        <td className="py-4 px-6">{nip}</td>
                                    </tr>
                                )
                                } else if(index % 2 === 1) {
                                return (
                                    <tr className="bg-[#dedede] text-black font-semibold">
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">{antrian}</td>
                                        <td className="py-4 px-6">{namaPasien}</td>
                                        <td className="py-4 px-6">{nip}</td>
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
