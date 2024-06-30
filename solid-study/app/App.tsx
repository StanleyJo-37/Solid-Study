import registerRootComponent from 'expo/build/launch/registerRootComponent';

import React from 'react';
import { Text } from 'react-native';

const App: React.FC = () => {
    return (
        <Text>Hello World</Text>
    );
}

registerRootComponent(App);