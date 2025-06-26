import { AppRegistry } from 'react-native';
import React from 'react';
import { name as appName } from '../../../app.json';  // Make sure you have app.json in your project root
import FileApp from './FileApp';

export default function Main() {
  return (
    <React.StrictMode>
      <FileApp />
    </React.StrictMode>
  );
}

AppRegistry.registerComponent(appName, () => Main);