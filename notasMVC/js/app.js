var alunos = ["Daniel", "Maria", "Jose"];
alunos = alunos.map(aluno => new Aluno(aluno));

alunos[0].adicionarNotas(5,2,3,8);
alunos[1].adicionarNotas(4,6,1,2);
alunos[2].adicionarNotas(7,4,2,10);

var listaAlunos = new ListaAlunos(alunos);

var listaAlunosView = new ListaAlunosView('#listaAlunos');
listaAlunosView.atualiza(listaAlunos);

var listaAlunosController = new ListaAlunosController(listaAlunos, listaAlunosView);