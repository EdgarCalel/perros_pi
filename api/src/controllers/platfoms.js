const axios = require('axios')
const { Dog, Temperamento } = require('../db');
const { JoinApiBd } = require('./perros.controller')


const platfomrs = async (req, res) => {
    try {
    
        const Urlapi = await axios('https://api.rawg.io/api/games?key=586a7bfffee24a149ed022502c667554')
        const infoApi = await Urlapi.data.results.map(el=>{
            return{
                name: el.name,
                ratings: el.ratings.map(el=>el.percent),
                platforms: el.platforms
            }
        })

      res.json( infoApi)
      } catch (error) {
        console.log(error);
      }
}
module.exports = {platfomrs }
