(function () {
    var userNameInp = document.getElementById("loginform-username"),
        passwordInp = document.getElementById("loginform-password"),
        btn = document.body.querySelector(".btn.btn-primary"),
        errorMessage = document.body.querySelectorAll(".col-lg-8");

    btn.addEventListener("click", formHandler);

    function formHandler(event) {
        var inputValid1 = false,
            inputValid2 = false;

        // перед каждым кликом отчистить консоль
        errorMessage[0].innerHTML = "";
        errorMessage[1].innerHTML = "";

        // проверяем юзернейм инпут
        if (userNameInp.value.length > 0 &&
            /^[a-zA-Z-а-яА-Я-я]+$/.test(userNameInp.value) &&
            userNameInp.value.length < 13) {
            inputValid1 = true;
        } else if (userNameInp.value.length > 12) {
            errorMessage[0].innerHTML = "Поле 'Username' не должно превышать 12 символов";
        } else if (userNameInp.value.length === 0) {
            errorMessage[0].innerHTML = "Поле 'Username' не должно быть пустым";
        } else if (!(/^[a-zA-Z-а-яА-Я-я]+$/.test(userNameInp.value))) {
            errorMessage[0].innerHTML = "Поле 'Username' должно содержать кирилицу либо латинские символы";
        }


        // проверяем пасворд инпут
        if (passwordInp.value === "12345") {
            inputValid2 = true;
        } else if (passwordInp.value.length === 0) {
            errorMessage[1].innerHTML = "Поле 'Password' не должно быть пустым"
        } else if (passwordInp.value !== "12345"){
            errorMessage[1].innerHTML = "Введён неверный пароль"
        }


        // если 1й и 2й инпуты валидны, вывести сообщение о том, что всё Ок!

        //

        if (inputValid1 && inputValid2) {
            alert("Спасибо, всё сделано верно!");
        } else {
            event.preventDefault()
        }
    }
})();