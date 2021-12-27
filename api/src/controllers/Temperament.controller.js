const axios = require('axios')
const { Dog, Temperamento } = require('../db');
const { JoinApiBd } = require('./perros.controller')


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
      res.status(404).send('No se tiene respuesta a su solicitud' + error)
  }
}


const TemperamentoList = async (req,res)=>{
  temperamentoBda = await Temperamento.findAll();
  res.status(200).json(temperamentoBda);
}

const ByTemperament = async (req, res)=>{
  const temperaments = req.query.temperaments;
  const everyDog = await JoinApiBd();
  const dogSearchResult = everyDog.filter((dog) => {
      if (temperament === 'all') return everyDog
      else if (dog.temperament) {
          return (dog.temperament.toLowerCase()).includes(temperaments.toLowerCase())
      }
  });
  res.status(200).json(dogSearchResult)
}

 const CreateTemperamento = async (req, res) =>{
  const { name }= req.body;
  const tempNew = await Temperamento.create({ name })
  

  // dogNew.addTemperamento(temperamentoIn);
res.send('Ha Creado con exito el temperamento')
}
module.exports = { findDogTemperament,TemperamentoList, CreateTemperamento,ByTemperament }