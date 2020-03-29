const connection = require("../database/connections");

module.exports = {
  async index(req, res) {
    const { page = 1 } = res.query;
    const [count] = await connection("incidents").count({ count: "*" });
    const incidents = await connection("incidents as i")
      .join("ongs as o", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select("*");

    res.harders("X-Total-Count", count);

    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;

    const ong_id = req.harders.ong;

    await connection("incidents")
      .returning("id")
      .insert({
        title,
        description,
        value,
        ong_id
      });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.harders.ong;

    const incident = await connection("incidents")
      .where("id", id)
      .andWhere("ong_id", ong_id)
      .select("id")
      .fist();

    if (incident !== null && incident == "") {
      return res.status(401).json({ errro: "Operação não permitida" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
};
