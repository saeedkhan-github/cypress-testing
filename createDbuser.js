const path = require('path');
const fs = require('fs');
const shortid = require('shortid');
const faker = require('faker');
const bcrypt = require('bcryptjs');
const { times } = require('lodash');

const passwordHash = bcrypt.hashSync("s3cret", 10)

const createFakeUser = () => ({
  id: shortid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  username: faker.internet.userName(),
  password: passwordHash,
  email: faker.internet.email(),
  createdAt: faker.date.past(),
  modifiedAt: faker.date.recent(),
})

export const createSeedUsers = (numberOfUsers) =>
  times(numberOfUsers, () => createFakeUser())

export const saveUsersSeed = (numberOfUsers) => {
  const seedUsers = createSeedUsers(numberOfUsers)
  // write seed users to seedUsers.json
  fs.writeFile(path.join(process.cwd(), "seedUsers.json"), seedUsers)
}
