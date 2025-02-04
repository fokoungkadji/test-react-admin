import jsonServerProvider from "ra-data-json-server";

export const dataProvider= jsonServerProvider(
  "http://localhost:3001"
);

export const dataProvider1 = jsonServerProvider(
  "https://jsonplaceholder.typicode.com"
);