import { DogDoor } from "../lib/DogDoor";
import { Remote } from "../lib/Remote";

let door = new DogDoor();
let remote = new Remote(door);

console.log('\nFrido barks to go outside...');
remote.pressButton();

console.log('\nFrido has gone outside');

console.log('\nFrido\'s all done...');

console.log('\nFrido\'s back inside...');