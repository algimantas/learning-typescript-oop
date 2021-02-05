import {Builder, Type, Wood} from "./types";

export class Guitar {
    constructor(readonly serialNumber: string, readonly price: number, readonly builder: Builder, readonly model: string,
                readonly type: Type, readonly backWood: Wood, readonly topWood: Wood) {}
}