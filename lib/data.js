export const getUser=async(prisma,username,password)=>{
    const user=await prisma.User.findUnique({
        where: {
            id: username,
        },
    })
    if(password===user.password) return user
    return null
}

export const aylar=[
    {id:1,ay:'Ocak',unavailable: true},
    {id:2,ay:'Şubat',unavailable: false},
    {id:3,ay:'Mart',unavailable: false},
    {id:4,ay:'Nisan',unavailable: false},
    {id:5,ay:'Mayıs',unavailable: false},
    {id:6,ay:'Haziran',unavailable: false},
    {id:7,ay:'Temmuz',unavailable: false},
    {id:8,ay:'Agustos',unavailable: false},
    {id:9,ay:'Eylul',unavailable: false},
    {id:10,ay:'Ekim',unavailable: false},
    {id:11,ay:'Kasım',unavailable: false},
    {id:12,ay:'Aralık',unavailable: false},
]

export const yillar=[
    {id:2022,yil:'2022',unavailable: true},
    {id:2023,yil:'2023',unavailable: false},
    {id:2024,yil:'2024',unavailable: false},
    {id:2025,yil:'2025',unavailable: false},
]

export const subeler=[
    {id:1,sube:'BAHÇELİ',unavailable: true},
    {id:2,sube:'NEORAMA',unavailable: false},
    {id:3,sube:'GENEL',unavailable: false},
]

export const gelirtipleri=[
    {id:1,gelirtipi:'KUTUPHANE',unavailable: true},
    {id:2,gelirtipi:'OYUN SATIŞ',unavailable: false},
    {id:3,gelirtipi:'İÇECEK',unavailable: false},
    {id:4,gelirtipi:'YİYECEK',unavailable: false},
]

export const gidertipleri=[
    {id:1,gidertipi:'KUTUPHANE',unavailable: true},
    {id:2,gidertipi:'OYUN SATIŞ',unavailable: false},
    {id:3,gidertipi:'İÇECEK',unavailable: false},
    {id:4,gidertipi:'YİYECEK',unavailable: false},
    {id:5,gidertipi:'GENEL',unavailable: false},
]

export const gidertipidetaylari=[
    {id:1,gidertipidetayi:'PERSONEL',unavailable: true},
    {id:2,gidertipidetayi:'SARF MALZEME',unavailable: false},
    {id:3,gidertipidetayi:'DEMIRBAS',unavailable: false},
    {id:4,gidertipidetayi:'KUTUPHANE OYUNU',unavailable: false},
    {id:5,gidertipidetayi:'BAKIM',unavailable: false},
    {id:6,gidertipidetayi:'KIRA',unavailable: false},
    {id:7,gidertipidetayi:'FATURA AIDAT',unavailable: false},
    {id:8,gidertipidetayi:'REKLAM',unavailable: false},       
    {id:9,gidertipidetayi:'VERGI-MUHASEBE',unavailable: false},
    {id:10,gidertipidetayi:'SGK',unavailable: true},
    {id:11,gidertipidetayi:'PERSONEL YEMEK',unavailable: false},   
    {id:12,gidertipidetayi:'DİĞER',unavailable: false},                     
]

export const getGelirler= async (prisma)=>{
    const gelirler=await prisma.Gelir.findMany({
        where:{},
        orderBy:[{
            id:'desc',
        },],
        include:{
            author:true,
        },
    })
    return gelirler
}


export const getGiderler= async (prisma)=>{
    const gelirler=await prisma.Gider.findMany({
        where:{},
        orderBy:[{
            id:'desc',
        },],
        include:{
            author:true,
        },
    })
    return gelirler
}