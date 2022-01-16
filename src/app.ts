import { Temperature } from "./classes/Temperature";
import { Climatiseur } from "./classes/Climatiseur";
import { Refrigerateur } from "./classes/Refrigerateur";

let temp = new Temperature(25)

let tempValue = document.querySelector('#temp-value') as HTMLInputElement
tempValue.addEventListener('change', (e: Event) => {
    temp.setTemperature(tempValue.value)
})

// add clim
let climCounter: number = 0
let addClimBtn = document.querySelector('#add-clim') as HTMLButtonElement
addClimBtn.addEventListener('click', (e: Event) => {
    climCounter++
    const clim = new Climatiseur(`Clim${climCounter}`, temp)
    temp.subscribe(clim)
})