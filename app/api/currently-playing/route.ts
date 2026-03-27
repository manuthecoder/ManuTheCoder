export const revalidate = 10;

export async function GET() {
  const response = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
          ),
      },
    },
  );

  const { access_token } = await response.json();

  // get currently playing track
  const currentlyPlayingResponse = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  ).then((r) => r.json());

  return Response.json(currentlyPlayingResponse);
}
