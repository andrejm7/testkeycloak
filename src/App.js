import React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { ReactNativeKeycloakProvider } from '@react-keycloak/native';
import { NavigationContainer } from '@react-navigation/native';

import keycloak from './keycloak';
import Tabs from './tabs';

// Wrap everything inside ReactNativeKeycloakProvider
const App = () => {
  return (

    <NavigationContainer>
      <ReactNativeKeycloakProvider
        authClient={keycloak}
        initOptions={{
          redirectUri: 'testkeycloak://Homepage',
          onLoad: 'login-required',
          // if you need to customize "react-native-inappbrowser-reborn" View you can use the following attribute
          inAppBrowserOptions: {
            // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
            // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
          },
        }}
      >
        <Tabs />
      </ReactNativeKeycloakProvider>
    </NavigationContainer>

  );
};

export default App;