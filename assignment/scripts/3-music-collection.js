console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished, tracks){
 let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished,
  tracks: tracks
 }
 collection.push(album);
 return album;
}

function showCollection(collection, showTracklist){
  if(collection.length === 0){
    console.log('No collection to show.');
    return;
  }
    // If showCollection is passed a boolean value of true, it will print out the track list.
    // If it is only passed an array or if the boolean value is false, then showCollection
    // will only print out the album's names, artists, and years published.
  if(showTracklist === undefined || showTracklist === false){
    for(let i = 0; i < collection.length; i++){
      console.log(`"${collection[i].title}" by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }
  } else {
    for(let i = 0; i < collection.length; i++){
      console.log(`"${collection[i].title}" by ${collection[i].artist}, published in ${collection[i].yearPublished}
      Tracklist:`);
      showTracks(collection[i])
    }
  }
}
function showTracks(album){
  for(let i = 0; i < album.tracks.length; i++){
    console.log(`${i+1}. ${album.tracks[i].name} : ${album.tracks[i].duration}`);
  }
}
function findByArtist(collection, artist){
  let matches = [];
  console.log(`Looking for albums by ${artist}...`);
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === artist){
      matches.push(collection[i]);
    }
  }
  return matches;
}
function search(collection, searchCriteria, trackName){
  let matches = [];
  if(trackName != undefined){
    for(let i = 0; i < collection.length; i++){
      for(let j = 0; j < collection[i].tracks.length; j++){
        if(collection[i].tracks[j].name === trackName){
          matches.push(collection[i]);
          j = collection[i].tracks.length
        }
      }
    }
    return matches;
  } else if(searchCriteria === undefined || searchCriteria.artist === undefined || searchCriteria.yearPublished === undefined){
    //checks if object has properties
    return collection;
  } else if (searchCriteria.artist === null || searchCriteria.yearPublished === null){
    //checks if properties are set
    return collection;
  } else if (searchCriteria.artist === '' || searchCriteria.yearPublished === ''){
    //checks if set properties are empty
    return collection;
  }

  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished){
      matches.push(collection[i]);
    }
  }
  return matches;
}
console.log(myCollection);
// part of me wants to put every single album I love here but I stuck to just selecting a handful
// of ones I've listened to more recently, because if I put in every single album I like it would
// take forever and there would probably end up being hundreds of lines of code lol

// also the durations are all made up because I couldn't be bothered to go back and get all of the real ones.
addToCollection(myCollection, 'Census Designated', 'Jane Remover', '2023', tracks = [
 {name: 'Cage Girl / Camgirl', duration: '1:00'},
 {name: 'Lips', duration: '2:30'},
 {name: 'Fling', duration: '1:30'},
 {name: 'Holding a Leech', duration: '7:00'},
 {name: 'Backseat Girl', duration: '5:20'},
 {name: 'Idling Somewhere', duration: '4:00'},
 {name: 'Always Have Always Will', duration: '9:00'},
 {name: 'Census Designated', duration: '2:15'},
 {name:'Video', duration: '5:30'},
 {name: 'Contingency Song (Album Version)', duration: '6:50'}
]);
addToCollection(myCollection, 'Flash in the Pan', 'Jane Remover', '2024', tracks = [
  {name: 'Flash in the Pan', duration: '3:00'},
  {name: 'Dream Sequence', duration: '2:30'}
]);
addToCollection(myCollection, 'Remote Echoes', 'Duster', '2023', tracks = [
  {name: 'Before the Veil', duration: '1:00'},
  {name: 'Cigarettes and Coffee', duration: '2:00'},
  {name: 'The Weed Supreme', duration: '1:23'},
  {name: 'Untitled 59', duration: '2:34'},
  {name: 'I Know I Won\'t', duration: '4:56'},
  {name: 'Moon In Aries', duration: '3:45'},
  {name: 'Glue', duration: '6:12'},
  {name: 'Testphase', duration: '5:59'},
  {name: 'Lost Time', duration: '2:30'},
  {name: 'Strange', duration: '10:00'},
  {name: 'The Mood', duration: '2:00'},
  {name: 'Country Heather', duration: '3:00'},
  {name: 'Untitled 84', duration: '4:00'},
  {name: 'Darby', duration: '3:00'}
]);
addToCollection(myCollection, 'Moods, Modes', 'Duster', '2023', tracks = [
  {name: 'Orbitron', duration: '0:30'},
  {name: 'Fuzz and Timbre', duration: '2:30'},
  {name: 'My Friends are Cosmonauts', duration: '4:00'},
  {name: 'Closer to the Speed of Sound', duration: '3:00'},
  {name: 'Stars Will Fall', duration: '2:00'},
  {name: 'Light Years', duration: '1:00'},
  {name: 'Four Hours', duration: '5:00'},
  {name: 'Echo, Bravo', duration: '4:20'},
  {name: 'What You\'re Doing to Me', duration: '5:59'}
]);
addToCollection(myCollection, 'AMAMA', 'Crumb', '2024', tracks = [
  {name: 'From Outside a Window Sill', duration: '2:59'},
  {name: 'Side By Side', duration: '6:00'},
  {name: 'The Bug', duration: '5:00'},
  {name: 'AMAMA', duration: '2:00'},
  {name: 'Genie', duration: '3:00'},
  {name: 'Crushxd', duration: '4:30'},
  {name: 'Nightly News', duration: '5:30'},
  {name: '(Alone in) Brussels', duration: '2:30'},
  {name: 'Sleep Talk', duration: '3:30'},
  {name: 'Dust Bunny', duration: '4:30'},
  {name: 'Swarmed', duration: '1:30'},
  {name: 'XXX', duration: '3:33'},
]);
addToCollection(myCollection, 'King of Hearts', 'Camu Tao', '2010', tracks = [
  {name: 'Be a Big Girl', duration: '5:55'},
  {name: 'Bird Flu', duration: '4:44'},
  {name: 'Death', duration: '3:33'},
  {name: 'Fonny Valentine', duration: '2:22'},
  {name: 'Actin a Ass', duration: '1:11'},
  {name: 'Get at You', duration: '0:01'},
  {name: 'Ind of the Worl', duration: '0:02'}, //yes it's spelled that way
  {name: 'Intervention', duration: '0:03'},
  {name: 'King of Hearts', duration: '0:04'},
  {name: 'Major Team', duration: '0:05'},
  {name: 'Plot a Little', duration: '0:06'},
  {name: 'The Moment', duration: '0:07'},
  {name: 'The Perfect Plan', duration: '0:08'},
  {name: 'Play O Run', duration: '0:09'},
  {name: 'When You\'re Going Down', duration: '1:00'},
  {name: 'Kill Me', duration: '0:59'}
]);
console.log(myCollection);
showCollection(myCollection);

showCollection(findByArtist(myCollection, 'Crumb'), true);
showCollection(findByArtist(myCollection, 'Jane Remover'), true);
showCollection(findByArtist(myCollection, 'The Breathing Effect'), true);
// Testing Search
  console.log('Searching for albums under Duster and 2023...');
    showCollection(search(myCollection, {artist: 'Duster', yearPublished: '2023'}), true);
// Testing Search by Track
  console.log('Searching for albums with the track "XXX"...');
    showCollection(search(myCollection, undefined, 'XXX'), true);


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
