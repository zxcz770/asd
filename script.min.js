
// ЛР 10 — Обработка события клика
document.addEventListener("DOMContentLoaded", function () {
    const changeTextButton = document.getElementById("changeTextBtn");
    const textElement = document.getElementById("textToChange");
    if (changeTextButton && textElement) {
        changeTextButton.addEventListener("click", function () {
            textElement.textContent = "Персонаж готов к бою!";
        });
    }

    // ЛР 11 — Счетчик нажатий
    const counterBtn = document.getElementById("counterBtn");
    const counterDisplay = document.getElementById("counterValue");
    let count = 0;
    if (counterBtn && counterDisplay) {
        counterBtn.addEventListener("click", function () {
            count++;
            counterDisplay.textContent = "Счетчик: " + count;
        });
    }

    // ЛР 12 — Проверка формы
    const form = document.getElementById("feedbackForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const errorBox = document.getElementById("errorBox");
            const successBox = document.getElementById("successBox");

            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            errorBox.textContent = "";
            successBox.textContent = "";

            if (!name || !email || !message) {
                errorBox.textContent = "Все поля должны быть заполнены.";
            } else if (!emailRegex.test(email)) {
                errorBox.textContent = "Введите корректный email.";
            } else if (message.length < 10) {
                errorBox.textContent = "Сообщение должно содержать минимум 10 символов.";
            } else {
                successBox.textContent = "Форма успешно отправлена!";
                form.reset();
            }
        });
    }
});
