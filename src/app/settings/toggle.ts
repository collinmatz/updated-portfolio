// class to encaspulate a toggle's state, title, and any other necessary info

export class Toggle {
    title: string;
    state: boolean;

    constructor(title: string, initState: boolean = false) {
        this.title = title;
        this.state = initState;
    }
}