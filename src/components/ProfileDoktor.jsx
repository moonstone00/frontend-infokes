import gundar from "../assets/gundar.png"
import Footer from './Footer'

export default function ProfileDoktor() {

    return (
        <>
            <section>
                <div className='flex justify-center items-center min-h-screen flex-col p-12'>
                    <img  src={gundar} className='w-56 mb-8'/>
                    <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Profile</h1>

                    <div className='w-[511px] px-16 py-11 mt-[40px] shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
                        <div className='font-medium mb-8'>
                            <div className='text-[32px] mb-8'>Faizal Maulana</div>
                            <div>Dokter</div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Username</div>
                                <div>faizalmaullana</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>NIK</div>
                                <div>32070909097389311</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Nomor Induk</div>
                                <div>8467398649283</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Spesialis</div>
                                <div>Penyakit Dalam</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Poli</div>
                                <div>Penyakit Dalam</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Tanggal Lahir</div>
                                <div>12/09/2002</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Gender</div>
                                <div>Laki - Laki</div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-1/2 font-medium'>Alamat</div>
                                <div>Bekasi</div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>

        
    )
}
