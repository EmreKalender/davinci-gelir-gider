import prisma from 'lib/prisma'
import {getUser} from 'lib/data.js'

export default async function handler(req,res){
    if(req.method!=='GET') return res.status(501).end()
    const user=await getUser(prisma,req.query.username,req.query.password)
    res.json(user)
}