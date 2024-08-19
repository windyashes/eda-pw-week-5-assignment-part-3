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
function showCollection(collection){
  for(let i = 0; i < collection.length; i++){
    console.log(`"${collection[i].title}" by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  }
}
function showTracks(album){
  for(let i = 0; i < album.tracks.length; i++){
    console.log(album.tracks[i]);
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
  'Cage Girl / Camgirl',
  'Lips',
  'Fling',
  'Holding a Leech',
  'Backseat Girl',
  'Idling Somewhere',
  'Always Have Always Will',
  'Census Designated',
  'Video',
  'Contingency Song (Album Version)'
]);
addToCollection(myCollection, 'Flash in the Pan', 'Jane Remover', '2024', tracks = [
  'Flash in the Pan',
  'Dream Sequence'
]);
addToCollection(myCollection, 'Remote Echoes', 'Duster', '2023', tracks = [
  'Before the Veil',
  'Cigarettes and Coffee',
  'The Weed Supreme',
  'Untitled 59',
  'I Know I Won\'t',
  'Moon In Aries',
  'Glue',
  'Testphase',
  'Lost Time',
  'Strange',
  'The Mood',
  'Country Heather',
  'Untitled 84',
  'Darby'
]);
addToCollection(myCollection, 'Moods, Modes', 'Duster', '2023', tracks = [
  'Orbitron',
  'Fuzz and Timbre',
  'My Friends are Cosmonauts',
  'Closer to the Speed of Sound',
  'Stars Will Fall',
  'Light Years',
  'Four Hours',
  'Echo, Bravo',
  'What You\'re Doing to Me'
]);
addToCollection(myCollection, 'AMAMA', 'Crumb', '2024', tracks = [
  'From Outside a Window Sill',
  'Side By Side',
  'The Bug',
  'AMAMA',
  'Genie',
  'Crushxd',
  'Nightly News',
  '(Alone in) Brussels',
  'Sleep Talk',
  'Dust Bunny',
  'Swarmed',
  'XXX',
]);
addToCollection(myCollection, 'King of Hearts', 'Camu Tao', '2010', tracks[
  'Be a Big Girl',
  'Bird Flu',
  'Death',
  'Fonny Valentine',
  'Actin a Ass',
  'Get at You',
  'Ind of the Worl', //yes it's spelled that way
  'Intervention',
  'King of Hearts',
  'Major Team',
  'Plot a Little',
  'The Moment',
  'The Perfect Plan',
  'Play O Run',
  'When You\'re Going Down',
  'Kill Me'
]);
console.log(myCollection);
showCollection(myCollection);

showCollection(findByArtist(myCollection, 'Crumb'));
showCollection(findByArtist(myCollection, 'Jane Remover'));
console.log('Showing tracklist for "Census Designated" by Jane Remover');  
  showTracks(myCollection[0]);
showCollection(findByArtist(myCollection, 'The Breathing Effect'));
console.log('Search function test:');
  console.log('Searching for albums under Duster and 2023...');
    showCollection(search(myCollection, {artist: 'Duster', yearPublished: '2023'}));



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
