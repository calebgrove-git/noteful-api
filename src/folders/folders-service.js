const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('noteful_folders');
  },

  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('noteful_folders')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.from('noteful_folders').select('*').where({ id }).first();
  },
  deleteFolder(knex, id) {
    return knex('noteful_folders').select('*').where({ id }).delete();
  },

  updateFolder(knex, id, newInfo) {
    return knex('noteful_folders').where({ id }).update(newInfo);
  },
};

module.exports = FoldersService;
