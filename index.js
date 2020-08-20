const button_submit = document.querySelector('.button-submit')
const form = document.querySelector('form')

button_submit.addEventListener('click', (event) => {
    event.preventDefault()

    // realizar a validação de campos
    const fields = [...document.querySelectorAll('.form input')]

    /* 
    *  quando clicar no button, ele vai entrar aqui e pesquisar
    *  e caso tenha um campo vazio, será adicionado o validate-error
    *  e caso nao tenha ele adiciona de volta o form-hide 
    */
    fields.forEach(field => {
        if( field.value === '') {
            form.classList.add('validate-error')
        }
    })

    const form_error = document.querySelector('.validate-error')
    if(form_error) {
        form_error.addEventListener('animationend', event => {
            if(event.animationName === 'is-empty') {
                form_error.classList.remove('validate-error')
            }
        })
    } else {
        form.classList.add('form-hide')   
    }
    // final da validação de campos


})


form.addEventListener('animationstart', event => {
    if(event.animationName === 'desappear') {
        document.querySelector('body').style.overflow = 'hidden'
    }
})

form.addEventListener('animationend', event => {
    if(event.animationName === 'desappear') {
        form.style.display = 'none'
        document.querySelector('body').style.overflow = 'none'
    }
})


// logic for the background squares
const ul_squares = document.querySelector('ul.squares')

for (let i = 0; i < 12; i++) {
    const li = document.createElement('li')
    const random = (max, min) => Math.floor(Math.random() * (max - min) + min)

    // fazendo as estilizacoes dos quadrados diferentes para cada um
    const size = Math.floor(random(180, 10))

    // posicionamento diferente na tela
    const position = random(99, 1)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`

    li.style.left = `${position}%`

    // sair em momentos e ter durações diferentes
    const delay = random(4, 0.1)
    const duration = random(20, 10)

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`

    // terem timing diferente
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

    ul_squares.appendChild(li)
}