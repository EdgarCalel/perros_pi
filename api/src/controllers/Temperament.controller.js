const axios = require('axios')
const { Dog, Temperamento } = require('../db')

const findDogTemperament = async (req, res) => {
  const temperament = await axios.get('https://api.thedogapi.com/v1/breeds');
  const temperamentApi = await temperament.data.map(tem => tem.temperament);
const tempre = temperamentApi.map(tem =>{
  for(let i =0; i<tem.length; i++) return tem[i]});

  tempre.forEach(tem=>{
    Temperamento.findOrCreate({
      where: {name: tem}
    })
  })
  const TemperamentAll = await Temperamento.findAll();
  res.send(TemperamentAll)
}
module.exports = { findDogTemperament}