export type PokemonData ={
  sprites: {
    front_default: string
  }
  name: string
  id: number
  types: {
    slot:number
type:{
name: string
url:string
}
}[],

 stats: {
     stat: {
      name: string;
     };
     base_stat:number
   }[],

 moves:{
  move:{
    name:string,

  }
 }[],

 abilities:{

   ability:{
     name: string
    },
  },


 height: number,
 weight:number,

 species: {
  name: string,
  url: string,
 }

 base_experience:number


}


export type Species ={

  egg_groups:any


}
