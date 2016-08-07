const sequelize = require('../data/database').sequelize;

const modelSolicitation = require('../model/solicitation');
const modelMedicine = require('../model/medicine');

const Medicine = modelMedicine.Medicine;
const Solicitation = modelSolicitation.Solicitation


const createSolicitation = (data) => {
  solicitation = Solicitation.build({status: 'outro teste'});
  medicine = Medicine.build({code: 'qualquer um'});

  solicitation.save().then(function(solicitation) {

    medicine.solicitationId = solicitation.id;
    medicine.save().then(function(medicine) {

      console.log("cadastrou medicina");
      solicitation.getMedicines().then(function(medicines) {
        console.log(medicines[0].dataValues);
      });

    }).catch(function(){
      console.log("nao cadastrou medicina");
    });
  });
}

const findOne = (solicitation) => {
  return Solicitation.findOne({
    where: solicitation
  });
}

findOne({id: 1}).then((solicitation) => {
  console.log(solicitation.get());
});


module.exports = {
  createSolicitation,
  findOne
}
