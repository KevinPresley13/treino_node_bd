import { Request, Response } from 'express';
import {User} from '../models/User'
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
    let users = await User.findAll();

    //criando usuario com build+save
    let newUser = User.build({
        name: 'Luan'
    });
    await newUser.save();
    //criando usuario com o CREATE
    /*let newuser = await User.create({
        name: 'adimin',
        age: 54
    });
    */
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};