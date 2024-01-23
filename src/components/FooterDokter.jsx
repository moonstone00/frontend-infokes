// ini footer untuk landing
import React, { useEffect, useState } from 'react'

export default function Footer() {

    useEffect(() => {
        const role = localStorage.getItem("role");

        if (role !== "dokter") {
            if (role === "admin") {
                window.location.replace('/monitorKegiatan');
            } else if (role === "staffPendaftaran") {
                window.location.replace('/searchNik');
            } else {
                window.location.replace('/');
            }
        }
    }, []);

    const changeProfile = () =>  {
        window.location.replace("/profileDoktor");
    }

    const pushToAntrian = () =>  {
        window.location.replace("/antrianPoli");
    }

    const pushToRiwayat = () =>  {
        window.location.replace("/riwayatKunjungan");
    }

    const logOut = () =>  {
        localStorage.removeItem("id");
        localStorage.removeItem("nip");
        localStorage.removeItem("role");
        window.location.reload();
    }

    return (
        <footer className="bg-[#bedcbc] shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className='text-[#388E3C] font-bold text-[40px] mb-[11px]'>Gunadarma Hospital</p>
                        <p className='text-black'><span className='font-medium'>Sistem Informasi Manajemen Rumah Sakit</span><br />Disusun oleh Kelompok 3 - 2IA04<br />PTA 2023/2024</p>

                    </div>
                    <div className="items-center text-sm text-black">
                        <div>
                            <p onClick={changeProfile} >Profile</p>
                        </div>
                        <div>
                            <p onClick={pushToRiwayat}>Riwayat Kunjungan</p>
                        </div>
                        <div className='my-4'>
                            <p onClick={logOut} >logOut</p>
                        </div>
                        <button onClick={pushToAntrian} type="submit" className="text-white bg-[#388E3C] focus:outline-none font-medium rounded-lg text-sm w-[302px] sm:w-auto px-8 py-2.5 text-center mx-auto block">Antrian</button>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
