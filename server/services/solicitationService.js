const sequelize = require('../data/database').sequelize;

const modelSolicitation = require('../model/solicitation');
const modelMedicine = require('../model/medicine');
const modelBudget = require('../model/budget');

const Medicine = modelMedicine.Medicine;
const Solicitation = modelSolicitation.Solicitation;
const Budget = modelBudget.Budget;


const create = (data) => {
  solicitation = Solicitation.build();
  solicitation.userId = data.userId;
  solicitation.save().then(function(solicitation) {
    data.medicines.forEach((medicine) => {
      medicineModel = Medicine.build({code: medicine.code, quantity: medicine.quantity});
      medicineModel.solicitationId = solicitation.id;
      medicineModel.save();
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

const findAllBudget = (solicitation) => {
  return Solicitation.findAll({
    include: [{
      model: Medicine,
      as: 'medicines'
     },
     {
       model: Budget,
       as: 'budgets'
     }],
    where: solicitation
  });
}

module.exports = {
  create,
  findAll,
  findAllBudget
}
