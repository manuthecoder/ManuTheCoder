// One-time helper to obtain a SPOTIFY_REFRESH_TOKEN.
// 1. Add this route's URL (e.g. http://localhost:3000/api/spotify-auth) as a
//    Redirect URI in your Spotify app settings.
// 2. Visit /api/spotify-auth, approve, and copy the refresh_token it prints.

export async function GET(request: Request) {
  const url = new URL(request.url);
  const redirectUri = `https://127.0.0.1:3000/user/currently-playing/finish`;
  const code = url.searchParams.get("code");

  if (!code) {
    const authorizeUrl = new URL("https://accounts.spotify.com/authorize");
    authorizeUrl.search = new URLSearchParams({
      response_type: "code",
      client_id: process.env.SPOTIFY_CLIENT_ID!,
      scope: "user-read-currently-playing",
      redirect_uri: redirectUri,
    }).toString();
    return Response.redirect(authorizeUrl.toString());
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        btoa(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
        ),
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
  });

  return Response.json(await response.json());
}
