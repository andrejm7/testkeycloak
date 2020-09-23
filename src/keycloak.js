import { RNKeycloak } from '@react-keycloak/native';

// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak({
  url: 'http://192.168.0.102:8080/auth',
  realm: 'TrioDental',
  clientId: 'ui',
});

export default keycloak;