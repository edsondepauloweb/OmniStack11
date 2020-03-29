const connection = require("../database/connections");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const [ong] = await connection("ongs")
      .where("id", id)
      .select("*");

    if (!ong) {
      return res.status(400).json({ error: "ONG não existe" });
    }

    return res.json(ong);
  }
};
