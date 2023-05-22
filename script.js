// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBLpXi2ccb_gKWV-JslBvluo949pSDCAnAJyKaks2sexgPjoUwxaGubKbg5LICQZQwAdqWhfS3NtCc8Js0S6oYjYbjuJYtUP2XsesiiJ3yQlW8Scnr0_zMSyPH9H8-W-AOk7qtN70eikt0XZKFthyqsgdbZsBQJu929R-3UleeS5dq1M7k4b5saY-r1IN8-H9DR-OtZJJoMFGUxp0zgbdYQPubRbpzGNDte7w2qUOGBrwdtmG2g1Ll9tkOW0huD-p-6t6zIKHT0e9-va_fQPQ';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();


const data = topTracks?.map(
  ({ name, artists }) =>
    `${name} by ${artists.map(artist => artist.name).join(', ')}`
)

console.log(data)