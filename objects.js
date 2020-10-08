var playlist = { MarineBoudeau: "Something" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist) {
  delete playlist[artistName]
  return playlist
} 



