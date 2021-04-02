import { DogDoor } from "./DogDoor";

export class BarkRecognizer {
    constructor(private readonly door: DogDoor) {}

    recognize(bark: string) {
        console.log(' BarkRecognizer: Heard a `' + bark + '`');
        this.door.open();
    }
}