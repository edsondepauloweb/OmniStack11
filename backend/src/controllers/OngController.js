const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    await connection("ongs")
      .returning("id")
      .insert({
        name,
        email,
        whatsapp,
        city,
        uf
      });

    return res.json({ id });
  }
};
