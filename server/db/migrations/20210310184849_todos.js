exports.up = function (knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('todo')
    table.string('state')
    table.boolean('complete')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('todos')
}
