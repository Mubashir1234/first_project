const Car = require("../models/cars");

async function carsentry(req, res) {
  try {
    if (req.tokenData.role != "owner") {
      res
        .status(400)
        .send(
          `your role ${req.tokenData.role} does not allow you to access this module `
        );
    } else {
      const { carType, carName, carColour, carPrice } = req.body;
      const userId = req.tokenData.user_id;
      const data = { carType, carName, carColour, userId, carPrice };
      const carData = await Car.create(data);
      res.status(200).json({ data: carData });
    }
  } catch (err) {
    res.send(err.message);
  }
}
// i want to edit the car entry
// if any of the proprty will be change it will automatically change in the database
async function carEdit(req, res) {
  try {
    const { carType, carName, carColour } = req.body;
    const userId = req.tokenData.user_id;

    //const data = await Car.find({ _id: req.params.id });
    await Car.updateOne(
      { _id: userId },
      { $set: { carType: carType, carName: carName, carColour: carColour } }
    );
    res.status(200).json({ Data: `Requested Data has been updated` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// 1 user k against kon kon si gari hai
//
async function affiliatecarbyuser(req, res) {
  try {
    const userId = req.tokenData.user_id;
    const response = await Car.find({ userId: userId }).populate("userId");
    res.json({ result: response });
  } catch (error) {
    res.send(error.message);
  }
}
async function affiliatecar(req, res) {
  try {
    const response = await Car.find({ _id: req.params.carId }).populate(
      "userId"
    );
    res.json({ response });
  } catch (error) {
    res.send(error.message);
  }
}
async function advanceSearchCar(req, res) {
  try {
    const { carColour, carName } = req.params;
    const response = await Car.findOne(req.params);
    res.json({ Data: response });
  } catch (error) {
    res.send(error.message);
  }
}

async function advanceSearchCarWithQueryParameter(req, res) {
  try {
    const { carName, minPrice, maxPrice, carPrice, carType, carColour } =
      req.query;
    console.log(req.query.carName);
    console.log(carName);

    const query = {};

    if (carName) {
      query.carName = carName;
    }
    // object.key = value
    if (minPrice) {
      query.carPrice = { $gte: minPrice };
    }
    if (carType) {
      query.carType = carType;
    }
    if (maxPrice) {
      query.maxPrice = { $lte: maxPrice };
    }
    if (carPrice) {
      query.carPrice = carPrice;
    }
    if (carColour) {
      query.carColour = carColour;
    }
    console.log(query);
    const result = await Car.find(query);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  carsentry,
  affiliatecarbyuser,
  affiliatecar,
  advanceSearchCar,
  advanceSearchCarWithQueryParameter,
  carEdit,
};
