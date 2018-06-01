import { Aluno } from './Model/AlunoModel.js';
import { ListaAlunos } from './Model/ListaAlunosModel.js';
import { ListaAlunosView } from './View/ListaAlunosView.js';
import { FormAdicionaAlunoView } from './View/FormAdicionaAlunoView.js';
import { FormBuscarAlunoView } from './View/FormBuscarAlunoView.js';
import { ListaAlunosController } from './Controller/ListaAlunosController.js';
import { FormAdicionaAlunoController } from './Controller/FormAdicionaAlunoController.js';
import { FormBuscarAlunoController } from './Controller/FormBuscarAlunoController.js';
import { blg } from '../beluga2.js';


var alunos = ["Daniel", "Maria", "Jose"];
alunos = alunos.map(aluno => new Aluno(aluno));

alunos[0].adicionarNotas(5, 2, 3, 8);
alunos[1].adicionarNotas(4, 6, 1, 2);
alunos[2].adicionarNotas(7, 4, 2, 10);

var listaAlunos = new ListaAlunos(alunos);

var listaAlunosView = new ListaAlunosView('#listaAlunos');
listaAlunosView.atualiza(listaAlunos);

var listaAlunosController = new ListaAlunosController(listaAlunos, listaAlunosView);

var formAdicionaAlunoView = new FormAdicionaAlunoView('#form-adiciona');
var formAdicionaAlunoController = new FormAdicionaAlunoController(listaAlunos, formAdicionaAlunoView);

var formBuscarAlunoView = new FormBuscarAlunoView('#form-busca');
var formBuscarAlunoController = new FormBuscarAlunoController(listaAlunos, formBuscarAlunoView);

blg.$('#form-adiciona form').addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = blg.$('#nome').value;
    var notas = [];

    var i = 1;

    while (blg.$('#nota' + i)) {
        notas.push(parseFloat(blg.$('#nota' + i).value));
        i++;
    }

    listaAlunosController.adicionarAluno(nome, notas);
    formAdicionaAlunoController.limpar();
})

blg.$('#form-busca form').addEventListener('submit', function (e) {
    e.preventDefault();
    formBuscarAlunoController.buscarAluno(function (_alunos) {
        listaAlunosController.atualizaLista({
            lista: _alunos
        });
    });
})

blg.$('#btnLimparFiltro').addEventListener('click', function(e){
    formBuscarAlunoController.limparInput();
    listaAlunosController.limparFiltro();
})