import axios from "axios"

export const getGames = async setGames => {
  const res = await axios({
    method: "post",
    url:
      "https://cryptic-spire-51992.herokuapp.com/https://api.igdb.com/v4/release_dates",

    data: `fields *, game.*, game.cover.*; sort date desc; where game.involved_companies.company = 1 & human != "TBD"; limit 100;`,
    headers: {
      Accept: "application/json",
      "Client-ID": "dls4vul9t0c13l3s1nbyrslkc8mca3",
      Authorization: "Bearer 602kzs24a6vxjb04fw3xnv1g9l2ray",
    },
  })

  var dataArr = res?.data

  dataArr = dataArr?.filter(
    (data, index, self) =>
      index === self.findIndex(t => t.game.name === data.game.name)
  )

  setGames(dataArr)
}
