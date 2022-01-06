const { Dog, conn, Temperamento } = require('../../src/db.js');
const { expect } = require('chai');

xdescribe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });
  });
});


xdescribe('Temperamento model', ()=>{
it('El tipo de dato tiene que ser un string', ()=>{
  expect(typeof Temperamento.name).equal('string')
})
// it('el tipo de dato es un UUID',()=>{
//   const id2 ='UUID'
//   const id =Dog.createdInDB ="boolean";
//   const saludo =(typeof createdInDB)
//   console.log(saludo)
//   expect(id2).equal('UUID')
// })
})
