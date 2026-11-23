
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

import { auth } from './firebase';

// Cadastro de usuário
export async function cadastrarUsuario(nome, email, senha) {
  const resultado = await createUserWithEmailAndPassword(
    auth,
    email.trim(),
    senha
  );

  await updateProfile(resultado.user, {
    displayName: nome.trim(),
  });

  return resultado.user;
}

// Login
export async function fazerLogin(email, senha) {
  const resultado = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    senha
  );

  return resultado.user;
}

// Logout
export async function fazerLogout() {
  await signOut(auth);
}

// Verificar usuário conectado
export function observarUsuario(callback) {
  return onAuthStateChanged(auth, callback);
}
