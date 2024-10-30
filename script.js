// Variables Globales

const input = document.getElementById('taskbar');
const btn = document.getElementById('button');
const form = document.getElementById('form')
const toDo = document.getElementById('todo')
const done = document.getElementById('done')
let modify = document.createElement('input')

let para = document.createElement('p')
    form.appendChild(para)
let table = [];

// Fonction du bouton du formulaire et de la liste "à faire"

btn.addEventListener('click', function() 
    {

        para.textContent = ""

        if (input.value.trim() === "") {
            para.textContent = "Vous n'avez pas rempli la case."
        }
        else 
        {   
            if (table.includes(input.value.toLocaleLowerCase()) === true){
                para.textContent = 'Cet élément existe déjà.'
            }
            else 
            {

                table.push(input.value.toLocaleLowerCase())

                let div = document.createElement('div')
                let divbtn = document.createElement('div')
                let btn1 = document.createElement('button')
                let btn2 = document.createElement('button')
                let btn3 = document.createElement('button')
                let btn4 = document.createElement('button')
                let btn5 = document.createElement('button')

                div.textContent = (input.value)

                toDo.appendChild(div)
                div.classList.add('chose')

                div.appendChild(divbtn)
                divbtn.classList.add('btns')

                divbtn.appendChild(btn1)
                btn1.classList.add('btn-done')
                btn1.textContent = ('Terminer')

                divbtn.appendChild(btn2)
                btn2.classList.add('btn-del')
                btn2.textContent = ('Supprimer')

                divbtn.insertBefore(btn4, btn1)
                btn4.classList.add('btn-modif')
                btn4.textContent = ('Modifier')

                // Fonction du bouton "Fait"

                btn1.addEventListener('click', function () 
                    {
                        done.appendChild(div)
                        divbtn.removeChild(btn1)
                        
                        divbtn.insertBefore(btn3, btn2)
                        btn3.classList.add('btn-change')
                        btn3.textContent = ('En cours')
                    }
                )

                // Fonction des boutons "Supprimer"

                btn2.addEventListener('click', function()
                    {
                        toDo.removeChild(div)
                        table.pop(input.value.toLocaleLowerCase())
                    }
                )

                btn2.addEventListener('click', function()
                    {
                        done.removeChild(div)
                        table.pop(input.value.toLocaleLowerCase())
                    }
                )

                // Fonction du bouton "En cours"

                btn3.addEventListener('click', function()
                    {
                        toDo.appendChild(div)
                        divbtn.removeChild(btn3)
                        divbtn.insertBefore(btn1, btn2)
                    }
                )

                // Fonction du bouton Modifier

                btn4.addEventListener('click', function () 
                    {
                        div.insertBefore(modify,divbtn)
                        divbtn.insertBefore(btn5, btn1)
                        btn5.classList.add('btn-modif')
                        modify.classList.add('absolute')
                        btn5.textContent = ('Valider')
                        divbtn.removeChild(btn4)
                        // Pas fini
                    }
                )
            }
        }
    }
)



