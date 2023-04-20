export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'development',
    mongodb: process.env.MONGODB || 'mongodb://root:pass@localhost/pokedex?authSource=admin',
    port: process.env.PORT || 3001,
    DEFAULT_LIMIT: process.env.DEFAULT_LIMIT || 10,
});