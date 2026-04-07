require("dotenv").config();

const express = require("express");
const axios = require("axios");

const app = express();

const API_URL = "https://api.thedogapi.com/v1";
const API_KEY = process.env.API_KEY;
const PORT = 3000;

app.set("view engine", "ejs");

const config = {
  headers: {
    "x-api-key": API_KEY,
  },
};
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/images/search`, config);
    res.render("index", {
      image: response.data[0].url,
    });
  } catch {
    res.send("Error loading image");
  }
});

// 📋 Breeds List
app.get("/breeds", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/breeds`, config);
    res.render("breeds", { breeds: response.data });
  } catch {
    res.send("Error loading breeds");
  }
});

// 🔍 Search (FIXED → shows correct breed images)
app.get("/search", async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.render("search", { images: [], query: "" });
  }

  try {
    // Step 1: get breed ID
    const breedRes = await axios.get(
      `${API_URL}/breeds/search?q=${query}`,
      config
    );

    const breed = breedRes.data[0];

    if (!breed) {
      return res.render("search", { images: [], query });
    }

    // Step 2: get images using breed ID
    const imgRes = await axios.get(
      `${API_URL}/images/search?breed_ids=${breed.id}&limit=6`,
      config
    );

    res.render("search", {
      images: imgRes.data,
      query,
    });

  } catch (err) {
    console.log(err.message);
    res.render("search", { images: [], query });
  }
});

// 🐾 Filter by Breed
app.get("/breed/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(
      `${API_URL}/images/search?breed_ids=${id}&limit=6`,
      config
    );

    res.render("breedImages", { images: response.data });
  } catch {
    res.send("Error loading images");
  }
});
