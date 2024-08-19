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

console.log(myCollection);
addToCollection('Census Designated', 'Jane Remover', '2023');
addToCollection('Flash in the Pan', 'Jane Remover', '2024');
addToCollection('Remote Echoes', 'Duster', '2023');
addToCollection('Moods, Modes', 'Duster', '2023');
addToCollection('AMAMA', 'Crumb', '2024');
addToCollection('King of Hearts', 'Camu Tao', '2010');
console.log(myCollection);







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
