const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");
const adminRoutes = require("./routes/admin.route");

app.use(bodyParser.json());
app.use(express.json());

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "assessment",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:8080/"],
    },
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
    security: [ { bearerAuth: [] } ],
  }),
  apis: ["index.js", "./routes/*.js"]
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.use(bodyParser.urlencoded({extended:false}));
app.use("/users",usersRoutes);
app.use("/admin",adminRoutes);

app.listen(8080, () => {
  console.log("Started index.js");
});
