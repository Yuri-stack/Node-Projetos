import { Connection, createConnection, getConnection } from "typeorm";

async () => {
    const connection: Connection = await createConnection();
}