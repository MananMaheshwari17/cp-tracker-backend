const axios = require("axios");

async function getUserData(handle) {
  const response = await axios.get(
    `https://codeforces.com/api/user.info?handles=${handle}`
  );

  const user = response.data.result[0];

  return {
    handle: user.handle,
    rating: user.rating,
    rank: user.rank,
    maxRating: user.maxRating,
  };
}

module.exports = { getUserData };