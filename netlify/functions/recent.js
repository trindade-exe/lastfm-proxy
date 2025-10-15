import fetch from 'node-fetch';

export async function handler(event, context) {
  const username = event.queryStringParameters.user || 'gort4';
  const apiKey = '59ffdc62f95a983d45e802d4cb7441ed';
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao buscar dados do Last.fm' }),
    };
  }
}
