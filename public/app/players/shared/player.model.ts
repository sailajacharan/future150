export class Player {
    public _id: string;
    public colleges: any[];
    public news: any[];
    public videos: any[];
    public pictures: any[];

    public constructor() {
        this.colleges = [];
        this.news = [];
        this.videos = [];
        this.pictures = [];
    }
}