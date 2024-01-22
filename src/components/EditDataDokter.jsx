import React from 'react'
import gundar from "../assets/gundar.png"
import Footer from './Footer'

export default function EditDataDokter() {

    const handleChangeData = (event) => {
        event.preventDefault()

        const nik = event.target.nik.value
        const nama = event.target.nama.value
        const tanggalLahir = event.target.tanggalLahir.value
        const gender = event.target.gender.checked ? "pria" : "wanita"
        const alamat = event.target.alamat.value

        const requestingData = {
            nik,
            nama, 
            tanggalLahir,
            gender,
            alamat
        }

        console.log(requestingData)
    }


    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img  src={gundar} alt="gundar" className='w-56 mb-8'/>
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Ubah Data Dokter</h1>

                    <div className='w-[511px] px-11 p-8 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <form className="max-w-md mx-auto translate[-50%] top-[20%] relative" onSubmit={handleChangeData}>
                        <p className='mb-5 text-[32px] font-medium'>Data Pasien</p>
                        <div className="flex justify-center relative z-0 w-full mb-5 group">
                            <label className='w-[200px]'  htmlFor="">NIK</label>
                            <input type="text" name="nik" id="nik" className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        </div>
                        <div className="flex justify-center relative z-0 w-full mb-5 group">
                            <label className='w-[200px]' htmlFor="">Nama</label>
                            <input type="text" name="nama" id="nama" className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        </div>
                        <div className="flex justify-center relative w-full mb-5 group">
                            <label className='w-[200px]' htmlFor="">Tanggal Lahir</label>
                            <input type="text" name="tanggalLahir" id="tanggalLahir" className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        </div>
                        <div className="flex items-center relative w-full mb-5">
                            <label className='w-[200px]' htmlFor="">Gender</label>
                            <div className='flex flex-col w-full'>
                                <div class="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox" id="pria" name='gender' />
                                    <p className='ml-2'>Pria</p>
                                </div>
                                <div class="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type='checkbox' id="wanita"  />
                                    <p className='ml-2'>Wanita</p>
                                </div>
                                <hr className='w-full bg-gray-600 h-[1.5px] bg-transparent mt-2' style={{border: "none"}} />
                            </div>
                        </div>
                        <div className="flex justify-center relative w-full mb-5 group">
                            <label className='w-[200px]' htmlFor="">Alamat</label>
                            <input type="text" name="alamat" id="alamat" className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        </div>
                        <button type="submit" className="text-white bg-[#388E3C] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mx-auto block">Ubah</button>
                        </form>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}