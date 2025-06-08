import { Stack } from 'expo-router';
import React from 'react';
import BusinessCardCreator from './components/BusinessCardCreator';


export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <BusinessCardCreator />
    </>
  );
}