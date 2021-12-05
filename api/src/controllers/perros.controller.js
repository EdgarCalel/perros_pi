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
  try {
    const { id } = req.params;
    const allDogs = await JoinApiBd();
    if (!id) {
        res.status(404).json("Couldn't find the name on DBase")
    } else {
        const dog = allDogs.find(dogui => dogui.id === id);
        res.status(200).json(dog)
    }
} catch (error) {
    res.status(404).send('esto no da '+error)
}
      //  const  id  = req.params.id;
      //  const DogAll = await JoinApiBd();
      // //  res.json(DogAll)
      //  if (id) {
      //   const dog = DogAll.filter(d => d.id===id);
      //   dog.length ?
      //   res.status(200).json(dog):
      //      res.status(404).json("No se logro encontrar al perro")
      //  }
}
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

module.exports = { PerrobyApi, infoBD, findAll, findId, CreateDog}