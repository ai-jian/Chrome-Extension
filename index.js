let myLeads = []
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const ulEl = document.querySelector('#ul-el')

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})

function renderLeads() {

    let listItems = ''
    for (i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += `<li> ${myLeads[i]}</li> `
        listItems += `
        <li>
            <a href='http://${myLeads[i]}' target='_blank'>
                ${myLeads[i]}
            </a>
        </li> 
        `
    }
    ulEl.innerHTML = listItems
}