/*
 Exercícios Typescrit - Bruno Guedes - MJV ANGULAR

 1 - Crie um tipo para representar um objeto que contenha as suas informações
 nome, profissão, idade e uma lista de assuntos do seu interesse
 
 */

 interface Pessoa {
    nome: string;
    profissao: string;
    idade: number;
    interesse: string[];
 }

 
 //2 - Crie um objeto utilizando o tipo criado no exercício 1 e o poupule de acordo com suas informações.
 

 const bruno: Pessoa = {
    nome: "Bruno",
    profissao: "Desenvolvedor Java / Android ",
    idade: 27,
    interesse: ["Programação", "jogos", "streaming"],

 }

 
 // 3 - Faça uma função que receba como argumento um objeto do tipo exercício 1 e retorne somente a lista de assuntos do objeto


const meusInteresses = (pessoa: Pessoa) => pessoa.interesse;


 //4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 

 const outrosInteresses = (pessoa: Pessoa): Array<string> => pessoa.interesse;


 
  //5 - Crie um enum para representar as matérias do curso de Angular, typescritp e Git.


  enum Materias {
    ANGULAR = "Angular",
    TYPESCRIPT = "Typescritp",
    GIT = "Git",
  }

  
   //6 - Crie mais um tipo para representar os professores, contendo nome e lista das matérias de cada um.


type Professor = {
    nome: string;
    listaMaterias: Array<Materias>;
}


 //7 - Crie os objetos Alan e Nathan utilizando os tipos do exercício 5 e 6.
 

 const alan: Professor = {
    nome: "Alan",
    listaMaterias: [Materias.ANGULAR, Materias.TYPESCRIPT, Materias.GIT]
 }

 const nathan: Professor = {
    nome: "Nathan",
    listaMaterias: [Materias.ANGULAR, Materias.GIT]
 }


 
 //8 - Declare e popule um array com os objetos do exercício 7
 

 const listagemProfessores: Array<Professor> = [alan, nathan];

 
 //9 - Faça uma função que receba um argumento de array de Professor e retorne um novo array de strings contendo somente os nomes dos professores.
 

 const listaNome = (listagemProfessores: Array<Professor>) => listagemProfessores.map((professor) => professor.nome)

 
 //10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias
 
 function retornaMaterias(professor: Professor[]): Materias[] {
   return professor.reduce((Materias, professor) => {
      return Materias.concat(professor.listaMaterias);
   }, [] as Materias []);
 }

 //11 - Faça uma função que receba um argumento de array de Professores e retorne o primeiro professor encontrado que dê aula de Typescript

 function primeiroProfessor(professor: Professor[]): Professor | undefined{
   return professor.find(professor => professor.nome.includes(Materias.TYPESCRIPT));
 }
    
 


