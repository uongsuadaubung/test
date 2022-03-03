import {Request, Response} from "express";
import {pool} from "../database";
import {QueryResult} from "pg";

export const getProducts = async (req: Request, res: Response)=>{
    const result:QueryResult  = await pool.query("SELECT * FROM public.\"Product\"");
    console.log(result.rows)
    res.status(200).json(result.rows)
}
export const getProductById = async (req: Request, res: Response)=>{
    let id = req.params.id;
    const result:QueryResult  = await pool.query("SELECT * FROM public.\"Product\" where id="+id);
    console.log(result.rows)
    res.status(200).json(result.rows)
}

export const updateProductById = async (req: Request, res: Response)=>{
    let id = req.params.id;
    let {name, price} = req.body;

    await pool.query("update public.\"Product\" set name = $1, price = $2 where id= $3",[name, price, id]);
    res.status(200).json('update success')
}

export const deleteProduct = async (req: Request, res: Response)=>{
    let id = req.params.id;
    await pool.query("DELETE FROM public.\"Product\" where id=$1",[id]);
    res.status(200).json('Delete successfully');
}
