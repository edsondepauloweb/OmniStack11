exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.increments();
    table.string("name");
    table.string("email");
    table.string("whatsapp");
    table.string("city");
    table.string("uf", 2);
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
