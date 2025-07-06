export default () => ({
  mongo: {
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    password: process.env.MONGO_INITDB_ROOT_PASSWORD,
    db: process.env.MONGO_INITDB_DATABASE,
    port: process.env.MONGO_PORT,
    host: process.env.MONGO_HOST,
  },
});
