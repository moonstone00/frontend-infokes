import { useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import axios from 'axios'

export default function RegistrasiDokter() {

    const [poli, setPoli] = useState([])
    const [selectedPoli, setSelectedPoli] = useState("")
    const toast = useToast()

    useEffect(() => {
        axios.get("/").then((result) => {
            console.log(result)
            setPoli(result)
        })
    }, [])

    const handlePoliChange = (event) => {
        const selectedValue = event.target.value
        console.log(`Poli yang dipilih: ${selectedValue}`);
        setSelectedPoli(selectedValue);
    }

    const handleRegisterAdmin = (event) => {
        event.preventDefault()

        const nama = event.target.nama.value
        const tanggal_lahir = event.target.tanggal_lahir.value
        const alamat = event.target.alamat.value
        const password = event.target.password.value
        const gender = event.target.gender.checked ? "pria" : "wanita"

        const requestingData = {
            nama,
            tanggal_lahir,
            gender,
            alamat,
            password,
            selectedPoli
        }

        if(selectedPoli === 'Jantung' || selectedPoli === 'Umum' || selectedPoli === 'Penyakit Dalam') {
            axios({
                method: "POST",
                url: "http://localhost:3200/api/v1/resources/registration/dokter",
                data: requestingData
            }).then((result) => {
                const resutlParse = JSON.parse(result.config.data)
                console.log(resutlParse)
                window.localStorage.setItem("nama", resutlParse.nama)
                window.localStorage.setItem("tanggal_lahir", resutlParse.tanggal_lahir)
                window.localStorage.setItem("gender", resutlParse.gender)
                window.localStorage.setItem("selectedPoli", resutlParse.selectedPoli)
                window.localStorage.setItem("role", "dokter")
    
                window.location.replace('/antrianPoli')
            })
            console.log(requestingData)
        } else {
            toast({
                title: "Pilih Poli!",
                duration: 2000,
                status: "error",
            })
        }

    }

    const handleKembali = () => {
        window.location.replace('/')
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center min-h-screen my-12'>
                {/* <img className='w-56 mb-11' /> */}

                <div className='justify-center items-center w-[711px] h-[730px] px-11 shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                    <form onSubmit={handleRegisterAdmin} className="max-w-md mx-auto translate[-50%] top-[15%] relative">
                        <p className='mb-5 text-[32px] font-medium'>Register Dokter</p>

                        <div className='flex flex-col'>

                            <div className='flex gap-8'>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="nama" id="nama" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="tanggal_lahir" id="tanggal_lahir" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Lahir</label>
                                </div>
                            </div>

                            <div className="relative z-0 w-full mb-8 group">
                                <input type="text" name="alamat" id="alamat" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat</label>
                            </div>

                            <div className='flex gap-8'>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>
                            </div>

                            <div className='flex gap-8 mb-8'>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="spesialisasi" id="spesialisasi" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Spesialisasi</label>
                                </div>
                            </div>

                            <div className='flex gap-8'>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="spesialisasi" id="spesialisasi" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Poli ID</label>
                                </div>
                            </div>

                            <label for="poli" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Poli</label>
                            <select required id="poli" onChange={handlePoliChange} value={selectedPoli} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-8 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Pilih Poli</option>
                                <option value="Umum">Umum</option>
                                <option value="Jantung">Jantung</option>
                                <option value="Penyakit Dalam">Penyakit Dalam</option>
                                {/* {
                                    poli.map((choosePoli, index) => {
                                        const {namaPoli, id} = choosePoli

                                        return (
                                            <option value={namaPoli}>{namaPoli}</option>
                                        )
                                    })
                                }
                                 */}
                            </select>

                            <div className='flex gap-8'>
                                <div className="flex flex-col justify-center w-full mb-5">
                                    <label className='mb-4'>Gender</label>
                                    <div className='flex'>
                                        <div class="relative flex items-center rounded-full cursor-pointer mr-4">
                                            <input type="checkbox" id="pria" name='gender'  />
                                            <p className='ml-2'>Pria</p>
                                        </div>
                                        <div class="relative flex items-center rounded-full cursor-pointer">
                                            <input type='checkbox' id='wanita'  />
                                            <p className='ml-2'>Wanita</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-4'>
                                    <button type="submit" className="text-white bg-[#388E3C] hover:bg-green-600 font-medium rounded-lg text-sm w-full h-8 sm:w-auto text-center px-6 mx-auto block" >Daftar</button>
                                    <button type="click" onClick={handleKembali} className="text-white bg-slate-600 hover:bg-slate-700 font-medium rounded-lg text-sm w-full h-8 sm:w-auto text-center px-6 mx-auto block" >Kembali</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
