export class Product {
    id:number;
    title:string;
    price:number;


    constructor(id:any, title:any, price=0){
        this.id=id
        this.title=title
        this.price=price
    }
}
