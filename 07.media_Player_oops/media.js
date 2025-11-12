class Media{

    #title;
    #artist;
    #duration;
    #filepath;
    #playcount ;
    #lastplayed;
    #isplaying;
    currentPosition;

    constructor(title , artist, duration , filepath){
        this.#title = title;
        this.#artist = artist;
        this.#duration = duration;
        this.#filepath = filepath;
        this.#playcount = 0;
        this.#lastplayed = null;
        this.#isplaying = false;
        this.currentPosition = 0;
    }

    getTitle(){
        return this.#title;
    }
    getArtist(){
        return this.#artist;
    }
    getFilepath(){  
        return this.#filepath;
    }
    getDuration(){
        return this.#duration;
    }
    getPlayCount(){
        return this.#playcount;
    }
    getLastPlayed(){
        return this.#lastplayed;    
    }
    isCurrentPlaying(){
        return this.#isplaying;
    }
    setCurrentPlaying(bool){
        this.#isplaying = bool;
    }
    getCurrentPosition(){
        return this.currentPosition;
    }

    updatePlayStatics(){
        this.#playcount++;
        this.#lastplayed = new Date();
    }

    play(){
        throw new Error('play() must be implemented by subclass');
    }
    pause(){
        throw new Error('pause() must be implemented by subclass');
    }
    stop(){
        throw new Error('stop() must be implemented by subclass');
    }
    getMediaInfo(){
    return new Error('getMediaInfo() must be implemented by subclass');
    }
    getFormatedDuration(){
        const minutes = Math.floor(this.#duration / 60);
        const seconds = this.#duration % 60 ;
        return `${minutes}:${seconds.toString().padStart(2 , "0")}`
    }

    getProgress(){
        if(this.#duration === 0) return 0;
        return (this.currentPosition / this.#duration) * 100;
    }
}

export default Media;