import jsonServerProvider from "ra-data-json-server";

export const dataProvider1= jsonServerProvider(
  "http://localhost:3001"
);

export const dataProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com"
);