const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


//получение данных из формы
function getFormData() {
    /*var getName = document.forms["wishesForm"]["name"].value //получить имя из формы
    var getEmail = document.forms["wishesForm"]["email"].value //получить адрес эл. почты из формы
    var getWishes = document.forms["wishesForm"]["wishes"].value //получить пожелания из формы*/

    getData = document.forms["wishesForm"] //получили массив с элементами формы
    return getData
}
//вывод данных из формы
function printData(formData){
    for (let elem = 0; elem < formData.length; elem++) { //вывод только тех элементов, у которых есть имя
        if (formData[elem].name != "") { console.log(formData[elem].name, ':', formData[elem].value) }
    }
}
//проверка данных на наличие
function checkData(formData) {
    modalText = "Данные корректны! :)"
    if (formData["name"].value == ""){ //пожелания - обязательное поле
        document.getElementById("errorNoticeName").innerHTML = "Заполните это поле!"
        modalText = "Данные некорректны! :("
    }
    //Проверка адреса почты на корректный ввод
    if (EMAIL_REGEXP.test(formData["email"].value) == false){
        document.getElementById("errorNoticeEmail").innerHTML = "Ввод почты некорректен!"
        modalText = "Данные некорректны! :("
    }

    if (formData["wishes"].value == ""){ //пожелания - обязательное поле
        document.getElementById("errorNoticeWishes").innerHTML = "Заполните это поле!"
        modalText = "Данные некорректны! :("
    }

    document.getElementById("exampleModalLabel").innerHTML = modalText
}

function clearNotice() {
    document.getElementById("errorNoticeName").innerHTML = ""
    document.getElementById("errorNoticeEmail").innerHTML = ""
    document.getElementById("errorNoticeWishes").innerHTML = ""
}

function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()

    formData = getFormData()
    printData(formData) //вывести данные
    checkData(formData) //проверить данные

}  

function cardFilter() {
    let search = document.getElementById('searchCard')
    let filter = search.value.toUpperCase();
    let card = document.getElementsByName("card");
    let cardBody = document.getElementsByClassName("card-body");
    var i;
    
    for (i = 0; i < 8; i++) {
        let p = cardBody[i].getElementsByTagName("p")[0];
        let h5 = cardBody[i].getElementsByTagName("h5")[0];
        if ((p.innerHTML.toUpperCase().indexOf(filter) > -1) || (h5.innerHTML.toUpperCase().indexOf(filter) > -1)) {
        card[i].style.display = "";
        } else {
        card[i].style.display = "none";
        }
    }
}
