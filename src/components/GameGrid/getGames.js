import axios from "axios"

export const getGames = async () => {
  const res = await axios({
    method: "post",
    url:
      "https://cryptic-spire-51992.herokuapp.com/https://api.igdb.com/v4/release_dates",

    data: `fields *, game.*, game.cover.*; sort date desc; where game.involved_companies.company = 1 & human != "TBD"; limit 100;`,
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.DB_CLIENT_ID,
      Authorization: process.env.DB_AUTH,
    },
  })

  var dataArr = res?.data

  dataArr = dataArr?.filter(
    (data, index, self) =>
      index === self.findIndex(t => t.game.name === data.game.name)
  )
  return dataArr
}
