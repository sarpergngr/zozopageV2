class Storage {
    static addMottoToStorage(addNewMotto){
        let mottos = this.getMottosFromStorage();
        mottos.push(addNewMotto);
        localStorage.setItem("mottos",JSON.stringify(mottos));
    }
    static getMottosFromStorage(){
        let mottos;
        if(localStorage.getItem("mottos") === null){
            mottos = [];
        }
        else {
            mottos = JSON.parse(localStorage.getItem("mottos"));
        }
        return mottos;
    }
    static deleteMottoFromStorage(e){
        // console.log(e);
        
        let mottos = this.getMottosFromStorage();
        //splice
        mottos.forEach(function(motto,index){
            if('"'+motto.motto+'"' === e){
                mottos.splice(index,1);
            }
        });
        localStorage.setItem("mottos",JSON.stringify(mottos));
    }
}
