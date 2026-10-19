// Strava-opsætning for Mandagsholdet. Udfyld de to felter, når Strava-appen og Worker er oprettet (se guiden).
window.STRAVA = {
  clientId: "288826",   // Strava > Settings > My API Application > Client ID (kun tal)
  worker: "https://mandagsholdet-strava.marc-63e.workers.dev",     // Adressen på din Cloudflare Worker, fx https://mandagsholdet-strava.dit-navn.workers.dev
  shareHr: true   // true = alle på holdet kan se hinandens puls og zoner. false = kun atleten selv og coach.
};
