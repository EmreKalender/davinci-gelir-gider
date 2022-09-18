import prisma from 'lib/prisma'

export default async function handler(req,res){
    if(req.method!='POST') return res.status(501).end()
    
    if(!req.body.user) return res.status(401).json({message: 'Not logged in'})
    const user=req.body.user
    if(!user) return res.status(401).json({message: 'User not found'})
    if(req.method==='POST'){
        if(!req.body.selectedMonth) return res.status(400).json({message:'Ay girilmedi'})
        if(!req.body.selectedYear) return res.status(400).json({message:'Yil girilmedi'})
        if(!req.body.selectedBranch) return res.status(400).json({message:'Sube girilmedi'})
        if(!req.body.selectedExpenseType) return res.status(400).json({message:'Gider tipi girilmedi'})
        if(!req.body.selectedExpenseSubType) return res.status(400).json({message:'Gider Alt tipi girilmedi'})      
        if(!req.body.amount) return res.status(400).json({message:'miktar girilmedi'})
        console.log(req.body)
        await prisma.Gider.create({
            data:{
                ay: req.body.selectedMonth.id,
                yil: req.body.selectedYear.id,
                sube: req.body.selectedBranch.sube,
                kategori: req.body.selectedExpenseType.gidertipi,
                altkategori:req.body.selectedExpenseSubType.gidertipidetayi,
                aciklama:req.body.ExtraInfo,
                miktar: req.body.amount,
                author:{
                    connect: {id:user.id},
                },
            },
        })
        res.status(200).end()   
    }
}