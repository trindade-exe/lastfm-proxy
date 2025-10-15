type: "module";
export default async function handler(req, res) {
  const username = req.query.user || "gort4";
  const apiKey = "59ffdc62f95a983d45e802d4cb7441ed";

  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do Last.fm" });
  }
}
