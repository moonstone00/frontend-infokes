import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { Center, Container, HStack, Spinner } from '@chakra-ui/react'
import { axios } from '../utils/axios/config.js'
import Footer from "./FooterAdmin"
import imageGundar from "../assets/gundar.png"
export default function MonitorKegiatan() {

    const [isLoading, setIsLoading] = useState(true)
    const [antrianList, setAntrianList] = useState([])
    const [searchTitle, setSearchTitle] = useState("")
    const [dataKaryawan, setDataKaryawan] = useState([])
    const [statistik, setDataStatistik] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        axios.get("/dataPegawai").then((result) => {
            console.log(result)
            setDataKaryawan(result.data.dataKaryawan)
        })

        axios.get("/statistik").then((result) => {
            setDataStatistik(result.data)
        })

        setTimeout(() => {
            setIsLoading(false)

            console.log('hai semuanya')
        }, 2000);
    }, [])

    const recordPerPage = 5
    const lastLength = currentPage * recordPerPage
    const firstIndex = lastLength - recordPerPage
    let arrayList = []

    for (let key in antrianList) {
        arrayList.push(antrianList[key])
        console.log(arrayList.push(key))

    }


    const records = antrianList.slice(firstIndex, lastLength)

    const npage = Math.ceil(antrianList.length / recordPerPage)

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const changeCPage = (event) => {
        if (event < 1) {
            setCurrentPage(1)
        } else {
            setCurrentPage(event)
        }
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <>
            <section className='w-full min-h-screen bg-[#fafff6] p-12'>
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

                <div className='w-full flex flex-col items-center justify-center gap-4 mb-10'>
                    <img src={imageGundar} alt="gundar" className='w-56 mb-[68px]' />
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-[8px]'>Monitor Kegiatan</h1>
                </div>

                <div className="statistik">
                    <div className="divider">
                        <h1>{statistik.total_rekam_medis}</h1>
                        <div className="content">
                            <p>Penanganan</p>
                            <p>Medis</p>
                        </div>
                    </div>

                    <div className="divider">
                        <h1>{statistik.total_pasien}</h1>
                        <div className="content">
                            <p>Pasien</p>
                            <p>Ditangani</p>
                        </div>
                    </div>

                    <div className="divider">
                        <h1>{statistik.total_diagnosis}</h1>
                        <div className="content">
                            <p>Jenis</p>
                            <p>Penyakit</p>
                        </div>
                    </div>

                    <div className="divider">
                        <h2>{statistik.total_income}</h2>
                        <div className="content">
                            <p>Pemasukan</p>
                        </div>
                    </div>
                </div>

{/* 
                <div className="flex justify-center items-center mt-12 mb-4">
                    <form>
                        <div className="flex">
                            <div className="relative w-[755px]">
                                <input type="text" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm rounded-e-lg  border-s-2 border border-[#388E3C] focus:ring-[#388E3C] focus:border-[#388E3C] dark:border-[#388E3C] dark:placeholder-gray-400 dark:text-black dark:focus:border-[#388E3C] rounded-lg shadow-sm focus:outline-none" placeholder="Cari Pasien..." style={{ border: "2.5px solid #388E3C" }} onChange={(event) => setSearchTitle(event.target.value)} />
                                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#388E3C] rounded-lg border border-[#388E3C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div> */}

                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                            <thead className="text-xs uppercase bg-[#388E3C] text-white">
                                <tr>
                                    <th scope="col" className="py-3 px-6">Tanggal Masuk</th>
                                    <th scope="col" className="py-3 px-6">Nama</th>
                                    <th scope="col" className="py-3 px-6">Posisi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataKaryawan.map((data) => (
                                    <tr key={data.id}>
                                        <td className='py-4 px-6'>{data.tanggal_masuk}</td>
                                        <td className='py-4 px-6'>{data.nama}</td>
                                        <td className='py-4 px-6'>{data.posisi}</td>
                                    </tr>
                                ))}

                                {/* {isLoading ? (
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

                                            const { no, namaPasien, tanggalKunjungan, diagnosa } = data

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
                                )} */}
                            </tbody>
                        </table>
                    </div>
{/* 
                    <div>
                        <div className="flex justify-end gap-44 mt-8">
                            <div className="flex items-center">
                                <FaAngleLeft className="text-6xl text-[#388E3C]" onClick={() => prevPage()} />
                                <p className="text-[24px]">Prev</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-[24px]">Next</p>
                                <FaAngleRight className="text-6xl text-[#388E3C]" onClick={() => nextPage()} />
                            </div>
                            <div className="flex items-center relative">
                                <input type="number" className="w-14 h-8 px-2 rounded-lg ml-64" style={{ border: '2.5px solid #388E3C' }} onChange={(event) => changeCPage(event.target.value)} defaultValue={1} />
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            <Footer />
        </>
    )
}
