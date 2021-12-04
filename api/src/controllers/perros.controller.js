const axios = require('axios')
const { Dog, Temperamento} = require('../db')

const PerrobyApi = async (req, res)=>{
  try {
    const Urlapi = await axios('https://api.thedogapi.com/v1/breeds')
    const infoApi = await Urlapi.data.map(ed =>{
      return{
        name: ed.name,
        image: ed.image,
        temperament: ed.temperament,
        weight: ed.weight
      }
    })
    return infoApi
  } catch (error) {
    console.log(error);
  }

}
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
const name = req.query.name
let findDogs = await JoinApiBd();
if (name) {
  let DogsName = await findDogs.filter(d=>d.name.toLowerCase().includes(name.toLowerCase()))
DogsName.length ?
res.status(200).send(DogsName) :
res.status(404).send('NO se logro encontrar al perro');
}else{
  res.status(200).send(findDogs)
}
}
const findId = async (req, res) => {
  console.log('aqui va estar la busqueda por id')
  res.send('aqui voy a buscar por id')

}
const CreateDog = async (req, res) => {
    const { name, height, weight, life_span } = req.body;
    Dog.create({name, height, weight, life_span })
      .then((newDog) => {
        res.json(newDog);
      })
      .catch((error) => {

        console.log(error)
      })


  //})

}

module.exports = { PerrobyApi, infoBD, findAll, findId, CreateDog}