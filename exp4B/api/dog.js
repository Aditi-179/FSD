import express from "express";
import axios from "axios";

const app = express();

const API_URL = "https://api.thedogapi.com/v1";
const API_KEY = process.env.API_KEY;

const config = {
  headers: { "x-api-key": API_KEY },
};

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/images/search`, config);
    res.status(200).json({ image: response.data[0].url });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dog image" });
  }
});

export default app;
