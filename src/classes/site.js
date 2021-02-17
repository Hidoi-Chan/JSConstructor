export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    renderContent(model) {
        this.$el.innerHTML = ''
        model.forEach(block => this.$el.insertAdjacentHTML('beforeend', block.toHTML()))
    }
}