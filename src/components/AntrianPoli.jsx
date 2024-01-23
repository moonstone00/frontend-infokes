import { useEffect, useState } from 'react';
import { Container, Center, Spinner } from '@chakra-ui/react';
import imageGundar from '../assets/gundar.png';
import Footer from './FooterDokter';
import { axios } from '../utils/axios/config.js';

export default function AntrianPoli() {
    const [isLoading, setIsLoading] = useState(true);
    const [tanggal, setDate] = useState('');
    const [dataDokter, setDataDokter] = useState([]);
    const [belumDiperiksa, setBelumDiperiksa] = useState([]);
    const [sudahDiperiksa, setSudahDiperiksa] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);

        const id = localStorage.getItem('id');

        axios.get(`/profile/${id}`).then((result) => {
            setDataDokter(result.data);
        });

        axios.get(`/antrianPoli/${id}`).then((result) => {
            console.log(result.data.belum_selesai_diperiksa);
            console.log(result.data.selesai_diperiksa);
            setBelumDiperiksa(result.data.belum_selesai_diperiksa || []);
            setSudahDiperiksa(result.data.selesai_diperiksa || []);
        });

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${currentDate.getFullYear()}`;
        console.log(formattedDate);
        setDate(formattedDate);
    }, []);

    // const handleStatus = () => {
    //     window.location.replace('/treatment');
    // };

    const pushToTreatment = (data) => {
        window.location.replace(`/treatment/${data}`)
    }

    return (
        <>
            {isLoading ? (
                <Container>
                    <Center h='100vh'>
                        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
                    </Center>
                </Container>
            ) : null}
            <section className='w-full min-h-screen bg-[#fafff6] p-12'>
                <div className='w-full flex flex-col items-center justify-center mb-1'>
                    <img src={imageGundar} alt='gundar' className='w-56 mb-[28px]' />
                    <h1 className='text-[#388E3C] text-[48px] font-semibold'>Antrian Poli {dataDokter.poli}</h1>
                    <p className='mb-[38px] font-semibold'>{tanggal}</p>
                    <div className='flex flex-col items-center mb-12 font-semibold'>
                        <h3 className='text-[36px]'>Dr. {dataDokter.nama}</h3>
                        <p>{dataDokter.nip}</p>
                    </div>
                </div>

                <div>
                    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                        <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs uppercase bg-[#388E3C] text-white'>
                                <tr>
                                    <th scope='col' className='py-3 px-6'>
                                        Nama Pasien
                                    </th>
                                    <th scope='col' className='py-3 px-6'>
                                        NIK
                                    </th>
                                    <th scope='col' className='py-3 px-6'>
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {belumDiperiksa.map((belum) => (
                                    <tr key={belum.id}>
                                        <td className='py-4 px-6'>{belum.nama}</td>
                                        <td className='py-4 px-6'>{belum.nik}</td>
                                        <td className='text-red-600' onClick={() => pushToTreatment(belum.id)}>Dalam Antrian</td>
                                    </tr>
                                ))}

                                {sudahDiperiksa.map((sudah) => (
                                    <tr key={sudah.id}>
                                        <td className='py-4 px-6'>{sudah.nama}</td>
                                        <td className='py-4 px-6'>{sudah.nik}</td>
                                        <td>Antrian Selesai</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
