import { FaAngleLeft, FaAngleRight }  from "react-icons/fa"
import { Container, Center, Spinner } from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'
import imageGundar from '../assets/gundar.png'
import Footer from './FooterStaff'
import { axios } from '../utils/axios/config.js'
import { useParams } from 'react-router-dom';
export default function PasienForm() {

    const [isLoading, setIsLoading] = useState(true)
    const [pasienList, setPasienList] = useState([])
    const [idPasien, setIdPasien] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
        axios.get(`/pasien/${id}`).then((result) => {
          // setPasienList(result.data.pasien);
          console.log('ini adalah result', result);
          setIdPasien(result.data.id);
        }).catch((error) => {
          console.error('Error fetching data:', error);
        });
      }, 2000);
      // You need to use the `id` from the params in the API request
    }, [id]);
    
    const handleRegister = () => {
      window.location.replace(`/pendaftaranPoli/${idPasien}`)
    }
    

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5
    const lastLength = currentPage * recordsPerPage
    const firstIndex = lastLength - recordsPerPage
    let arrayList = []

    // for(let key in pasienList) {
    //   arrayList.push(pasienList[key])
    //   console.log(arrayList.push(key))
    // }

    for(let key in pasienList) {
      arrayList.push(pasienList[key])
      console.log("ini adalaah arraylist", arrayList)
    }

    const records = arrayList.slice(firstIndex, lastLength)
    const npage = Math.ceil(arrayList.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

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
              <img src={imageGundar} className='w-56' />
              <h1 className='text-[#388E3C] text-[48px] font-semibold mb-2'>Data Pasien</h1>
              <div className='flex flex-col items-center'>
                <h3 className='mb-2 font-semibold text-[36px]'>Dipa Nusantara</h3>
                <p>25/12/1998</p>
              </div>
              <button type="submit" className="text-white bg-[#388E3C] focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-11 py-4 text-center mx-auto block" onClick={handleRegister} >Daftar</button>
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
                      {
                        records.map((pasien, index) => {
                          console.log(index)
                          // const {tanggal, dokter, poli, diagnosa} = pasien
                          const {nip, status, createdAt} = pasien
                          let isEven = index % 2 === 0

                          // jadi seoalah olah index pada database tidak ada yang ganjil tapi selalu genap
                          return (
                            <tr className={isEven ? "bg-white text-black font-semibold" : "bg-[#dedede] text-black font-semibold"} key={index} >
                              <td className="py-4 px-6">{index + 1}</td>
                              <td className="py-4 px-6">{nip}</td>
                              <td className="py-4 px-6">{status}</td>
                              <td className="py-4 px-6">{createdAt}</td>
                            </tr>
                          )
                        })
                      }
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
