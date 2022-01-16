import { IObserver } from "../interfaces/IObserver";
import { Temperature } from "./Temperature";

export class Climatiseur implements IObserver {
    private htmlDiv: HTMLDivElement
    
    constructor(private name: string, tempObs: Temperature) {
        let climContainer = document.querySelector('.clim-container') as HTMLDivElement
        let div = document.createElement('div')
        div.className = 'clim-item'
        let climDiv = document.createElement('div')
        climDiv.innerText = this.name
        let p = document.createElement('p')
        p.id = this.name
        p.style.fontSize = "12px"
        p.style.textAlign = "center"
        let btn = document.createElement('button')
        btn.innerText = "Désactiver"
        btn.className = "disable"
        btn.addEventListener('click', (e: Event) => {
            if (btn.innerText === "DÉSACTIVER") {
                btn.innerText = "ACTIVER"
                btn.className = "enable"
                btn.setAttribute('title', 'Cliquer pour activer')
                tempObs.unsubscribe(this)
                div.setAttribute("style", "background-color: #870404;")
            } else {
                btn.innerText = "DÉSACTIVER"
                btn.className = "disable"
                btn.setAttribute('title', 'Cliquer pour désactiver')
                tempObs.subscribe(this)
                div.setAttribute("style", "background-color: green;")
            }
        })
        div.append(climDiv)
        div.append(p)
        div.append(btn)
        climContainer.appendChild(div)
        this.htmlDiv = climContainer
        console.log(this.htmlDiv);
    }

    update(temp: number) {
        let climState = document.querySelector('#'+this.name) as HTMLParagraphElement
        if (temp > 35) {
            climState.innerText = `Démarrage du clim ${this.name}`
            climState.style.color = "#1cf31c"
        } else {
            climState.innerText = 'Température ambiante supportable'
            climState.style.color = "#e9c81e"
        }
    }
}