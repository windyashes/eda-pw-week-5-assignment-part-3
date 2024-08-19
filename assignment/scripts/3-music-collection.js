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
// if showCollection is passed a boolean value of true, it will print out the track list.
// If it is only passed an array or if the boolean value is false, then showCollection
// will only print out the album's names, artists, and years published.
function showCollection(collection, showTracklist){
  if(collection.length === 0){
    console.log('No collection to show.');
    return;
  }
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
}function search(collection, searchCriteria){
  let matches = [];
  if(searchCriteria === undefined || searchCriteria.artist === undefined || searchCriteria.yearPublished === undefined){
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
addToCollection(myCollection, 'Census Designated', 'Jane Remover', '2023', tracks = [
 {name: 'Cage Girl / Camgirl', duration: ''},
 {name: 'Lips', duration: ''},
 {name: 'Fling', duration: ''},
 {name: 'Holding a Leech', duration: ''},
 {name: 'Backseat Girl', duration: ''},
 {name: 'Idling Somewhere', duration: ''},
 {name: 'Always Have Always Will', duration: ''},
 {name: 'Census Designated', duration: ''},
 {name:'Video', duration: ''},
 {name: 'Contingency Song (Album Version)', duration: ''}
]);
addToCollection(myCollection, 'Flash in the Pan', 'Jane Remover', '2024', tracks = [
  {name: 'Flash in the Pan', duration: ''},
  {name: 'Dream Sequence', duration: ''}
]);
addToCollection(myCollection, 'Remote Echoes', 'Duster', '2023', tracks = [
  {name: 'Before the Veil', duration: ''},
  {name: 'Cigarettes and Coffee', duration: ''},
  {name: 'The Weed Supreme', duration: ''},
  {name: 'Untitled 59', duration: ''},
  {name: 'I Know I Won\'t', duration: ''},
  {name: 'Moon In Aries', duration: ''},
  {name: 'Glue', duration: ''},
  {name: 'Testphase', duration: ''},
  {name: 'Lost Time', duration: ''},
  {name: 'Strange', duration: ''},
  {name: 'The Mood', duration: ''},
  {name: 'Country Heather', duration: ''},
  {name: 'Untitled 84', duration: ''},
  {name: 'Darby', duration: ''}
]);
addToCollection(myCollection, 'Moods, Modes', 'Duster', '2023', tracks = [
  {name: 'Orbitron', duration: ''},
  {name: 'Fuzz and Timbre', duration: ''},
  {name: 'My Friends are Cosmonauts', duration: ''},
  {name: 'Closer to the Speed of Sound', duration: ''},
  {name: 'Stars Will Fall', duration: ''},
  {name: 'Light Years', duration: ''},
  {name: 'Four Hours', duration: ''},
  {name: 'Echo, Bravo', duration: ''},
  {name: 'What You\'re Doing to Me', duration: ''}
]);
addToCollection(myCollection, 'AMAMA', 'Crumb', '2024', tracks = [
  {name: 'From Outside a Window Sill', duration: ''},
  {name: 'Side By Side', duration: ''},
  {name: 'The Bug', duration: ''},
  {name: 'AMAMA', duration: ''},
  {name: 'Genie', duration: ''},
  {name: 'Crushxd', duration: ''},
  {name: 'Nightly News', duration: ''},
  {name: '(Alone in) Brussels', duration: ''},
  {name: 'Sleep Talk', duration: ''},
  {name: 'Dust Bunny', duration: ''},
  {name: 'Swarmed', duration: ''},
  {name: 'XXX', duration: ''},
]);
addToCollection(myCollection, 'King of Hearts', 'Camu Tao', '2010', tracks = [
  {name: 'Be a Big Girl', duration: ''},
  {name: 'Bird Flu', duration: ''},
  {name: 'Death', duration: ''},
  {name: 'Fonny Valentine', duration: ''},
  {name: 'Actin a Ass', duration: ''},
  {name: 'Get at You', duration: ''},
  {name: 'Ind of the Worl', duration: ''}, //yes it's spelled that way
  {name: 'Intervention', duration: ''},
  {name: 'King of Hearts', duration: ''},
  {name: 'Major Team', duration: ''},
  {name: 'Plot a Little', duration: ''},
  {name: 'The Moment', duration: ''},
  {name: 'The Perfect Plan', duration: ''},
  {name: 'Play O Run', duration: ''},
  {name: 'When You\'re Going Down', duration: ''},
  {name: 'Kill Me', duration: ''}
]);
console.log(myCollection);
showCollection(myCollection);

showCollection(findByArtist(myCollection, 'Crumb'), true);
showCollection(findByArtist(myCollection, 'Jane Remover'), true);
showCollection(findByArtist(myCollection, 'The Breathing Effect'), true);

  console.log('Searching for albums under Duster and 2023...');
    showCollection(search(myCollection, {artist: 'Duster', yearPublished: '2023'}), true);



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
