import React from 'react'
import ReactDOm from 'react-dom'

const BackdropOverlay = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75'></div>
    )
}

const ModalOverlay = ({onCancel}) => {

    const goPendaftaranPasien = () => {
        window.location.replace('/pendaftaranPasien')
    }

    const cancel = () => {
        window.location.reload()
    }

    return (
        <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Not Defined</h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">Maaf, NIK yang dimasukkan tidak cocok dengan catatan kami. Jika NIK Anda belum terdaftar, silakan daftarkan sekarang.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" onClick={goPendaftaranPasien} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Daftar</button>
                <button type="button" onClick={cancel} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                </div>
            </div>
            </div>
        </div>
    )
}

const portalElement = document.getElementById("modal")

export default function Modals(props) {
  return (
    <>
        {ReactDOm.createPortal(<BackdropOverlay/>, portalElement)}
        {ReactDOm.createPortal(<ModalOverlay>{props}</ModalOverlay> , portalElement)}
    </>

  )
}
