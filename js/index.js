const but = document.getElementById('bbu');
const ism = document.getElementById('ism');
const yosh = document.getElementById('yosh');
const forma = document.getElementById('forma');
const listItem = document.querySelector('.list-group');

listItem.addEventListener('click', (e)=> {
    if (e.target.classList.contains("delete")) {
        const li = e.target.parentElement;
        listItem.removeChild(li);
    }
})

const deleteListElem = (e) => {
    listItem.innerHTML = '';
}

but.addEventListener('click', addElement);
function addElement() {
    const li = document.createElement('li');
    if (ism.value.length > 0 && yosh.value > 9) {
        li.classList = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `<span>${ism.value} (${yosh.value} yosh)</span> <button class="btn btn-danger delete">X</button>`;
        listItem.appendChild(li);
        ism.style.borderColor = '#CED4DAFF';
        yosh.style.borderColor = '#CED4DAFF';
        ism.value = '';
        yosh.value = '';
    } else {
        ism.style.borderColor = 'red';
        yosh.style.borderColor = 'red';
    }
}

deleteListElem();


// https://www.youtube.com/shorts/P7JpJfzQdKI