import { Pool } from 'pg'

export default async () => {
  return await new Pool({
    max: 20,
    idleTimeoutMillis: 30000,
    connectionString: 'postgres://ds:ds@ds-postgres:5432/ds',

  }).connect()
}