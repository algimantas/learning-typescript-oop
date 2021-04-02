import { DogDoor } from "../lib/DogDoor";
import { Remote } from "../lib/Remote";
import { BarkRecognizer } from "../lib/BarkRecognizer";

function fridoFoolingAroundFor(miliseconds: number) {
    return new Promise<void>(resolve => {
        setTimeout(() => resolve(), miliseconds);
    });
}

(async () => {
    let door = new DogDoor();
    let recognizer = new BarkRecognizer(door);
    let remote = new Remote(door);

    console.log('\nFrido barks to go outside...');
    recognizer.recognize('Woof');

    console.log('\nFrido has gone outside');

    await fridoFoolingAroundFor(10000);

    console.log('\nFrido\'s all done...');
    console.log('... but he\'s stuck outside.');

    console.log('\nFrido starts barking...');
    recognizer.recognize('Woof');

    console.log('\nFrido\'s back inside...');
})();