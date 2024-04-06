console.log('hello world detail')
const postBox = document.getElementById('post-box')
const backBtn = document.getElementById('back-btn')
const updateBtn=document.getElementById('update-btn')
const deleteBtn=document.getElementById('delete-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')

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

        const bodyEL = document.createElement('p')
        bodyEL.setAttribute('class','mt-1')

        titleEL.textContent = data.title
        bodyEL.textContent = data.body

        postBox.appendChild(titleEL)
        postBox.appendChild(bodyEL)


        spinnerBox.classList.add('not-visible')
    },

    error: function(error){
        console.log(error);
    }
    
})