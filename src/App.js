import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PasienForm from './components/PasienForm';
import DokterAntrian from './components/DokterAntrian';
import PendaftaranPasien from './components/PendaftaranPasien';
import PendaftaranPoli from './components/PendaftaranPoli';
import PendaftaranProfile from './components/PendaftaranProfile';
import PasienFormNot from './components/PasienFormNot';
import TreatmentGejalaDiagnosa from './components/TreatmentGejalaDiagnosa';
import ProfileDoktor from './components/ProfileDoktor';
import ProfileAdmin from './components/ProfileAdmin';
import ProfileStaff from './components/ProfileStaff';
import AntrianPoli from './components/AntrianPoli';
import AdminManager from './components/AdminManager';
import EditDataDokter from './components/EditDataDokter';
import FormulirPegawaiBaru from './components/FormulirPegawaiBaru';
import RegistrasiPegawaiBaru from './components/RegistrasiPegawaiBaru';
import DaftarPegawai from './components/DaftarPegawai';
import DataPoli from './components/DataPoli';
import MonitorKegiatan from './components/MonitorKegiatan';
import RegisterAdmin from './components/RegisterAdmin';
import RegisterStaffPendaftaran from './components/RegistrasiStaffPendaftaran';
import RegistrasiDokter from './components/RegistrasiDokter';
import RiwayatKunjungan from './components/RiwayatKunjungan';
import RiwayatKunjunganAll from './components/RiwayatKunjunganAll';
import RiwayatKunjunganAllStaff from './components/RiwayatKunjunganAllStaff';
import './App.css';

// import { useEffect, useState } from 'react';
// import PageNotFound from './utils/PageNotFound';


function App() {

  // const [isLoginAdmin, setIsLoginAdmin] = useState(false)
  // const [isLoginDokter, setIsLoginDokter] = useState(false)
  // const [isLoginStaff, setIsLoginStaff] = useState(false)

  // useEffect(()  => {
  //   const role = localStorage.getItem('role')

  //   if (role === 'admin') {
  //     setIsLoginAdmin(true);
  //   }
  //   if (role === "staffPendaftaran") {
  //     setIsLoginStaff(true);
  //   }
  //   if (role === "dokter") {
  //     setIsLoginDokter(true);
  //   }
  // }, []); 

  return (
    <>
    {/* test */}
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registerAdmin' element={<RegisterAdmin />} />
          <Route path='/registerStaffPendaftaran' element={<RegisterStaffPendaftaran />} />
          <Route path='/registrasiDokter' element={<RegistrasiDokter />} />
          <Route path='/login' element={<Login />} />
          <Route path='/searchNik' element={<PendaftaranPasien/>} />
          <Route path='/patientList/:id' element={<PasienForm />} />
          <Route path='/pendaftaranPasien/:id' element={<PasienFormNot/>} />
          <Route path='/pendaftaranPoli/:id' element={<PendaftaranPoli/>} />
          <Route path='/pendaftaranProfile/:id' element={<PendaftaranProfile/>} />
          <Route path='/dokterAntrian' element={<DokterAntrian/>} />
          <Route path='/riwayatKunjungan' element={<RiwayatKunjungan/>} />
          <Route path='/riwayatKunjunganAll' element={<RiwayatKunjunganAll/>} />
          <Route path='/riwayatKunjunganAllStaff' element={<RiwayatKunjunganAllStaff/>} />
          <Route path='/treatment/:id' element={<TreatmentGejalaDiagnosa/>} />
          <Route path='/profileDoktor' element={<ProfileDoktor/>} />
          <Route path='/profileAdmin' element={<ProfileAdmin/>} />
          <Route path='/profileStaff' element={<ProfileStaff/>} />
          <Route path='/antrianPoli' element={<AntrianPoli/>} />
          <Route path='/adminManager' element={<AdminManager/>} />
          <Route path='/updateDataDokter' element={<EditDataDokter/>} />
          <Route path='/tambahFormulirPegawai' element={<FormulirPegawaiBaru/>} />
          <Route path='/registrasiFormulirPegawai' element={<RegistrasiPegawaiBaru/>} />
          <Route path='/daftarPegawai' element={<DaftarPegawai/>} />
          <Route path='/dataPoli' element={<DataPoli/>} />
          <Route path='/monitorKegiatan' element={<MonitorKegiatan/>} />
          <Route path='*' element={<Login/>} />
        </Routes>
      </Router>

      {/* <Router>

          {
            isLoginAdmin ? 
            <Routes>
              <Route path='/monitorKegiatan' element={<MonitorKegiatan/>} />
              <Route path='/daftarPegawai' element={<DaftarPegawai/>} />
              <Route path='/registrasiFormulirPegawai' element={<RegistrasiPegawaiBaru/>} />
              <Route path='/tambahFormulirPegawai' element={<FormulirPegawaiBaru/>} />
              <Route path='/dataPoli' element={<DataPoli/>} />
              <Route path='/adminManager' element={<AdminManager/>} />
              <Route path='/updateDataDokter' element={<EditDataDokter/>} />
              <Route path='*' element={<PageNotFound/>} />
            </Routes>
            :
            <Routes>
              <Route path='/registerAdmin' element={<RegisterAdmin />} />
            </Routes>
          }

          {
            isLoginDokter ?
            <Routes>
              <Route path='/antrianPoli' element={<AntrianPoli/>} />
              <Route path='/dokterAntrian' element={<DokterAntrian/>} />
              <Route path='/treatment' element={<TreatmentGejalaDiagnosa/>} />
              <Route path='/profileDoktor' element={<ProfileDoktor/>} />
              <Route path='*' element={<PageNotFound/>} />
            </Routes>
            :
            <Routes>
              <Route path='/registrasiDokter' element={<RegistrasiDokter />} />
            </Routes>
          }

          {
            isLoginStaff ?
            <Routes>

              <Route path='/searchNik' element={<PendaftaranPasien/>} />
              <Route path='/patientList/:id' element={<PasienForm />} />
              <Route path='/pendaftaranProfile/:id' element={<PendaftaranProfile/>} />
              <Route path='/pendaftaranPoli' element={<PendaftaranPoli/>} />
              <Route path='/pendaftaranPasien' element={<PasienFormNot/>} />
              <Route path='*' element={<PageNotFound/>} />
            </Routes>
            :
            <Routes>
              <Route path='/registerStaffPendaftaran' element={<RegisterStaffPendaftaran />} />
            </Routes>
          }
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
      </Router>   */}
    </>
  );
}

export default App;
