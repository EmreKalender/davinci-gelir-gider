import {useState} from 'react'
import Gelir from 'components/Gelir'
export default function ({gelirler}){
    if(!gelirler) return null

    return(
        <>
            <div className='mb-4 grid grid-cols-7 border text-center'>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                Gelir ID
                </p>
                </div>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                Gelir Ayı/Yılı
                </p>
                </div>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                Şube
                </p>
                </div>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                KATEGORİ
                </p>  
                </div>
                <div>      
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                MİKTAR
                </p>
                </div>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                GİRİŞ YAPAN
                </p>
                </div>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                DÜZENLE
                </p>
                </div>
            </div>
            {
                gelirler.map(
                    (gelir,index)=>{
                        return <Gelir key={index} gelir={gelir}/>
                    }
                )
            }
        </>
    )

}