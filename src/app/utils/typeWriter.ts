import { sleep } from './sleep'

export class TypeWriter {
    current: String;
    target: String;
    delay: number;

    constructor(current: String, target: String, delay: number) {
        this.current = current;
        this.target = target;
        this.delay = delay;
    }

    async write() {
        for (let i = 0; i < this.target.length; ++i) {
            this.current += this.target[i];
            await sleep(this.delay);
        }
    }

    reset() {
        this.current = "";
    }
}