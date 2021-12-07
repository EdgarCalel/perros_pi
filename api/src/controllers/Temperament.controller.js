const axios = require('axios')
const { Dog, Temperamento } = require('../db')

const findDogTemperament = async (req, res) => {
  try {
    const temperamentApi = await axios.get('https://api.thedogapi.com/v1/breeds');
      let temperamentex = temperamentApi.data.map(d => d.temperament ? d.temperament : "no se tiene temperamento");
      let temp2 =temperamentex.map(d => d.split(', '))
      temp2.forEach(el => {
          if (el) Temperamento.findOrCreate({
            where: { name: el }})
      });
      temperamentoBd = await Temperamento.findAll();
      res.status(200).json(temperamentoBd);
  } catch (error) {
      res.status(404).send('No se tiene respuesta a su solicitud' + error)
  }
 
}
module.exports = { findDogTemperament}