var Hotel = require("../models/hotel");
const axios = require("axios");

async function hotelInfo(req, res) {
  try {
    let qValue;
    console.log("Hotel Info");
    const values = await Hotel.find({ "data.q": req.query.q });
    console.log(values);
    for (const value of values) {
      qValue = value.data.q;
      console.log(qValue); // Print the 'q' value for each document
    }
    if (qValue === req.query.q) {
      res.status(200).json({ message: "DB data", Data: values });
    } else {
      const options = {
        method: "GET",
        url: "https://hotels4.p.rapidapi.com/locations/v3/search",
        params: {
          q: req.query.q,
          locale: "en_US",
          langid: "1033",
          siteid: "300000001",
        },
        headers: {
          "X-RapidAPI-Key":
            "910d6022demshbf2e3355ece1242p117479jsne66bc0f3b3b7",
          "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      console.log(response.data.q + " " + response.data.rid);
      let query = {
        data: { q: response.data.q, rid: response.data.rid },
      };
      const saveLocation = await Hotel.create(query);
      res.status(200).json({ Message: "Direct API DATA", Data: saveLocation });
    }
  } catch (error) {
    res.status(500).send(error.meesage);
  }
}

module.exports = hotelInfo;
