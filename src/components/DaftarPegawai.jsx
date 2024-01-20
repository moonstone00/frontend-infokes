import { FaAngleLeft, FaAngleRight }  from "react-icons/fa"
import { React, useEffect, useState } from 'react'
import imageGundar from '../assets/gundar.png'
import datas from '../exports/Data.json'
import Footer from './Footer'
import axios from "axios"

export default function DaftarPegawai() {

    const [currentPage, setCurrentPage] = useState(1)
    const [pegawai, setPegawai] = useState([])

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: "http://localhost:3200/pasien"
    //     }).then((result) => {
    //         setPegawai(result.data.pasien)
    //     })
    // }, [])

    const handleAddPegawai = () => {
        console.log('hai')
        window.location.replace('/registrasiFormulirPegawai')
    }

    const recordPerPage = 5
    const lastLength = currentPage * recordPerPage
    const firstIndex = lastLength - recordPerPage
    let arrayList = []

    const records = datas.slice(firstIndex, lastLength)
    const npage = Math.ceil(datas.length / recordPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const searchButton = () => {
        search()
    }

    const search = (event) => {
        if(event === datas.dokter) {
            console.log('aman')
        }
    }

    const nextPage = () => {
        if(currentPage !== npage) {
        setCurrentPage(currentPage + 1)
        }
    }

    const changeCPage = (event) => {
        if(event < 1) {
            setCurrentPage(1)
        } else {
            setCurrentPage(event)
        }
    }

    const prevPage = () => {
        if(currentPage !== 1) {
        setCurrentPage(currentPage - 1)
        }
    }

    return (
        <>
            <section className='w-full min-h-screen bg-[#fafff6] p-12'>
            <div className='w-full flex flex-col items-center justify-center gap-4 mb-3'>
                <img src={imageGundar} className='w-56 mb-[68px]' />
                <h1 className='text-[#388E3C] text-[48px] font-semibold mb-[58px]'>Daftar Pegawai</h1>
            </div>

            <div className="flex w-full mb-12">
                <form className="w-full">
                    <div className="flex justify-center gap-4">
                        <div className="relative w-[755px]">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm rounded-e-lg  border-s-2 border border-[#388E3C] focus:ring-[#388E3C] focus:border-[#388E3C] dark:border-[#388E3C] dark:placeholder-gray-400 dark:text-black dark:focus:border-[#388E3C] rounded-lg shadow-sm focus:outline-none" placeholder="Cari Pegawai..." style={{border: "2.5px solid #388E3C"}} onChange={(event) => search(event.target.value)} />
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#388E3C] rounded-lg border border-[#388E3C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => searchButton()}>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                        <button type="button" className="bg-[#388E3C] text-white px-8 py-2 rounded-lg" onClick={() => handleAddPegawai()}>Tambah Pegawai</button>
                    </div>
                </form>
            </div>


            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-[#388E3C] text-white">
                        <tr>
                            <th scope="col" className="py-3 px-6">No</th>
                            <th scope="col" className="py-3 px-6">Nama</th>
                            <th scope="col" className="py-3 px-6">Bagian</th>
                            <th scope="col" className="py-3 px-6">Keterangan</th>
                        </tr>
                        </thead>
                    <tbody>
                        {
                        records.map((data, index) => {
                            const {tanggal, dokter, diagnosa} = data
                            
                            if(index % 2 === 0) {
                            return (
                                <tr className="bg-white text-black font-semibold">
                                    <td className="py-4 px-6">{index + 1}</td>
                                    <td className="py-4 px-6">{tanggal}</td>
                                    <td className="py-4 px-6">{dokter}</td>
                                    <td className="py-4 px-6">{diagnosa}</td>
                                </tr>
                            )
                            } else if(index % 2 === 1) {
                            return (
                                <tr className="bg-[#dedede] text-black font-semibold">
                                    <td className="py-4 px-6">{index + 1}</td>
                                    <td className="py-4 px-6">{tanggal}</td>
                                    <td className="py-4 px-6">{dokter}</td>
                                    <td className="py-4 px-6">{diagnosa}</td>
                                </tr>
                            )
                            }
                        })
                        }
                    </tbody>
                </table>
                </div>

                <div>
                <div className="flex justify-end gap-44 mt-8">
                    <div className="flex items-center">
                    <FaAngleLeft className="text-6xl text-[#388E3C]" onClick={() => prevPage()} />
                    <p className="text-[24px]">Prev</p>
                    </div>
                    <div className="flex items-center">
                    <p className="text-[24px]">Next</p>
                    <FaAngleRight className="text-6xl text-[#388E3C]" onClick={() => nextPage()}/>
                    </div>
                    <div className="flex items-center relative">
                        <input type="number" className="w-14 h-8 px-2 rounded-lg ml-64" style={{border: '2.5px solid #388E3C'}} onChange={(event) => changeCPage(event.target.value)} defaultValue={1} />
                    </div>
                </div>
                </div>
            </div>
            </section>
            <Footer/>
        </>
    )
}
