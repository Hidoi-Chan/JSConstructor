import {Site} from './site'
import {Sidebar} from './sidebar'

export class App {
    constructor(model) {
        this.model = model
    }

    init() {

        const site = new Site('#site')
        site.renderContent(this.model)
        
        const updateCallback = newBlock => {
            this.model.push(newBlock)
            site.renderContent(this.model)
        }
        
        new Sidebar('#panel', updateCallback)

    }
}