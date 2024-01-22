import { FaAngleLeft, FaAngleRight }  from "react-icons/fa"
import { React, useEffect, useState } from 'react'
import { Container, Center, Spinner } from '@chakra-ui/react' 
import imageGundar from '../assets/gundar.png'
import Footer from './Footer'
import axios from "axios"

export default function RiwayatKunjungan() {
    
    
    const [isLoading, setIsLoading] = useState(false)
    const [antrianList, setAntrianList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        // TEMPATKAN AXIOS NYA DISINI

        setTimeout(() => {
            setIsLoading(true)
        }, 2000);
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
                <h1 className='text-[#388E3C] text-[48px] font-semibold mb-[58px]'>Riwayat Kunjungan</h1>
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
                        {/* {
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
                                }
                        )} */}
                    
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
