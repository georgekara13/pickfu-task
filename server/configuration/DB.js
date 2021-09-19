const DB = () => {
  return {
    DATABASE: `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@database:27017?authSource=admin`,
    MODE: "dev",
  };
};

module.exports = { DB };
