import {GuitarSpec} from "./guitarSpec";

export class Guitar {
    constructor(readonly serialNumber: string, readonly price: number, readonly spec: GuitarSpec) {}
}