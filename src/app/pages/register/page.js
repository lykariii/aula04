'use client'

import './page.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Menu from "@/app/componentes/Menu";



export default function Register() {

    const RegisterUser = (e) => {
        e.preventDefault();
          toast.success("Usuario cadastrado com sucesso");
      }

    return (
        <div>
            <Menu/>
      <h1>Register</h1>
      <div className='container'>
      <div className='card'>
      <form onSubmit={RegisterUser}>
      <input placeholder='Name' type='nome'></input><br/>
        <input placeholder='E-mail' type='email'></input><br/>
        <input placeholder='Password' type='password'></input><br/>
        <button>Register</button>
      </form>
      </div></div>
      <ToastContainer/>
    </div>
    );
};