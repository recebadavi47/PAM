
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen
        name="login"
        options={{ title: 'Entrar' }}
      />

      <Stack.Screen
        name="cadastro"
        options={{ title: 'Criar conta' }}
      />

      <Stack.Screen
        name="chat"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
