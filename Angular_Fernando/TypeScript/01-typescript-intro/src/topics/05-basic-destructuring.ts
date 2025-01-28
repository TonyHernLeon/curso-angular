interface Details{
    author: string;
    year:number;
}
interface AudioPlayer{
    audioVolumne: number;
    songDuration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    audioVolumne: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
const song = 'New Song';
// Desectructutración de Objetos
const { song:anotherSong, songDuration:anotherSongDuration, details} = audioPlayer;
const { author,  year} = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', anotherSongDuration);
// console.log('Author: ', audioPlayerAuthor);

// Desectructuracion de Arrays
const [p1,p2,trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3:',trunks)





export{};