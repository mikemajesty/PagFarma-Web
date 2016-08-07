const sequelize = require('../data/database').sequelize;

const modelSolicitation = require('../model/solicitation');
const modelMedicine = require('../model/medicine');

const Medicine = modelMedicine.Medicine;
const Solicitation = modelSolicitation.Solicitation


const create = (data) => {
  solicitation = Solicitation.build();
  solicitation.userId = data.userId;

  solicitation.save().then(function(solicitation) {
    console.log(data);
    data.codigos.forEach((codigo) => {
      console.log(codigo);
      medicine = Medicine.build({code: codigo});
      medicine.solicitationId = solicitation.id;
      medicine.save();
    });
  });
}

const findAll = (solicitation) => {
  return Solicitation.findAll({
    include: [{
      model: Medicine,
      as: 'medicines'
    }],
    where: solicitation
  });
}

module.exports = {
  create,
  findAll
}
