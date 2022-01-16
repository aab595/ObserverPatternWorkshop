import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";

export class Temperature implements ISubject {
    private observers: IObserver[] = [];
    
    constructor(private temperature: number) { }

    subscribe(obs: IObserver) {
        this.observers.push(obs)
    }

    unsubscribe(obs: IObserver) {
        const idx = this.observers.indexOf(obs)
        this.observers.splice(idx, 1)
    }

    notifyObservers() {
        for (const oberver of this.observers) {
            oberver.update(this.temperature)
        }
    }

    getTemperature() {
        return this.temperature
    }

    setTemperature(newTemperature) {
        this.temperature = newTemperature
        this.notifyObservers()
    }
}