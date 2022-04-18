const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        firstname: 'John',
        email: 'johndoe@hotmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstname: 'Mike',
        email: 'mikebrok@hotmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstname: 'Lary',
        email: 'larytravor@hotmail.com',
        password_hash: await bcryptjs.hash('987654', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},

  ),

  down: () => {},
};
