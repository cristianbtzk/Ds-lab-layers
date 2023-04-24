import {Pool} from 'pg'

export default new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionString: 'postgres://ds:ds@ds-postgres:5432/dds',

}).connect()