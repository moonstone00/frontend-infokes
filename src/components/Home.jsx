import images from "../exports/images"
import imageHome from "../assets/imageHome.jpg"
import React, { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const role = localStorage.getItem("role");
  
    if (role !== null) {
      if (role === "dokter") {
        window.location.replace('dokterAntrian');
      } else if (role === "admin") {
        window.location.replace('monitorKegiatan');
      } else if (role === "staffPendaftaran") {
        window.location.replace('searchNik');
      } else {
        window.location.replace('kickPage');
      }
    }
  }, []);

  const clickLogin = () => {
    window.location.replace("/login")
  }

  const names = ["DEBY MAULIDA", "FAIZAL MAULANA", "MUHAMAD ALFIAN RIZKI RAMADHAN", "MUHAMMAD GHIFANI IKHSAN", "SETIYOKO ADI PUTRA", "STEFANUS ECLESIO ANDERSEN NIMA"]
  const NPM = ["50422397", "50422497", "50422934", "51422061", "51422527", "51422548"]

    return (
      <main  className="min-h-screen flex justify-around mx-8">
        <section className="grid grid-cols-1 content-center w-1/2">

          <div className="mb-6">
            <h2 className="text-5xl font-bold text-[#388E3C] mb-5">Gunadarma Hospital</h2>
            <p><span className="font-medium">Sistem Informasi Manajemen Rumah Sakit</span><br/>Disusun oleh Kelompok 3 - 2IA04<br/>PTA 2023/2023</p>
          </div>

          <div className="grid grid-cols-3 content-center">
            {
              images.map((image, index) => (
                <div className="w-44 h-52 bg-white border-b-4 shadow dark:border-[#388E3C] my-2">
                    <a href="#">
                        <img src={image} alt="" />
                    </a>
                    <div className="p-5 text-[12px]">
                      <p className="text-[#388E3C] font-semibold">{names[index]}</p>
                      <p>{NPM[index]}</p>
                    </div>
                </div>

              ))
            }
          </div>
        </section>

        <aside className="grid grid-cols-1 gap-[30px] content-center">
          <div>
            <img src={imageHome} style={{borderTopRightRadius: "50%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%"}} className="w-[522px] h-[522px]"/>
          </div>
          <div className="block mx-auto">
            <button className="bg-[#388E3C] hover:bg-[#388E3C] text-white font-bold py-3 px-8 rounded-lg" onClick={() => clickLogin()}>
              Masuk
            </button>
          </div>
        </aside>
      </main>
        
    )
}
