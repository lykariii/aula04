
'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default async function Register() {

    const RegisterUser = async (e) => {
        e.preventDefault();
          toast.success("Usuario cadastrado com sucesso");
      }

    return (
        <div>
      <h1>Registro</h1>
      <form onSubmit={RegisterUser}>
      <input placeholder='nome' type='nome'></input>
        <input placeholder='E-mail' type='email'></input>
        <input placeholder='Senha' type='password'></input>
        <button>Registrar</button>
      </form>
      <ToastContainer/>
    </div>
    );
};