//getting element
const searchWrapper = document.querySelector('.search-input');
const inputBox = document.querySelector('input');
const suggBox = document.querySelector('.autocom-box');

let userInput;

const select = function (el) {
    let selectUser = el.textContent;
    selectUser = selectUser.replace(' ', '');
    console.log(selectUser);

    inputBox.value = '';
    searchWrapper.classList.remove('active');
    window.location.href = `${selectUser}-recipe.html`;

} 
//Event Listener 
inputBox.onkeyup = (e) => {
     userInput = e.target.value;
    let listArray = [];

    if (userInput) {
        //fillter array for list of search result
        listArray = suggestions.filter(el => {
            return el.toLocaleLowerCase().startsWith(userInput.toLocaleLowerCase());
        });

        listArray = listArray.map(el => {
            return `<li>${el}</li>`;
        })
    
        showSuggestion(listArray);
        searchWrapper.classList.add('active');
        let allList = suggBox.querySelectorAll('li');

        for (let i = 0; i < allList.length; ++i) {
            //input selected list to
            allList[i].setAttribute('onclick', 'select(this)');
        }

    } else {
        searchWrapper.classList.remove('active');
    }
}

const showSuggestion = function(list) {
    let dataList;
    if (!list.length) {
        userInput = '';
        dataList = '<li>'+userInput +'</li>';
    } else {
        dataList = list.join('');
    }

    suggBox.innerHTML = dataList;
    
}