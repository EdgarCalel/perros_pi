const axios = require('axios')
const { Dog, Temperamento} = require('../db')

const PerrobyApi = async (req, res)=>{
  try {
    bobada

    const Urlapi = await axios('https://api.thedogapi.com/v1/breeds')
    const infoApi = await Urlapi.data.map(ed =>{
      return{
        id: ed.id,
        name: ed.name,
        image: ed.image.url,
        temperament: ed.temperament,
        weight: ed.weight.metric,
        height: ed.height.metric
      }
    })
  return infoApi
  } catch (error) {
    console.log(error);
  }
};
const DogByName = async (req, res)=>{
    const { name } =req.params;
      const Urlapi = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      const  infoApi = await Urlapi.data.map(ed =>{
        return{
          id: ed.id,
          name: ed.name,
          temperament: ed.temperament,
          // weight: ed.weight.imperial,
          // height: ed.height.imperial,
          image : ed.image.url,
          life_span: ed.life_span
        }
      })
  
      let findDogs = await infoBD();
      const BdFiltName = findDogs.filter(d=>d.name.toLowerCase().includes(name.toLowerCase()))

      const Result = infoApi.concat(BdFiltName)  
      Result.length? res.status(200).json(Result): res.json('No se tiene al perro ingresado')
  
};

const infoBD = async ()=>{
  return await Dog.findAll({
    include:{
      model: Temperamento,
      atributes: ['name'],
                through:{ 
        atributes:[],
      },
    }
  })
}
const JoinApiBd = async ()=>{
  const infoApi = await PerrobyApi();
  const infoBd = await infoBD();
  const infoTotal = infoApi.concat(infoBd);
  return infoTotal
}               
const findAll = async (req, res)=>{

let findDogs = await JoinApiBd();
  res.status(200).send(findDogs) 

}
const findId = async (req, res) => {
const { id } = req.params;
// const  id  = req.params.id
// res.json(id)
    const dogTotal = await JoinApiBd();
if (id) {
  let dogId = await dogTotal.filter(el => el.id == id)
  dogId.length?
    res.status(200).json(dogId):
    res.status(404).send('No se encontro el perro que buscaba')
}}
const CreateDog = async (req, res) =>{
  const { name, height, weight, temperamentoB, life_span } = req.body;
  const dogNew = await Dog.create({name, height, weight, life_span })
  
  let temperamentoIn = await Temperamento.findAll({
    where: { name:temperamentoB}
  })
  dogNew.addTemperamento(temperamentoIn);
res.send('Ha Creado con exito el perro')
}
// const CreateDog = async (req, res) => {
//     const { name, height, weight,temperamentoB, life_span } = req.body;
//     Dog.create({name, height, weight, life_span })
//       .then((newDog) => {
//         let temperamentoIn =  Temperamento.findAll({where: { name:temperamentoB}})
//        newDog.addTemperamento(temperamentoIn);
//       //  res.send('Ha Creado con exito el perro');
//         res.json(newDog);
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   //})
// }

module.exports = { PerrobyApi, infoBD, findAll, findId, CreateDog, DogByName}