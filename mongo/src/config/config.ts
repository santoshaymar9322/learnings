export default () => ({
  mongo: {
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    password: process.env.MONGO_INITDB_ROOT_PASSWORD,
    db: process.env.MONGO_INITDB_DATABASE,
    mongoPort: process.env.MONGO_PORT,
    mongoHost: process.env.MONGO_HOST,
  },
});
