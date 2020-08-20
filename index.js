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