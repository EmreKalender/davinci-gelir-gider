import {useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DavinciHeader from 'components/DavinciHeader';

export default function Home() {
  const router=useRouter();
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState(router.query)
  if(!user.id){
    return(
      <div>
      <DavinciHeader/>
      <form
      onSubmit={async (e) => {
        e.preventDefault()

        if (!username) {
          alert('Kullanıcı Adını Girmediniz')
          return
        }
        if (!password) {
          alert('Sifrenizi Girmediniz')
          return
        }
        const res=await fetch(`/api/signin?username=${username}&password=${password}`)
        const userData=await res.json()
        setUser(userData)
      }}
    >
      
      <div className='flex'>
        <div className='flex-1 px-1 pt-2 mt-2 mr-1 ml-1'>
          <p>Kullanıcı Adı</p>
          <textarea
            className='border p-4 w-1/4 text-lg font-medium bg-transparent outline-none color-primary '
            rows={1}
            cols={10}
            placeholder="kullanıcı adınızı girin"
            name='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className='flex'>
        <div className='flex-1 px-1 pt-2 mt-2 mr-1 ml-1'>
          <p>Şifre</p>
          <textarea
            className='border p-4 w-1/4 text-lg font-medium bg-transparent outline-none color-primary '
            rows={1}
            cols={10}
            placeholder="şifrenizi girin"
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className='flex'>
        <div className='flex-1 mb-5 mt-5'>
          <button className='border float-left px-8 py-2 mt-0 mr-2 font-bold rounded-full'>
            Giriş
          </button>
        </div>
      </div>
    </form>
    </div>
    )
  }

  return (
    <div className='justify-left mx-auto'>
            <DavinciHeader/>
      <div className='flex flex-col text-center ml-5 mt-5 w-1/3 grid grid-cols-2 mx-auto'>
        <h3 className='flex-1 p-3 text-l w-full border rounded-lg bg-black text-white'>
          Kullanıcı: {user.username}
        </h3>
        <h1 className='flex-1 p-3 text-l w-full border rounded-lg bg-black text-white'>
          Yetki: {user.usertype}
        </h1>
      </div>
      <div className='mx-auto mt-5 text-center flex border rounded-lg p-5 w-1/4'>
        <Link
          className='text-center m-auto'
          href={{
            pathname: "/gelirgider",
            query: user, // the data
          }}
        >         
          <a className='text-center mx-auto'>Gelir-Gider Goruntule</a> 
        </Link>
      </div>
      <div className='p-5 mx-auto my-4 flex border rounded-lg p-5 w-1/4'>
        <Link
          className='text-center m-auto'
          href={{
            pathname: "/yenigider",
            query: user, // the data
          }}
        >         
          <a className='text-center m-auto'>Gider Girişi</a> 
        </Link>
      </div>
      <div className='p-5 mx-auto flex border rounded-lg p-5 w-1/4'>
        <Link
          className='text-center m-auto'
          href={{
            pathname: "/yenigelir",
            query: user, // the data
          }}
        >         
          <a className='text-center m-auto'>Gelir Girişi</a> 
        </Link>
      </div>

    </div>
  )
}
