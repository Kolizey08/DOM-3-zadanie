const add = (arr) => {
const h1 = document.createElement('h1')
h1.textContent = 'Работа с DOM'
return document.body.prepend(h1)
}
console.log(add());

const add2 = (arr2) => {
const a = document.createElement('a')
a.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model'
a.textContent = 'Статья о DOM'
a.target = '_blank'
const div1 = document.querySelector('#main')
div1.append(a)
return div1
}
console.log(add2());

function colorBody (col) {
    document.body.style.backgroundColor = col
}
colorBody('')

const text =  (tex) => {
    const ul = document.querySelector('#list')
    const li = document.createElement('li')
    ul.append(li)
    li.append(tex)
}
text('JavaScript')
text('React')

const delet = () => {
    const cop = document.querySelector('#copyright')
    cop.remove()

}
delet()