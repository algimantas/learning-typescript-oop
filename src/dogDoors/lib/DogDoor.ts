export class DogDoor {
    #open: boolean = false;

    open() {
        console.log('The dog door opens.\n');
        this.#open = true;
        setTimeout(() => this.close(), 5000);
    }

    close() {
        console.log('The dog door closes.\n');
        this.#open = false;
    }

    isOpen() {
        return this.#open;
    }
}