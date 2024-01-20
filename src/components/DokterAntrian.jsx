import { FaAngleLeft, FaAngleRight }  from "react-icons/fa"
import { React, useEffect, useState } from 'react'
import imageGundar from '../assets/gundar.png'
import Footer from './Footer'
import axios from "axios"

export default function PasienForm() {

    const [loading, setLoading] = useState(false)
    const [antrianList, setAntrianList] = useState([])
    const [searchTitle, setSearchTitle] = useState("")


    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true) 
            const response = await axios.get(
                "http://localhost:3200/pasien"
            )
            setAntrianList(response.data.pasien)
            setLoading(false)
        }
        loadPosts()
    }, [])

    const recordPerPage = 5
    const lastLength = currentPage * recordPerPage
    const firstIndex = lastLength - recordPerPage
    let arrayList = []

    for(let key in antrianList) {
        arrayList.push(antrianList[key])
        console.log(arrayList.push(key))
        
    }

    console.log('this is antrianList', antrianList)

    
    const records = antrianList.slice(firstIndex, lastLength)
    const npage = Math.ceil(antrianList.length / recordPerPage)

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
                <h1 className='text-[#388E3C] text-[48px] font-semibold mb-[58px]'>Riwayat Pemeriksaan</h1>
                <div className='flex flex-col items-center'>
                <h3 className='mb-[9px] font-semibold text-[36px]'>Dr. Johanes Leimena</h3>
                <p>1982 2318 38461 936</p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-12 mb-4">
                <form>
                    <div className="flex mr-[67px] ml-[100px]">
                        <div className="relative w-[755px]">
                            <input type="text" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm rounded-e-lg  border-s-2 border border-[#388E3C] focus:ring-[#388E3C] focus:border-[#388E3C] dark:border-[#388E3C] dark:placeholder-gray-400 dark:text-black dark:focus:border-[#388E3C] rounded-lg shadow-sm focus:outline-none" placeholder="Cari Pasien..." style={{border: "2.5px solid #388E3C"}} onChange={(event) => setSearchTitle(event.target.value)} />
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#388E3C] rounded-lg border border-[#388E3C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                <div>
                    <div className="flex items-center mb-4">
                        <h2 className="text-5xl text-[#388E3C] font-semibold">{antrianList.length}</h2>
                        <div className="flex flex-col justify-center">
                            <p>Pasien</p>
                            <p>Diperiksa</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-[#388E3C] text-white">
                        <tr>
                            <th scope="col" className="py-3 px-6">No</th>
                            <th scope="col" className="py-3 px-6">Nama Pasien</th>
                            <th scope="col" className="py-3 px-6">Tanggal Kunjungan</th>
                            <th scope="col" className="py-3 px-6">Diagnosa</th>
                        </tr>
                        </thead>
                    <tbody>
                    {loading ? (
        <h4>Loading...</h4>
    ) : (
        records
            .filter((value) => {
                if (searchTitle === "") {
                    return true;
                } else if (value.status.toLowerCase().includes(searchTitle.toLocaleLowerCase())) {
                    return true;
                }
                return false;
            })
            .map((data, index) => {

                const {no, namaPasien, tanggalKunjungan, diagnosa} = data

                return (
                    <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white text-black font-semibold" : "bg-[#dedede] text-black font-semibold"}
                    >
                        <td className="py-4 px-6">{no}</td>
                        <td className="py-4 px-6">{namaPasien}</td>
                        <td className="py-4 px-6">{tanggalKunjungan}</td>
                        <td className="py-4 px-6">{diagnosa}</td>
                    </tr>
                );
            })
    )}
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
