
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const { StreamClient } = require('@stream-io/node-sdk');

const STREAM_API_KEY = 'sm4nkh5qxnnh';
const STREAM_API_SECRET = defineSecret('STREAM_API_SECRET');

exports.gerarTokenStream = onCall(
  {
    region: 'southamerica-east1',
    secrets: [STREAM_API_SECRET],
  },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError(
        'unauthenticated',
        'Você precisa estar logado.'
      );
    }

    try {
      const userId = request.auth.uid;

      const serverClient = new StreamClient(
        STREAM_API_KEY,
        STREAM_API_SECRET.value()
      );

      const token = serverClient.generateUserToken({
        user_id: userId,
        validity_in_seconds: 3600,
      });

      return {
        token,
        userId,
        apiKey: STREAM_API_KEY,
      };
    } catch (error) {
      console.error('Erro ao gerar token:', error);

      throw new HttpsError(
        'internal',
        'Não foi possível gerar o token do chat.'
      );
    }
  }
);
