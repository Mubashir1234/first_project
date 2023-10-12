//carIssues[],carinvoice,addcardetils,

const Mechanic = require("../models/mechanic");

async function carDetails(req, res) {
  console.log("its mechanic API");
  if (req.tokenData.role != "mechanic") {
    res
      .status(400)
      .send(
        `your role ${req.tokenData.role} does not allow you to access this module `
      );
  } else {
    console.log("you are mechanic");

    const { issues, carDetails, isCar } = req.body;
    const data = { issues, carDetails, isCar };
    const response = await Mechanic.create(data);
    res.send(response);
  }
}

module.exports = { carDetails };
