
const button = document.querySelector('.btn')
const div = document.querySelector('.joke')


function getRequest() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
    

    xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText)
        div.innerHTML = data.value
    } else {
        div.innerHTML = 'Something went wrong'
    }
    }
    xhr.send()
}

button.addEventListener('click', getRequest)