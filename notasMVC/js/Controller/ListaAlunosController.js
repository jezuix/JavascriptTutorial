class ListaAlunosController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.$seletor.addEventListener('click', this.editarAluno.bind(this));
    }

    editarAluno(e) {
        let target = e.target;

        while (target !== e.currentTarget) {
            if (target.getAttribute('data-id')) {
                break;
            }
            target = target.parentNode;
        }

        console.log(target);

        if (target) {
            let _id = parseInt(target.getAttribute('data-id'));
            let _notas = prompt('Digite as novas notas separadas por virgulas');
            _notas = _notas.split(',').map(nota => parseFloat(nota));
            
            let aluno = this.model.obterPorId(_id);
            aluno.atualizarNotas(_notas);

            this.view.atualiza(this.model);
        }
    }
}