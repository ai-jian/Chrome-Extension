let myLeads = []
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const tabBtn = document.querySelector('#tab-btn')
const deleteBtn = document.querySelector('#delete-btn')
const ulEl = document.querySelector('#ul-el')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leadsArr) {

    let listItems = ''
    for (i = 0; i < leadsArr.length; i++) {
        // or ulEl.innerHTML += `<li> ${leadsArr[i]}</li> `
        listItems += `
        <li>
            <a href='http://${leadsArr[i]}' target='_blank'>
                ${leadsArr[i]}
            </a>
        </li> 
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    console.log(localStorage.getItem('myLeads'))
    render(myLeads)
})
