import pg from 'pg'

new pg.Client({
  user: 'dante',
  host: 'localhost',
  password: 'password',
  database: 'nodepg',
  port: '5432'
})
