import {Request, Response} from "express";
import {pool} from "../database";
import {QueryResult} from "pg";


export const getUsers = async (req: Request, res: Response)=>{
    const result:QueryResult  = await pool.query("SELECT * FROM public.\"User\"");
    console.log(result.rows)
    res.status(200).json(result.rows)
}


export const getBoughtProductById = async (req: Request, res: Response)=>{
    let user_id = req.params.id;
    const result:QueryResult  = await pool.query(`
    select public."Product".id, public."Product".name, public."Product".price from public."Product" 
    inner join public."Product_trasaction"  on public."Product_trasaction".product_id = public."Product".id
    where public."Product_trasaction".user_id = $1
    `, [user_id]);
    console.log(result.rows)
    res.status(200).json(result.rows)
}
export const buyProduct = async (req: Request, res: Response)=>{
    let {id,user_id,product_id, pay, status} = req.body;
    console.log(req.body)
    await pool.query('begin;')

    try {
        await pool.query(`
    
            insert into public."Product_trasaction" (id, user_id, product_id, pay, status)
            values ($1,$2,$3,$4,$5);
    
    `, [id,user_id, product_id, pay, status]);
        await pool.query('commit;')
    }catch (e: any){
        await pool.query('rollback;')
        res.status(200).json({error: e.message})
    }


    res.status(200).json({success:true})
}
