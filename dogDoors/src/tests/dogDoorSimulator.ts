import { DogDoor } from "../lib/DogDoor";
import { Remote } from "../lib/Remote";

let door = new DogDoor();
let remote = new Remote(door);

console.log('\nFrido barks to go outside...');
remote.pressButton();

console.log('\nFrido has gone outside');
remote.pressButton();

console.log('\nFrido\'s all done...');
remote.pressButton();

console.log('\nFrido\'s back inside...');
remote.pressButton();