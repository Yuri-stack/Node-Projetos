module.exports = {
    "type": "sqlite",
    "database": 
        process.env.NODE_ENV === 'test' 
        ? "./src/database/db.test.sqlite" 
        : "./src/database/db.sqlite",
    "entities": ["./src/model/*.ts"],
    "migrations": ["./src/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./src/database/migrations",
        "entitiesDir": "./src/model/"
    }
 }