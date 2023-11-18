export class Slide {
    isActive: boolean = false;
    content: string[] = [];

    constructor(content: string[]) {
        this.content = content;
    }
}