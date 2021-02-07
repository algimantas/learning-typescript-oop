import { DogDoor } from "./DogDoor";

export class Remote {
    constructor(private readonly door: DogDoor) {}

    pressButton() {
        console.log('Pressing the remove control button...');

        if (this.door.isOpen()) {
            this.door.close();
        } else {
            this.door.open();

            setTimeout(() => this.door.close(), 5000);
        }
    }
}