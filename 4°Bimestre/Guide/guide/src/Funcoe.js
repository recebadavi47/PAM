import { db } from '../firebase/firebase';

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot
} from 'firebase/firestore';


export function verificarLogin(usuario, senha) {
  if (usuario === 'pietrao' && senha === '1234') {
    return true;
  }

  return false;
}

export function verificarQuiz(resposta, respostaCorreta) {

  if (resposta === respostaCorreta) {
    return true;
  }

  return false;
}


// -----------------------------------------------------
// VOTAÇÃO (coleção "guide" no Firestore)
// -----------------------------------------------------

export async function votarNoFirebase(personagemId) {

  const referencia = doc(db, 'guide', personagemId);
  const snapshot = await getDoc(referencia);

  if (snapshot.exists()) {

    await updateDoc(referencia, {
      votos: increment(1)
    });

  } else {

    await setDoc(referencia, {
      votos: 1
    });

  }
}


export function escutarVotos(personagemId, callback) {

  const referencia = doc(db, 'guide', personagemId);

  const cancelar = onSnapshot(referencia, (snapshot) => {

    if (snapshot.exists()) {
      callback(snapshot.data().votos);
    } else {
      callback(0);
    }

  });

  return cancelar;
}