class View {
    constructor(seletor) {
        this.$seletor = blg.$(seletor);
    }

    getTemplate() {
        throw new Error('Método getTemplate deve ser implementado pela classes que herdam View');
    }
}