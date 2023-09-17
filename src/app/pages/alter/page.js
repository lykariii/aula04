'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function Alter() {

    const AlterUser = async (e) => {
        e.preventDefault();
          toast.success("Usuario alterado com sucesso");
      }

    return (
        <div>
      <h1>Alteração</h1>
      <form onSubmit={AlterUser}>
      <input placeholder='nome' type='nome'></input>
        <input placeholder='E-mail' type='email'></input>
        <input placeholder='Senha' type='password'></input>
        <button>Alterar</button>
      </form>
      <ToastContainer/>
    </div>
    );
};