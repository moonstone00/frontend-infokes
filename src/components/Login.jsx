import React, { useEffect, useState } from 'react'
import { axios } from "../utils/axios/config"
import gundar from "../assets/gundar.png"
import Footer from './Footer'

export default function Login() {
  const [nip, setNip] = useState("")
  const [password, setPassword] = useState("")

  const handleNip = (inputNip) => {
    setNip(inputNip)
  }

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword)
  }

  const userLogin = (event) => {
    event.preventDefault()
    const requestingData = {
      nip: nip,
      password: password,
    }
    // axios({
    //   method: "POST",
    //   url: `${axios}/login`,
    //   data: requestingData
    // }).then((result) => {
    //   console.log('ini data dari get users', result)
    //   // localStorage.setItem("tanggalLahir", result.data.nip)
    //   // window.location.replace('/searchNik')
    // })

    axios.post("/login", requestingData).then((result) => {
      console.log(result);
      const data = result.data;
      localStorage.setItem("id", data.id);
      localStorage.setItem("nip", data.nip);
      localStorage.setItem("role", data.role);
      window.location.reload();
    })
  }

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
  

  return (
    <div>
      <div className='flex justify-center items-center min-h-screen flex-col'>
          <img src={gundar} alt="gundar" className='w-56 mb-11' />

          <div className='justify-center items-cente w-[511px] h-[400px] px-11 shadow-[0_3px_5px_5px_rgba(0,0,0,0.2)] '>
              <form onSubmit={userLogin} className="max-w-md mx-auto translate[-50%] top-[20%] relative">
              <p className='mb-5 text-[32px] font-medium'>Login</p>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(event) => handleNip(event.target.value)} required />
                  <label for="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">nip</label>
              </div>
              <div className="relative z-0 w-full mb-8 group">
                  <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(event) => handlePassword(event.target.value)}  required />
                  <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              
              <button type="submit" className="text-white bg-[#388E3C] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mx-auto block" >Masuk</button>
              </form>
          </div>
      </div>
      <Footer/>
    </div>

    
  )
}
