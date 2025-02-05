import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import jsonServerProvider from "ra-data-json-server";

const apiUrl = 'http://localhost:3001'; // URL de votre JSON Server
const httpClient = fetchUtils.fetchJson;

export const dataProvider = {
  ...jsonServerProvider(apiUrl), // Utilisez le dataProvider de base de jsonServerProvider

  // Surchargez la méthode updateMany pour utiliser PATCH au lieu de PUT
  updateMany: async (resource, params) => {
    const { ids, data } = params;

    // Envoyer une requête PATCH pour chaque ID
    const responses = await Promise.all(
      ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'PATCH', // Utilisez PATCH au lieu de PUT
          body: JSON.stringify(data),
        })
      )
    );

    return { data: responses.map((response) => response.json) };
  },
};

// export default dataProvider;