const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    const ong_id = req.harders.ong;
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};
