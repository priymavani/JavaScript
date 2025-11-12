import Media from "./media.js";


class AudioFile extends Media{

    #formate;
    #volume;
    #bitrate;
    #isPlay ;

    constructor(title , duration , artist , filepath , formate , bitrate){
        super(title , artist, duration , filepath);
        this.#formate = formate;
        this.#bitrate = bitrate;
        this.#volume = 50; // default volume
        this.#isPlay = false;

    }

    play(){
        this.#isPlay = true;
        this.setCurrentPlaying(this.#isPlay); // too set the varable #isPlaying = true in parent class Media
        this.updatePlayStatics();

        // console.log(`this.isCurrentPlaying(): ${this.isCurrentPlaying()}`);
        return `Playing audio file: ${this.getTitle()} by ${this.getArtist()}`;
        
    }

    pause(){
        this.setCurrentPlaying(false);
        return `Pushing audio ${this.getTitle()}`
    }
    stop(){
        this.setCurrentPlaying(false);
        this.currentPosition = 0;

    }

    getMediaInfo(){
        return{
        title: this.getTitle(),
        artist: this.getArtist(),
        type:'Audio',
        bitrate : this.#bitrate,
        duration: this.getDuration(),
        }
    }

    setVolume(level){
        this.#volume = Math.max(0, Math.min(100, level)); // volume between 0 to 100
        // if level is 120 then it will set to 100
        // if level is -10 then it will set to 0
        // so here max prevent lower limit and min prevent upper limit
        return `Volume set to ${this.#volume}`;

    }
}

const music = new AudioFile("Song 1" , 300 , "Priy Mavani" , "/path/to/songA.mp3" , "mp3" , 320);
console.log(music.play());
console.log(music.pause());






export default AudioFile;



const now = new Date();
console.log(Date()); 
// totalSeconds = 9037;
// const hour = Math.floor(totalSeconds / 3600);
// const min = Math.floor((totalSeconds % 3600) / 60);
// const sec = totalSeconds % 60;
// console.log(`${hour}:${min}:${sec}`); // 2:30:37