function createNode(element) {
    return document.createElement(element); 
}

function append(parent, el) {
    return parent.appendChild(el); 
}

const ul = document.getElementById('people');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let people = data;

        return people.map(function(person) {
            let li = createNode('li')
                span = createNode('span');

            li.innerHTML = person.name;
            span.innerHTML = person.email;

            append(li, span);
            append(ul, li);

        });
    })

const btn = document.createElement('input')
btn.type = 'button'
btn.value = 'clearCache'
document.body.appendChild(btn)

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users', {method: 'POST', body: {}})
     .then(res => res.json()).then(data => console.log(data))
}) 