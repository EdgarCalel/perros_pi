const axios = require('axios')
const { Dog, Temperamento, Diet, Recipe} = require('../db')

const PerrobyApi = async (req, res)=>{
  try {
    
    const Urlapi = await axios('https://api.thedogapi.com/v1/breeds')
    const infoApi = await Urlapi.data.map(ed =>{
      return{
        id: ed.id,
        name: ed.name,
        image: ed.image.url ?ed.image.url: 'no tiene imagen',
        temperament: ed.temperament ? ed.temperament : 'no tiene temperemanto',
        weight: ed.weight.metric,
        height: ed.height.metric,
        weight_min: parseInt(ed.weight.metric.slice(0, 2).trim()),
        weight_max: parseInt(ed.weight.metric.slice(4).trim()),
        height_min: parseInt(ed.height.metric.slice(0, 2).trim()),
        height_max: parseInt(ed.height.metric.slice(4).trim()),
        life_span: ed.life_span,
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
    // const Urlapi = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
    //   const  infoApi = await Urlapi.data.map(ed =>{
    //     return{
    //       id: ed.id,
    //       name: ed.name,
    //       temperament: ed.temperament,
    //       weight: ed.weight.imperial,
    //       height: ed.height.imperial,
    //       image: ed.image ?ed.image: 'no tiene imagen',
    //       life_span: ed.life_span
    //     }
    // /  })
    // hola
//     const ApiInfo =PerrobyApi();
//     const findApi = await ApiInfo.data.filter(d=>d.name.toLowerCase().includes(name.toLowerCase()))
//       let findDogs = await infoBD();
//       const BdFiltName = findDogs.filter(d=>d.name.toLowerCase().includes(name.toLowerCase()))
// let findImage = await PerrobyApi();

//       const Result = findApi.concat(BdFiltName)  
const dogTotal = await JoinApiBd();
if (name) {
  let dogName = await dogTotal.filter(d=>d.name.toLowerCase().includes(name.toLowerCase()))
  dogName.length?
    res.status(200).json(dogName):
    res.status(500).json({message: "No se pudo encontraron datos del HORARIO_DIA.",data: [],});
  
  }};

const infoBD = async ()=>{
return await Dog.findAll({
    include:{
      model: Temperamento,
      attributes: ['name'],
                through:{ 
        attributes:[],
      },
    }
  })



}
const JoinApiBd = async ()=>{
  const infoApi = await PerrobyApi();
  const infoBd = await infoBD();
 const infoBdMap= await infoBd.map((el)=>{
    return{
      id: el.id,
      name: el.name, 
      height_min: el.height_min,
      height_max: el.height_max,
      weight_min: el.weight_min,
      weight_max: el.weight_max,
      life_span: el.life_span,
      image: el.image,
       temperament: el.Temperamentos.map(el=>el.name).join(', '),
      createdInDB: el.createdInDB
    }
  })
  const infoTotal = infoApi.concat(infoBdMap);
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
  const { 
    name, 
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
  temperament }= req.body;
  const dogNew = await Dog.create({
    name, 
    height_min, 
    height_max,
    weight_min, 
    weight_max,
    life_span })
  
  let temperamentoIn = await Temperamento.findAll({
    where: { name:temperament}
  })
  dogNew.addTemperamento(temperamentoIn);
res.send('Ha Creado con exito el perro')
}
const filterTemperament = async (req, res)=>{
  const { temperament } = req.query;
  const everyDog = await findAll();
  const dogSearchResult = everyDog.filter((dog) => {
      if (temperament === 'all') return everyDog
      else if (dog.temperament) {
          return (dog.temperament.toLowerCase()).includes(temperament.toLowerCase())
      }
  });
  res.status(200).json(dogSearchResult)
  }

  const deletePerro = async (req, res)=>{
  const { namedelete } =req.params
    let result = Dog.findOne({
    where :{name : namedelete}
  })
  res.status(200).json({msg:'se ha eliminado exitosamente'})
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

const CrearReceta = async (req, res) => {
  const { title, summary, spoonacularScore, healthScore, steps, img, DietB } = req.body;
  
  const newRecipe = await Recipe.create({title, summary, spoonacularScore, healthScore, steps, img});
  const DietIn = await Diet.findAll({
      where: { name: DietB}
  })
  newRecipe?.addDiet(DietIn);
  res.status(200).send("Has creado la receta con exito!")
}

module.exports = { PerrobyApi, infoBD, findAll, findId, CreateDog, DogByName, filterTemperament, deletePerro, CrearReceta}