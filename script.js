const addButton = document.querySelector('.add__button')
const input = document.querySelector('.todo__input')
const listText = document.querySelector('.text__list')


function addText() {
if (input.value  !== '') {

    const newListItem = document.createElement('li')
    const newCheckBox = document.createElement('input')
    const newCheckText = document.createElement('lable')
    const closeX = document.createElement('p')
    const container = document.createElement('div')
    const containerText = document.createElement('div')
    const labelCheckBox = document.createElement('span')

    closeX.className = 'close'
    newCheckBox.className = 'check__box'
    newCheckText.className = 'check__text'
    labelCheckBox.className = 'check__lable'
    newListItem.className = 'list__container'
    newCheckBox.type = ('checkbox')

    closeX.textContent = '᛭'
    newCheckText.textContent = input.value
    
    labelCheckBox.appendChild(newCheckBox)
    containerText.appendChild(labelCheckBox)
    labelCheckBox.appendChild(newCheckText)
    newListItem.appendChild(containerText)
    listText.appendChild(newListItem)
    newListItem.appendChild(container)
    container.appendChild(closeX)

    newListItem.style.width = '50%'

    input.value = ''

    closeX.addEventListener('click', () => {   
        newListItem.remove()
    })


    
    newCheckBox.addEventListener('change', (event) => {
        if (newCheckBox.checked) {
            newCheckBox.closest('.check__lable').querySelector('.check__text').classList.add('checkbox__on')
        } else {
            newCheckBox.closest('.check__lable').querySelector('.check__text').classList.remove('checkbox__on')
        }
    })

    } else {
        alert('Введите текст');
    } 
}
addButton.addEventListener('click', addText)