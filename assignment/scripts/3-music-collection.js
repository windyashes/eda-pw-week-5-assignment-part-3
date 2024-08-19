console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
 let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
 }
 collection.push(album);
 return album;
}
function showCollection(collection){
  for(let i = 0; i < collection.length; i++){
    console.log(`"${collection[i].title}" by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
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
  if(matches == []){
    console.log('None found.');
  }
  return matches;
}
console.log(myCollection);
addToCollection(myCollection, 'Census Designated', 'Jane Remover', '2023');
addToCollection(myCollection, 'Flash in the Pan', 'Jane Remover', '2024');
addToCollection(myCollection, 'Remote Echoes', 'Duster', '2023');
addToCollection(myCollection, 'Moods, Modes', 'Duster', '2023');
addToCollection(myCollection, 'AMAMA', 'Crumb', '2024');
addToCollection(myCollection, 'King of Hearts', 'Camu Tao', '2010');
console.log(myCollection);
showCollection(myCollection);

showCollection(findByArtist(myCollection, 'Crumb'));
showCollection(findByArtist(myCollection, 'Jane Remover'));
showCollection(findByArtist(myCollection, 'The Breathing Effect'));



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
