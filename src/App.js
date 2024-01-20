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
import AntrianPoli from './components/AntrianPoli';
import AdminManager from './components/AdminManager';
import EditDataDokter from './components/EditDataDokter';
import FormulirPegawaiBaru from './components/FormulirPegawaiBaru';
import RegistrasiPegawaiBaru from './components/RegistrasiPegawaiBaru';
import DaftarPegawai from './components/DaftarPegawai';
import DataPoli from './components/DataPoli';
import MonitorKegiatan from './components/MonitorKegiatan';
import './App.css';
import RegisterAdmin from './components/RegisterAdmin';
import RegisterStaffPendaftaran from './components/RegistrasiStaffPendaftaran';
import RegistrasiDokter from './components/RegistrasiDokter';





function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registerAdmin' element={<RegisterAdmin />} />
          <Route path='/registerStaffPendaftaran' element={<RegisterStaffPendaftaran />} />
          <Route path='/registrasiDokter' element={<RegistrasiDokter />} />
          <Route path='/login' element={<Login />} />
          <Route path='/searchNik' element={<PendaftaranPasien/>} />
          <Route path='/patientList' element={<PasienForm />} />
          <Route path='/pendaftaranPasien' element={<PasienFormNot/>} />
          <Route path='/pendaftaranPoli' element={<PendaftaranPoli/>} />
          <Route path='/pendaftaranProfile' element={<PendaftaranProfile/>} />
          <Route path='/dokterAntrian' element={<DokterAntrian/>} />
          <Route path='/treatment' element={<TreatmentGejalaDiagnosa/>} />
          <Route path='/profileDoktor' element={<ProfileDoktor/>} />
          <Route path='/antrianPoli' element={<AntrianPoli/>} />
          <Route path='/adminManager' element={<AdminManager/>} />
          <Route path='/updateDataDokter' element={<EditDataDokter/>} />
          <Route path='/tambahFormulirPegawai' element={<FormulirPegawaiBaru/>} />
          <Route path='/registrasiFormulirPegawai' element={<RegistrasiPegawaiBaru/>} />
          <Route path='/daftarPegawai' element={<DaftarPegawai/>} />
          <Route path='/dataPoli' element={<DataPoli/>} />
          <Route path='/monitorKegiatan' element={<MonitorKegiatan/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
