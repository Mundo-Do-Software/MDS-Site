export class Image {
    src: string;
    alt: string;
    title: string;
    link: string;

    constructor(src: string, 
                alt: string,
                title: string,
                link: string){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.link = link;
    }
}