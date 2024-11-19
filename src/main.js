// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
// • Crie uma branch exercicio_es6 no repositório 

const students = [
    {name: 'Mario', grade: 7},
    {name: 'Julia', grade: 10},
    {name: 'Paulo', grade: 4.5},
    {name: 'João', grade: 5},
    {name: 'Thiago', grade: 6},
    {name: 'Mariana', grade: 8.5},
    {name: 'Leticia', grade: 3},
    {name: 'Bruna', grade: 9},
    {name: 'Diego', grade: 2.5},
    {name: 'Felipe', grade: 9.5}
]

const studentsApproved = students.filter((student) => {
    return student.grade >= 6
})

console.log(studentsApproved)
