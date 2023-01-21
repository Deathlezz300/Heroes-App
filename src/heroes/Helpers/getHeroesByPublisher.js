import { heroes } from "./InfoHeroes";

export const getHeroesByPublisher=(publisher)=>{
    const publishers=['DC Comics','Marvel Comics'];

    if(!publishers.includes(publisher)){
        throw new Error(`${publisher} no es un parametro valido`);
    }

    return heroes.filter(heroe=>{
        return heroe.publisher===publisher;
    })
}