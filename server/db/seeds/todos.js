exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, todo: 'Create DB', complete: 'true' },
        { id: 2, todo: 'Complete app', complete: 'false' },
        { id: 3, todo: 'Style app', complete: 'false' }
      ])
    })
}
