const axios = require('axios')
const { Dog, Temperamento } = require('../db');


const findDogTemperament = async (req, res) => {
  try {
    const temperamentApi = await axios.get('https://api.thedogapi.com/v1/breeds');
      let temperamentex = await temperamentApi?.data?.map(d => d.temperament ? d.temperament : "no se tiene temperamento");
      let temp2 =temperamentex?.map(d => d?.split(', '))
      const formal = temp2.flat()
      // res.json(formal)
      formal?.forEach(tel => {
          if (tel) Temperamento.findOrCreate({
            where: { name: tel }})
      });
     const temperamentoBd = await Temperamento.findAll();
      res.status(200).json(temperamentoBd);
  } catch (error) {
      res.status(404).send('No se tiene resultApi a su solicitud' + error)
  }
}

const TemperamentoList = async (req,res)=>{
  temperamentoBda = await Temperamento.findAll();
  res.status(200).json(temperamentoBda);
}



 const CreateTemperamento = async (req, res) =>{
  const { name }= req.body;
  const tempNew = await Temperamento.create({ name })
  

  // dogNew.addTemperamento(temperamentoIn);
res.send('Ha Creado con exito el temperamento')
}

const pokemonTodo = async(res, req) =>{
  const { id } = req.params
  try {

   

    const pokemonId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon   = pokemonId.data
    
    
    const dataMap = pokemon.map((pokemon) => {
        return {
            name:    pokemon.forms[0].name,
            // hp:      pokemon.stats[0].base_stat,
            // attack:  pokemon.stats[1].base_stat,
            // defense: pokemon.stats[2].base_stat,
            // speed:   pokemon.stats[5].base_stat,
            // height:  pokemon.height,
            // weight:  pokemon.weight,
            // image:   pokemon.sprites.front_default,
            // type:    pokemon.types.map(tipo => tipo.type.name),
        }
    })

    res.json(dataMap)

//     let api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
//     let apipokemons = api.data.results
//     let pokemons = await Promise.all(apipokemons.map(async (p) =>{
//         let dataPokemon = await axios.get(`${p.url}`); // me traigo los datos del pokemon
        
//         let imgPokemon = await axios.get(`${dataPokemon.data.sprites.front_default}`); // me traigo la imagen
        
        
//         return {
//             id:      p.id,
//             name :   p.name,
//             image:   imgPokemon,    
//             hp:      p.stats[0].base_stat,
//             attack:  p.stats[1].base_stat,
//             defense: p.stats[2].base_stat,
//             speed:   p.stats[5].base_stat,
//             height:  p.height,
//             weight:  p.weight,
//             type:    p.types.map((e) => e.type.name) //mapeo los tipos
//         }
//     })
//     )
// console.log(pokemons)
    // return pokemons;

  //   const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30')
  //   let resultApi = api.data.results
  //   let info = [];
  //   for (let i = 0; i < resultApi.length; i++) {
  //       const apiRes = await axios.get(`${resultApi[i].url}`)
  //       let pokemon = {
  //           id: resultApi[i].url.split('/')[6],
  //           img: apiRes.data.sprites.other.dream_world.front_default,
  //           name: apiRes.data.name,
  //           type: apiRes.data.types.map(e => e.type.name)
  //       }
  //       info.push(pokemon)
  //   }
  //   let resultado = [...info]
  // // res.status(200).json(resultado)
  // console.log(resultado)
  } catch (error) {
    console.log(error)
  }
}
module.exports = { findDogTemperament,TemperamentoList, CreateTemperamento, pokemonTodo }