console.log('hello world detail')
const postBox = document.getElementById('post-box')
const backBtn = document.getElementById('back-btn')
const updateBtn=document.getElementById('update-btn')
const deleteBtn=document.getElementById('delete-btn')

const url = window.location.href + "data/"
const updateUrl= window.location.href + "/update"
const deleteUrl= window.location.href + "/delete"

const updateForm = document.getElementById('update-form')
const deleteForm = document.getElementById('delete-form')


const spinnerBox = document.getElementById('spinner-box')

const titleInput = document.getElementById('id_title')
const bodyInput = document.getElementById('id_body')

const csrf = document.getElementsByName('csrfmiddlewaretoken')

backBtn.addEventListener('click', ()=>{
    history.back()
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response)
        const data = response.data

        if (data.logged_in !== data.author){
            console.log('different')
        }else{
            console.log('the same') 
            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')
        }

        const titleEL = document.createElement('h3')
        titleEL.setAttribute('class','mt-3')
        titleEL.setAttribute('id','title')

        const bodyEL = document.createElement('p')
        bodyEL.setAttribute('class','mt-1')
        bodyEL.setAttribute('id','body')

        titleEL.textContent = data.title
        bodyEL.textContent = data.body

        postBox.appendChild(titleEL)
        postBox.appendChild(bodyEL)

        titleInput.value= data.title
        bodyInput.value = data.body

        spinnerBox.classList.add('not-visible')
    },

    error: function(error){
        console.log(error);
    }
    
})

updateForm.addEventListener('submit', e=>{
    e.preventDefault()
    const title = document.getElementById('title')
    const body = document.getElementById('body')
    

    $.ajax({
        type : 'POST',
        url: updateUrl,
        data: {
            'csrfmiddlewaretoken': csrf[0].value,
            'title': titleInput.value,
            'body': bodyInput.value,
        },
        success: function(response){
            console.log(response)
        },
        error: function(error){
            console.log(error)
        }


    })



})