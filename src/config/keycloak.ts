import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'demo-realm',
  clientId: 'react-web-app',
});
