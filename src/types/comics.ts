export interface comic {
    id:number,
    title:string,
    modified:string,
    description:string,
    prices:[
       {
            type:string,
            price:number,
       }
    ]
    thumbnail:{
       path:string,
       extension:string,
    }
    creators:{
       items:[
           {
               name:string,
               role:string
           }
       ]
    }
}

