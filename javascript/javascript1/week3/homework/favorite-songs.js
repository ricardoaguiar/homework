const songDatabase = [
  { songId: 1, title: "Drive", artist: "The Cars" },
  { songId: 2, title: "When Doves Cry", artist: "Prince" },
  { songId: 3, title: "Butterfly", artist: "Crazy Town" },
  { songId: 4, title: "The Way I Are", artist: "Timbaland" }
];

const songList = [
  { songId: 5, title: "Save a prayer", artist: "Duran Duran" },
  { songId: 6, title: "Shelshok", artist: "New Order" },
  { songId: 7, title: "New Years Day", artist: "U2" },
  { songId: 1, title: "Sunday Blood Sunday", artist: "U2" }
];

function checkSongId(songIdCheck) {
  for (let i = 0; i < songDatabase.length; i++) {
    songIdCheck = songDatabase[i].songId; //read the songId from songDb

    //     console.log(songIdCheck, 'song Db id'); //log each songId
    //     console.log(songListIdCheck, 'songList ids');

    console.log(songIdCheck, "song Db id");
  }
  return songIdCheck;
}

function getNewSong(obj) {
  for (let x = 0; x < songList.length; x++) {
    songId = songList[x].songId;
    title = songList[x].title;
    artist = songList[x].artist;

    let songListId = checkSongId;

    if (checkSongId !== songId) {
      //not working as expected
      songId++;
    }

    obj = songDatabase.push({ songId, title, artist });
  }
  console.log(obj, "object log");
  return obj; //return the songList Object
}

console.log(checkSongId());
console.log("songDB \n", songDatabase);
console.log(getNewSong());
