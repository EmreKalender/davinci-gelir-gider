import {useState} from 'react'
import Gider from 'components/Gider'
export default function ({giderler}){
    if(!giderler) return null

    return(
        <>
            <div className='mb-4 grid grid-cols-9 border text-center'>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                Gider ID
                </p>
                </div>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                Gider Ayı/Yılı
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
                ALT KATEGORİ
                </p>  
                </div>
                <div>
                <p className='flex-shrink pl-1 pr-2 text-base font-bold color-primary width-auto'>
                AÇIKLAMA
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
                giderler.map(
                    (gider,index)=>{
                        return <Gider key={index} gider={gider}/>
                    }
                )
            }
        </>
    )

}