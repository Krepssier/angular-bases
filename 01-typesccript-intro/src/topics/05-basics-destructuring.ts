


interface AudioPlayer {
    audioVolume : number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Edd Sheeran",
        year: 2015
    }
}


// Este código es muy repetitivo y tedioso, por lo que es mejor usar la desestructuración


// console.log('Song: ', audioPlayer.song);
// console.log('Duration: ', audioPlayer.songDuration);
// console.log('Author: ', audioPlayer.details.author);


// const {song} = audioPlayer;
// const {songDuration: duration} = audioPlayer;


// console.log(song);
// console.log(duration);

// const {
//     song: anotherSong, 
//     songDuration: duration
// } = audioPlayer;

// Cuando utilizamos la desestructuración tenemos la oportunidad de cambiar
//el nombre a la variable mediante los : 
// const song = 'New Song';

//  const {
//      song, 
//      songDuration : duration, 
//      details
//  } = audioPlayer;

//  const {author} = details;

 const {
    song, 
     songDuration : duration, 
     details :{author: nameAuthor}
 } = audioPlayer;

 //otra forma

// const {
//          song: anotherSong, 
//          songDuration : duration, 
//          details
//      } = audioPlayer;

// const {author: author2} = details;


console.log(song);
console.log(nameAuthor);
console.log(duration);
// console.log(author2);


 const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

 const trunks = dbz[3] || 'No hay personaje';
 console.error('Personaje 3:', trunks);


const [p1, p2, trunks2]: string[] = ['Goku', 'vegeta', 'Trunks'];
console.error('Personaje 3:', trunks2 );

console.log(p1, p2);

const [, , trunks3 = 'notFound'] : string[] = ['Goku', 'vegeta']
console.error('Personaje 3:', trunks3 );






// const elements: number[] = [5, 2];
// const [first, second] = elements;


// const elements: number[] = [5, 4, 3, 2];
// const [first, second] = elements;

const elements: number[] = [5, 4, 3, 2];
const [first, , third] = elements;





console.log(first, third);


let a: number = 10;
let b: number = 5;
//intercambiamos valores
[a, b] = [b, a];



let aux: number = a;
a = b;
b = aux;










