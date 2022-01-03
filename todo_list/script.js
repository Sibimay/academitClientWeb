document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("input");
    var addButton = document.getElementById("add-button");
    var listDiv = document.getElementById("list");

    addButton.addEventListener("click", function () {
        if (isInputEmpty(listDiv, inputField)) {
            return;
        }

        var createdList = document.getElementById("todo-list");
        var listElement = document.createElement("li");

        // Создаем кнопки
        var deleteButton = getCreatedButton("delete-button", "Delete");
        deleteButton.classList.add("btn-danger");

        var saveButton = getCreatedButton("save-button", "Save");
        saveButton.classList.add("btn-secondary");
        saveButton.style.display = "none";

        var editButton = getCreatedButton("edit-button", "Edit");
        editButton.classList.add("btn-secondary");

        var cancelButton = getCreatedButton("cancel-button", "Cancel");
        cancelButton.classList.add("btn-secondary");
        cancelButton.style.display = "none";

        //Создаем input и label
        var editInput = document.createElement("input");
        editInput.style.display = "none";
        editInput.type = "text";
        editInput.id = "input";
        editInput.classList.add("col-5", "mx-3", "w-auto", "form-control");

        var elementText = document.createElement("label");

        // Добавляем listener на кнопки

        deleteButton.addEventListener("click", function () {
            createdList.removeChild(listElement);
        });

        editButton.addEventListener("click", function () {
            // Убираем сообщение об ошибке, если оно есть
            deleteErrorMessage(listDiv, inputField);

            // Выключаем все кнопки Delete и Edit
            changeButtonsState(deleteButton.name, true);
            changeButtonsState(editButton.name, true);

            // Отключаем возможность использования поля добавления значения в список
            changeElementsState([addButton, inputField], true);

            // Для элемента li скрываем введенный текст и кнопки delete и edit
            changeElementsVisibility([deleteButton, editButton, elementText], "none");

            // Для элемента li показываем кнопки Save и Cancel
            changeElementsVisibility([saveButton, cancelButton, editInput], "unset");

            // Для элемента li показываем поле для ввода с уже имеющимся текстом
            editInput.value = elementText.textContent;
        });

        saveButton.addEventListener("click", function () {
            // Проверяем, что поле ввода не пустое
            if (isInputEmpty(listElement, editInput)) {
                return;
            }

            // Включаем возможность использования поля добавления значения в список
            changeElementsState([addButton, inputField], false);

            // Для элемента li скрываем поле ввода, кнопки save и cancel
            changeElementsVisibility([editInput, saveButton, cancelButton], "none");

            // Для элемента li показываем введенный текст и кнопки edit и delete
            changeElementsVisibility([deleteButton, editButton, elementText], "unset");

            elementText.textContent = editInput.value;

            // Включаем все кнопки Delete и Edit
            changeButtonsState(deleteButton.name, false);
            changeButtonsState(editButton.name, false);

            // Очищаем поле ввода
            editInput.value = "";
        });

        cancelButton.addEventListener("click", function () {
            // Убираем сообщение об ошибке, если оно есть
            deleteErrorMessage(listElement, editInput);

            // Включаем возможность использования поля добавления значения в список
            changeElementsState([addButton, inputField], false);

            // Для элемента li скрываем поле ввода, кнопки save и cancel
            changeElementsVisibility([editInput, saveButton, cancelButton], "none");

            // Для элемента li показываем введенный текст и кнопки edit и delete
            changeElementsVisibility([deleteButton, editButton, elementText], "unset");

            // Включаем все кнопки Delete и Edit
            changeButtonsState(deleteButton.name, false);
            changeButtonsState(editButton.name, false);

            // Очищаем поле ввода
            editInput.value = "";
        });

        listElement.classList.add("col-8", "mb-1");
        listElement.id = "item";

        elementText.textContent = inputField.value;
        elementText.id = "text";

        createdList.appendChild(listElement);

        listElement.appendChild(elementText)
        listElement.appendChild(editButton);
        listElement.appendChild(deleteButton);
        listElement.appendChild(editInput);
        listElement.appendChild(saveButton);
        listElement.appendChild(cancelButton);

        listDiv.appendChild(createdList);

        inputField.value = "";
    });

    function getCreatedButton(buttonName, buttonText) {
        var button = document.createElement("button");

        button.textContent = buttonText;
        button.classList.add("col", "btn", "ms-2", "btn-sm", "mx-auto");
        button.type = "button";
        button.id = buttonName;
        button.name = buttonName;

        return button;
    }

    function isInputEmpty(parent, inputField) {
        if (inputField.value === "") {
            setErrorMessage(parent, inputField);

            return true;
        }

        deleteErrorMessage(parent, inputField);

        return false;
    }

    function setErrorMessage(parent, input) {
        if (!document.getElementById("error-text")) {
            input.classList.add("is-invalid");

            var error = document.createElement("label");

            error.textContent = "Нельзя создать пустую заметку!";
            error.id = "error-text";
            error.classList.add("col-8", "mb-2", "red");

            if (parent !== listDiv) {
                parent.appendChild(error);
            } else {
                parent.prepend(error);
            }
        }
    }

    function deleteErrorMessage(parent, inputField) {
        if (document.getElementById("error-text")) {
            parent.removeChild(document.getElementById("error-text"));
            inputField.classList.remove("is-invalid");
        }
    }

    function changeElementsVisibility(elements, display) {
        elements.forEach(function (element) {
            element.style.display = display;
        });
    }

    function changeButtonsState(buttonsName, disabled) {
        changeElementsState(document.getElementsByName(buttonsName), disabled);
    }

    function changeElementsState(elements, disabled) {
        elements.forEach(function (element) {
            element.disabled = disabled;
        });
    }
});