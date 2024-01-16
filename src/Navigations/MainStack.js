import React from 'react';
import HomeScreen from '../Screens/HomeScreen';

export default function (Stack) {
  return (
    <>
      {/* <Stack.Screen
                name={navigationStrings.TAB_ROUTES}
                component={TabRoutes}
                options={{ headerShown: false }}

            /> */}

      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </>
  );
}
