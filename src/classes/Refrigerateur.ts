import { IObserver } from "../interfaces/IObserver";

export class Refrigerateur implements IObserver {
    constructor(private name: string) { }
    update(temp: number) {
        if (temp < 0) {
            console.log('Arrêt du réfrigérateur', this.name)
        }
    }
}