import { fetchUtils } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";

const apiUrl = 'http://localhost:3001'; // URL de votre JSON Server

// J'encapsule fetch pour gérer les requêtes HTTP et les réponses JSON.
// ici, les en-têtes nécessaires sont automatiquement ajoutées.
const httpClient = fetchUtils.fetchJson;

export const dataProvider = {
  ...jsonServerProvider(apiUrl), // Utilisation du dataProvider de base de jsonServerProvider

  // Je surcharge la méthode updateMany pour utiliser PATCH au lieu de PUT 
  //pour mettre à jour uniquement le statut contrairement a put qui met à jour toute les info de l'utilisateur.
  updateMany: async (resource, params) => {
    const { ids, data } = params;

    // Pour chaque id dans ids, une requête PATCH est envoyée à l'URL ${apiUrl}/${resource}/${id}.
    // Cela permet de mettre à jour le statut de tout les champs selectionnés simultanément.
    const responses = await Promise.all(
      ids.map((id) =>
        // envoi de la requête HTTP grace a httpClient.
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'PATCH', 
          // Les données à mettre à jour sont converties en JSON et envoyées dans le corps de la requête.
          body: JSON.stringify(data),
        })
      )
    );

    return { data: responses.map((response) => response.json) };
  },
};
