import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import React, { useEffect, useState } from 'react'
import gundar from "../assets/gundar.png"
import Footer from './FooterDokter'
import { axios } from "../utils/axios/config"
import { useParams } from 'react-router-dom';

export default function TreatmentGejalaDiagnosa() {

    const { id } = useParams()

    const [currentPage, setCurrentPage] = useState(1)
    const [tanggal, setDate] = useState("")
    const [dataPasien, setDataPasien] = useState([])
    const [dataDokter, setDataDokter] = useState([])
    // const [riwayatKunjungan, setRiwayatKunjungan] = useState([])

    useEffect(() => {
        axios.get(`/data/from/pendaftaran/${id}`).then((result) => {
            setDataPasien(result.data)
            console.log(result);

            axios.get(`/pasienList/${result.data.id_pasien}`).then((result) => {
                console.log(result.data);
            })
        })

        const idDokter = localStorage.getItem("id");
        axios.get(`/profile/${idDokter}`).then((result) => {
            console.log(result.data);
            setDataDokter(result.data);
        })

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${currentDate.getFullYear()}`;
        console.log(formattedDate);
        setDate(formattedDate);
    }, []);


    const handleTreatmen = (event) => {
        event.preventDefault();
        console.log(event)
        const formData = new FormData(event.target);
        const gejala = formData.get('gejala');
        const diagnosa = formData.get('diagnosa');
        const obat = formData.get('obat');
        console.log("gejala", gejala)
        const requestingData = {
            gejala: gejala,
            diagnosis: diagnosa,
            obat: obat
        }
        console.log(requestingData);

        axios.post(`/dokter/medicalRecord/${id}`, requestingData)
            .then((result) => {
                console.log(result)
                window.location.replace("/antrianPoli")
            })
    }

    // const recordPerPage = 5
    // const lastLength = currentPage * recordPerPage
    // const firstIndex = lastLength - recordPerPage
    // let arrayList = []

    // for(let key in riwayatKunjungan) {
    //   arrayList.push(riwayatKunjungan[key])
    //   console.log(arrayList.push(key))
    // }


    // const records = riwayatKunjungan.slice(firstIndex, lastLength)
    // const npage = Math.ceil(riwayatKunjungan.length / recordPerPage)

    // const nextPage = () => {
    //     if(currentPage !== npage) {
    //     setCurrentPage(currentPage + 1)
    //     }
    // }

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
            <section className="p-12">
                <div className='flex justify-center items-center flex-col min-h-screen mb-12'>
                    <img src={gundar} alt="gundar" className='w-56 mb-8' />
                    <div className='flex flex-col items-center font-semibold mb-8'>
                        <h1 className='text-[#388E3C] text-[48px] mb-1'>Poli {dataDokter.poli}</h1>
                        <p>{tanggal}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-[36px] font-semibold'>Dr. {dataDokter.nama}</p>
                        <p className='font-medium'>{dataDokter.nip}</p>
                    </div>

                    <div className='w-[511px] px-11 p-8 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <form className="max-w-md mx-auto translate[-50%] top-[20%] relative" onSubmit={handleTreatmen}>
                            <p className='text-[32px] font-medium'>{dataPasien.nama}</p>
                            <p className='mb-5'>{dataPasien.tanggal_lahir}</p>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="gejala" id="gejala" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="gejala" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gejala/Keluhan</label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <input type="text" name="diagnosis" id="diagnosis" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="diagnosis" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Diagnosis</label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <input type="text" name="obat" id="obat" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="obat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Obat</label>
                            </div>

                            <button type="submit" className="text-white bg-[#388E3C] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mx-auto block">Selesai</button>
                        </form>
                    </div>
                </div>


                <div>
                    <p className='text-[20px] font-bold text-[#388E3C] mb-1'>Riwayat Kunjungan</p>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                            <thead className="text-xs uppercase bg-[#388E3C] text-white">
                                <tr>
                                    <th scope="col" className="py-3 px-6">Tanggal</th>
                                    <th scope="col" className="py-3 px-6">Dokter</th>
                                    <th scope="col" className="py-3 px-6">Poli</th>
                                    <th scope="col" className="py-3 px-6">Diagnosa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                records.map((data, index) => {
                                    const {tanggal, dokter, poli, diagnosa} = data
                                    
                                    if(index % 2 === 0) {
                                    return (
                                        <tr className="bg-white text-black font-semibold">
                                            <td className="py-4 px-6">{tanggal}</td>
                                            <td className="py-4 px-6">{dokter}</td>
                                            <td className="py-4 px-6">{poli}</td>
                                            <td className="py-4 px-6">{diagnosa}</td>
                                        </tr>
                                    )
                                    } else if(index % 2 === 1) {
                                    return (
                                        <tr className="bg-[#dedede] text-black font-semibold">
                                            <td className="py-4 px-6">{tanggal}</td>
                                            <td className="py-4 px-6">{dokter}</td>
                                            <td className="py-4 px-6">{poli}</td>
                                            <td className="py-4 px-6">{diagnosa}</td>
                                        </tr>
                                    )
                                    }
                                })
                                } */}
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
                                {/* <FaAngleRight className="text-6xl text-[#388E3C]" onClick={() => nextPage()}/> */}
                            </div>
                            <div className="flex items-center relative">
                                <input type="number" className="w-14 h-8 px-2 rounded-lg ml-64" style={{ border: '2.5px solid #388E3C' }} onChange={(event) => changeCPage(event.target.value)} defaultValue={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>


    )
}
