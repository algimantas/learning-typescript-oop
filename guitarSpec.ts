import { Builder, Type, Wood } from "./types";

export class GuitarSpec {
    constructor(readonly builder: Builder, readonly model: string, readonly type: Type, readonly backWood: Wood,
        readonly topWood: Wood) { }
}