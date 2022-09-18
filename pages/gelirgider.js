import prisma from 'lib/prisma'
import {getGelirler, getGiderler} from 'lib/data'
import Gelirler from 'components/Gelirler'
import Giderler from 'components/Giderler'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DavinciHeader from 'components/DavinciHeader'
export default function gelirgider({gelirler,giderler}){
    const router=useRouter();
    const user=router.query;
    const [toogle,setToogle]=useState('GELIR')
    return(
        <div className="mt-0">
            <DavinciHeader/>
            <div className='grid grid-cols-3'>
                <div className='w-full'>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault()
                            router.push({
                            pathname: '/',
                            query: user
                            })
                            return
                        }}
                    >
                        <div className='mx-auto my-2 w-1/2'>
                            <button className='w-full align-content border mt-2 px-auto py-2 font-bold rounded-full text-center hover:bg-black hover:text-white'>
                                Geri
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-full'>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault()
                            setToogle('GELIR')
                            return
                        }}
                    >
                        <div className='mx-auto my-2 w-1/2'>
                            <button className='w-full align-content border mt-2 px-auto py-2 font-bold rounded-full text-center hover:bg-black hover:text-white'>
                                Gelirler Görüntüle
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-full'>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault()
                            setToogle('GIDER')
                            return
                        }}
                    >
                        <div className='mx-auto my-2 w-1/2'>
                            <button className='w-full align-content border mt-2 px-auto py-2 font-bold rounded-full text-center hover:bg-black hover:text-white'>
                                Giderleri Görüntüle
                            </button>
                        </div>
                    </form>
                </div>                
            </div>
            { (toogle==='GELIR') &&
                <>
                    <Gelirler gelirler={gelirler}/>               
                </>
            }
            { (toogle==='GIDER') &&
                <>
                    <Giderler giderler={giderler}/>              
                </>
            } 
        </div>
    )
}

export async function getServerSideProps(context){

    let gelirler=await getGelirler(prisma)
    gelirler=JSON.parse(JSON.stringify(gelirler))
    let giderler=await getGiderler(prisma)
    giderler=JSON.parse(JSON.stringify(giderler))    
    return {
        props: {
            gelirler,
            giderler,
        },
    }


}