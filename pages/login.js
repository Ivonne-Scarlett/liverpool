import React,{ useState } from "react";
import { StyleForm } from "../../styles/form";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Notification from "../../components/Notification";



export default function Login() {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { push } = useRouter();

  const changeUser = (e) => {
    setCredentials({
      ...Credentials,
      [e.target.name]: e.target.value,
    })
  }

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password
      );
      push("/");
    } catch ({message}) {
      if (message === "Firebase: Error (auth/wrong-password).") {
        showMessage("Contraseña incorrecta")
      }
    }
  };

  return (
    <>      
      <div className="bg-pinkLiverpool">
        <div className="flex flex-row justify-between items-center mx-4">
          <div>
            <img src='/icon/logoLiverp.jpg' alt='logotipo' className='h-[35px] sm:h-[40px] cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-4 md:mt-8'>
        <form>
          <div className='flex flex-col'>
            <h2 className='font-bold text-center my-4 md:my-12 text-xl md:text-4xl'>
              INICIAR SESIÓN
            </h2>
            <input
              placeholder="   Nombre"
              name='user'
              type='text'
              className='h-8 border-2 border-gray-400 w-full my-4'
              onChange={changeUser}
            />
            <input
              placeholder="   Contraseña"
              name='password'
              type='password'
              className='h-8 border-2 border-gray-400 w-full my-4'
              onChange={changeUser}
            />
            <button
              className='h-8 bg-pinkLiverpool text-white w-full my-4'
              onClick={loginUser}
            >
              Entrar
            </button>
          </div>
        </form>

      </div>
    </>
  )
}
