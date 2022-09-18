import { useRouter } from 'next/router'
import { useState } from 'react';
import {Listbox} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/20/solid'
import DavinciHeader from 'components/DavinciHeader';

import {aylar,yillar,subeler,gidertipleri,gidertipidetaylari} from 'lib/data'

export default function YeniGider(){

    const router=useRouter();
    const user= router.query;
    const [selectedMonth,setMonth]=useState(aylar[0])
    const [selectedYear,setYear]=useState(yillar[0])
    const [selectedBranch,setBranch]=useState(subeler[0])
    const [selectedExpenseType,setExpenseType]=useState(gidertipleri[0])
    const [selectedExpenseSubType,setExpenseSubType]=useState(gidertipidetaylari[0])
    const [ExtraInfo,setExtraInfo]=useState('')
        
    const [amount,setAmount]=useState(0.0)
    return(
        <div className='w-full'>
        <DavinciHeader/>    
        <div className='w-1/6'>
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
                <div className='mx-auto mb-2 w-1/2'>
                    <button className='w-full border mt-2 px-auto py-2 font-bold rounded-full text-center hover:bg-black hover:text-white'>
                        Geri
                    </button>
                </div>
            </form>
        </div>
        <div className='grid grid-cols-1 grid-row-5 w-full'>
            <div className='mx-auto my-2 w-1/4'>
                <p className='text-center my-2'>Ay Girişi</p>
                <Listbox value={selectedMonth} onChange={setMonth} >
                    <Listbox.Button className='bg-blue-500 text-white w-full'>{selectedMonth.ay}</Listbox.Button>
                    <Listbox.Options className='border'>
                        {aylar.map((ay) => (
                            <Listbox.Option
                                key={ay.id}
                                value={ay}
                                className='ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black w-full text-center'
                            >
                                {ay.ay}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
            <div className='mx-auto my-2 w-1/4'>
                <p className='text-center my-2'>Yıl Girişi</p>
                <Listbox value={selectedYear} onChange={setYear} >
                    <Listbox.Button className='bg-blue-500 text-white w-full'>{selectedYear.yil}</Listbox.Button>
                    <Listbox.Options className='border'>
                        {yillar.map((yil) => (
                            <Listbox.Option
                                key={yil.id}
                                value={yil}
                                className='ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black w-full text-center'
                            >
                                {yil.yil}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
            <div className='mx-auto my-2 w-1/4'>
                <p className='text-center my-2'>Şube Girişi</p>
                <Listbox value={selectedBranch} onChange={setBranch} >
                    <Listbox.Button className='bg-blue-500 text-white w-full'>{selectedBranch.sube}</Listbox.Button>
                    <Listbox.Options className='border'>
                        {subeler.map((sube) => (
                            <Listbox.Option
                                key={sube.id}
                                value={sube}
                                className='ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black w-full text-center'
                            >
                                {sube.sube}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
            <div className='mx-auto my-2 w-1/4'>
                <p className='text-center my-2'>Gider Tipi Girişi</p>
                <Listbox value={selectedExpenseType} onChange={setExpenseType} >
                    <Listbox.Button className='bg-blue-500 text-white w-full'>{selectedExpenseType.gidertipi}</Listbox.Button>
                    <Listbox.Options className='border'>
                        {gidertipleri.map((gidertipi) => (
                            <Listbox.Option
                                key={gidertipi.id}
                                value={gidertipi}
                                className='ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black w-full text-center'
                            >
                                {gidertipi.gidertipi}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
            <div className='mx-auto my-2 w-1/4'>
                <p className='text-center my-2'>Gider Alt Tipi Girişi</p>
                <Listbox value={selectedExpenseSubType} onChange={setExpenseSubType} >
                    <Listbox.Button className='bg-blue-500 text-white w-full'>{selectedExpenseSubType.gidertipidetayi}</Listbox.Button>
                    <Listbox.Options className='border'>
                        {gidertipidetaylari.map((gidertipidetayi) => (
                            <Listbox.Option
                                key={gidertipidetayi.id}
                                value={gidertipidetayi}
                                className='ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black w-full text-center'
                            >
                                {gidertipidetayi.gidertipidetayi}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
            <div className='content-center w-full'>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault()

                        if (isNaN(amount)) {
                        alert('Hatalı Giriş')
                        return
                        }
                        if (amount==0) {
                        alert('Sıfır Girişi')
                        return
                        }
                        await fetch('/api/yenigider',{
                            body: JSON.stringify({
                                selectedMonth,
                                selectedYear,
                                selectedBranch,
                                selectedExpenseType,
                                selectedExpenseSubType,
                                ExtraInfo,
                                user,
                                amount,
                            }),
                            headers: {'Content-Type':'application/json'},
                            method: 'POST',
                        })
                        router.push({
                            pathname: '/gelirgider',
                            query: user
                        })
                        return

                    }}
                >
                    <div className=''>
                            <div className='mx-auto my-2 w-1/4'>
                                <p className='text-center my-2'>Miktar (TL)</p>
                                <textarea
                                    className='border p-2 text-lg font-medium bg-transparent outline-none color-primary w-full text-center'
                                    rows={1}
                                    cols={20}
                                    placeholder="miktar giriniz"
                                    name='amount'
                                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                                />
                            </div>
                            <div className='mx-auto my-2 w-1/2'>
                                <p className='text-center my-2'>Açıklama</p>
                                <textarea
                                    className='border p-4 text-lg font-medium bg-transparent outline-none color-primary w-full text-center'
                                    rows={1}
                                    cols={20}
                                    placeholder="Kısa Açıklama"
                                    name='extraInfo'
                                    onChange={(e) => setExtraInfo(e.target.value)}
                                />
                                <button className='w-full align-content border mt-2 px-8 py-2 font-bold rounded-full text-center hover:bg-black hover:text-white'>
                                     Gider Girişi Yap
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )

}