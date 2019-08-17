#! /usr/bin/env node

const argv = require("yargs-parser")(process.argv.slice(2));
const { generate } = require("@graphql-codegen/cli");
async function graphqlCodegen() {
  const directory = process.cwd();
  const app = argv.app;
  if (!app) {
    console.error("❌", " Missing app parameter");
    process.exit();
  }
  await generate(
    {
      overwrite: true,
      schema: "http://localhost:3001/graphql",
      documents: `${directory}/src/config/addonBasic/magnus.client-api.graphql`,
      generates: {
        [`${directory}/src/app/graphql/graphql.service.ts`]: {
          plugins: [
            { add: "/* tslint:disable */" },
            "typescript",
            "typescript-operations",
            "typescript-apollo-angular",
            "fragment-matcher"
          ]
        }
      }
    },
    true
  );
}
graphqlCodegen().catch(error => console.log(error.message));
