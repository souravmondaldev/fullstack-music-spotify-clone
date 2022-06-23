import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default validateRoute(async (req:NextApiRequest, res: NextApiResponse, user) =>{
    const playlist = await prisma.playlist.findMany({
        where:{
            userId : user.id,
        },
        orderBy :{
            name : "asc"
        }
    })
    res.json(playlist)
})