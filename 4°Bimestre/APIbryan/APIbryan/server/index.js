
const express = require('express');

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { StreamClient } = require('@stream-io/node-sdk');

const app = express();

app.use(express.json());

// Credenciais armazenadas nas variáveis de ambiente do Render
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT
);

initializeApp({
  credential: cert(serviceAccount),
  projectId: 'bryanapi',
});

const streamClient = new StreamClient(
  process.env.STREAM_API_KEY,
  process.env.STREAM_API_SECRET
);

// Rota para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.json({
    message: 'APIbryan está funcionando!'
  });
});

// Gerar token seguro do Stream
app.post('/stream/token', async (req, res) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Token de autenticação não informado.'
      });
    }

    const firebaseToken = authorization.split(' ')[1];

    const decodedToken = await getAuth().verifyIdToken(
      firebaseToken
    );

    const userId = decodedToken.uid;

    const token = streamClient.generateUserToken({
      user_id: userId,
      validity_in_seconds: 3600,
    });

    return res.json({
      token,
      userId,
      apiKey: process.env.STREAM_API_KEY,
    });

  } catch (error) {
    console.error('Erro ao gerar token:', error);

    return res.status(401).json({
      error: 'Não foi possível autenticar o usuário.'
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`APIbryan rodando na porta ${PORT}`);
});
