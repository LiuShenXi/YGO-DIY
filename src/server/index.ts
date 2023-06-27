// // index.ts

// import express from "express"
// import { remultExpress } from "remult/remult-express"
// import { createPostgresConnection } from "remult/postgres"

// const app = express()

// const connectionString = "postgres://user:password@host:5432/database"

// app.use(
//   remultExpress({
//     dataProvider:
//       createPostgresConnection({
//         connectionString // default: process.env["DATABASE_URL"]
//       })
//   })
// )

// const express = require('express')
import express from "express"
import { remultExpress } from "remult/remult-express"

const app = express()

app.use(
  remultExpress({
    entities: [
      /* entity types */
    ]
  })
)

app.listen(3002)