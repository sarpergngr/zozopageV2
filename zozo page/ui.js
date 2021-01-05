class UI {
    static addMottoToUI(addNewMotto) {
        const mottoList = document.getElementById("mottos");
        mottoList.innerHTML += 
            `<tr>
                <td class = "tdmotto">"${addNewMotto.motto}"</td>
                <td>"${addNewMotto.person}"</td>
                <td>"${addNewMotto.date}"</td>
                <td><a href="#" id = "delete-motto" class = "btn btn-danger">Mottoyu Sil</a></td>
            </tr>`;  
    }
    static clearInputs(element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    static displayMessages(message,type){
        const formRow = document.querySelector(".form-row");
        //Alert divini oluşturma
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        formRow.appendChild(div);
        setTimeout(function(){
            div.remove();
        },2000);
    }
    static loadAllMottos(mottos){
        const mottoList = document.getElementById("mottos");
        mottos.forEach(function(motto){
            mottoList.innerHTML += 
            `<tr>
                <td class = "tdmotto">"${motto.motto}"</td>
                <td class = "tdname">"${motto.person}"</td>
                <td>"${motto.date}"</td>
                <td><a href="#" id = "delete-motto" class = "btn btn-danger">Mottoyu Sil</a></td>
            </tr>`;
        });
    }
    static deleteMottoFromUI(element){
        element.parentElement.parentElement.remove();
    }
}
