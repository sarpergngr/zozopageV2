const form = document.querySelector("#motto-form");
const mottoInput = document.querySelector("#motto");
const personInput = document.querySelector("#isim");
const dateInput = document.querySelector("#date");
const mottoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filterMotto = document.querySelector("#filter-motto");
const filterName = document.querySelector("#filter-name");

eventListeners();

function eventListeners(){ //Tüm Event Listenerlar
    form.addEventListener("submit", addMotto);
    document.addEventListener("DOMContentLoaded", loadAllParametersToUI);
    secondCardBody.addEventListener("click",deleteMotto);
    filterMotto.addEventListener("keyup", filterMottos);
    filterName.addEventListener("keyup", filterNames);
}
function filterMottos(e){
    const filterMottoValue = e.target.value.toLowerCase();
    const mottoItems = document.querySelectorAll(".tdmotto");
    mottoItems.forEach(function(mottoItem){
        const text = mottoItem.textContent.toLowerCase();
        if (text.indexOf(filterMottoValue) === -1){
            //Bulamadı
            mottoItem.parentElement.setAttribute("style","display : none !important");
        }
        else {
            mottoItem.parentElement.setAttribute("style", "display : table-row");
        }
    })
}
function filterNames(e){
    const filterNameValue = e.target.value.toLowerCase();
    const nameItems = document.querySelectorAll(".tdname");
    nameItems.forEach(function(nameItem){
        const text = nameItem.textContent.toLowerCase();
        if (text.indexOf(filterNameValue) === -1){
            //Bulamadı
            nameItem.parentElement.setAttribute("style","display : none !important");
        }
        else {
            nameItem.parentElement.setAttribute("style", "display : table-row");
        }
    })
}
function deleteMotto (e){
    if (e.target.id === "delete-motto"){
        UI.deleteMottoFromUI(e.target);
        Storage.deleteMottoFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarıyla gerçekleştirildi!","success");
    }
}
function loadAllParametersToUI(){
    let mottos = Storage.getMottosFromStorage();
    UI.loadAllMottos(mottos); 
}
function addMotto(e){
    e.preventDefault();
    const newMotto = mottoInput.value.trim();
    const newPerson = personInput.value;
    const newDate = dateInput.value;

    if (
        //Boş alan kaldığında Alert mesajı oluşturma
        newMotto === "" || newPerson === "" || newDate === ""){
        UI.displayMessages("Tüm alanları doldurun","danger");
    }
    else {
        // Yeni Motto Ekleme
        const addNewMotto = new Motto(newMotto,newPerson,newDate);
        // Arayüze Motto Ekleme
        UI.addMottoToUI(addNewMotto);
        // Storage'a Motto Ekleme
        Storage.addMottoToStorage(addNewMotto);
        // Alanların hepsi doldurulduğunda Alert mesajı oluşturma
        UI.displayMessages("Motto başarıyla eklendi!","success");
        // Arayüze Motto eklendikten sonra inputları silme
        UI.clearInputs(mottoInput,personInput,dateInput);
    }
}



