'use client';

import {Bounce, toast, ToastContainer} from 'react-toastify';
import {useEffect} from "react";

export default function Toaster(props: { message: string }) {
  useEffect(() => {
    setTimeout(() => {
      toast.success(props.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }, 250);
  }, [props.message]);

  return (
    <ToastContainer/>
  )
}
