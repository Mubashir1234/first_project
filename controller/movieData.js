const axios = require("axios");
const Movie = require("../models/movie");

// http request through axios
async function movie(req, res) {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
    headers: {
      "X-RapidAPI-Key": "910d6022demshbf2e3355ece1242p117479jsne66bc0f3b3b7",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  try {
    var finalData = [];
    const response = await axios.request(options); //
    await new Promise((resolve, reject) => {
      response.data.results.forEach(async (element, index) => {
        const data = {
          id: element.id,
          titleType: { text: element.titleType.text, id: element.titleType.id },
          titleText: element.titleText.text,
          releaseYear: element.releaseYear.year,
          releaseDate: {
            year: element.releaseDate.year,
            month: element.releaseDate.month,
            day: element.releaseDate.day,
          },
        };
        finalData[index] = await Movie.updateOne({ id: element.id }, data, {
          upsert: true,
          new: true,
        });
        if (index === response.data.results.length - 1) resolve();
      });
    });
    console.log("hello");
    res.status(200).json({ Data: finalData });
  } catch (error) {
    console.error(error);
  }
}
module.exports = movie;

// find out data with the mongo db.
// have multiple query
// if not found then search into an API and save into Db.
// then display the data

// for (let index = 0; index < response.data.results.length; index++) {

// const finalData = await Movie.create(data);
