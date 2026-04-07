const axios = require("axios");

const API_URL = "https://api.thedogapi.com/v1";

module.exports = async (req, res) => {
  const type = req.query.type;

  try {
    // 🏠 RANDOM IMAGE (default)
    if (!type) {
      const response = await axios.get(`${API_URL}/images/search`, {
        headers: { "x-api-key": process.env.API_KEY },
      });

      return res.status(200).json({
        image: response.data?.[0]?.url,
      });
    }

    // 📋 BREEDS
    if (type === "breeds") {
      const response = await axios.get(`${API_URL}/breeds`, {
        headers: { "x-api-key": process.env.API_KEY },
      });

      return res.status(200).json(response.data);
    }

    // 🔍 SEARCH
    if (type === "search") {
      const query = req.query.q;

      if (!query) {
        return res.status(200).json({ images: [] });
      }

      const breedRes = await axios.get(
        `${API_URL}/breeds/search?q=${query}`,
        {
          headers: { "x-api-key": process.env.API_KEY },
        }
      );

      const breed = breedRes.data?.[0];

      if (!breed) {
        return res.status(200).json({ images: [] });
      }

      const imgRes = await axios.get(
        `${API_URL}/images/search?breed_ids=${breed.id}&limit=6`,
        {
          headers: { "x-api-key": process.env.API_KEY },
        }
      );

      return res.status(200).json({
        images: imgRes.data || [],
      });
    }

    // 🐾 BREED BY ID
    if (type === "breed") {
      const id = req.query.id;

      const response = await axios.get(
        `${API_URL}/images/search?breed_ids=${id}&limit=6`,
        {
          headers: { "x-api-key": process.env.API_KEY },
        }
      );

      return res.status(200).json({
        images: response.data || [],
      });
    }

    // ❌ INVALID TYPE
    res.status(400).json({ error: "Invalid type parameter" });

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Server error" });
  }
};
