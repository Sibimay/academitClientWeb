document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("input");
    var addButton = document.getElementById("add-button");
    var listDiv = document.getElementById("list");
    var errorMessageGlobal = document.getElementById("invalid-feedback");

    addButton.addEventListener("click", function () {
        if (isInputEmpty(listDiv, inputField)) {
            return;
        }

        var createdList = document.getElementById("todo-list");
        var listElement = document.createElement("li");

        var note = document.createElement("div");

        // Создаем кнопки
        var deleteButton = createButton("delete-button", "Delete");
        deleteButton.classList.add("btn-danger");

        var saveButton = createButton("save-button", "Save");
        saveButton.classList.add("btn-success");
        saveButton.style.display = "none";

        var editButton = createButton("edit-button", "Edit");
        editButton.classList.add("btn-secondary");

        var cancelButton = createButton("cancel-button", "Cancel");
        cancelButton.classList.add("btn-secondary");
        cancelButton.style.display = "none";

        //Создаем input и label
        var editInput = document.createElement("input");
        editInput.style.display = "none";
        editInput.type = "text";
        editInput.id = "input";
        editInput.classList.add("mx-3", "w-auto", "form-control");

        var elementText = document.createElement("label");
        var invalidFeedBackListElement = document.createElement("div");
        invalidFeedBackListElement.style.display = "none";
        invalidFeedBackListElement.id = "invalid-feedback-li";
        invalidFeedBackListElement.classList.add("red", "mx-3", "invalid-feedback-li");
        invalidFeedBackListElement.textContent = "Error! Can't create empty note";

        // Добавляем listener на кнопки

        deleteButton.addEventListener("click", function () {
            createdList.removeChild(listElement);
        });

        editButton.addEventListener("click", function () {
            // Убираем сообщение об ошибке, если оно есть
            deleteErrorMessage(listDiv, inputField);

            // Выключаем все кнопки Delete и Edit
            changeButtonsDisabled(deleteButton.name, true);
            changeButtonsDisabled(editButton.name, true);

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

            // Для элемента li скрываем поле ввода, кнопки save и cancel
            changeElementsVisibility([editInput, saveButton, cancelButton], "none");

            // Для элемента li показываем введенный текст и кнопки edit и delete
            changeElementsVisibility([deleteButton, editButton, elementText], "unset");

            elementText.textContent = editInput.value;

            // Включаем все кнопки Delete и Edit
            changeButtonsDisabled(deleteButton.name, false);
            changeButtonsDisabled(editButton.name, false);

            // Очищаем поле ввода
            editInput.value = "";
        });

        cancelButton.addEventListener("click", function () {
            // Убираем сообщение об ошибке, если оно есть
            deleteErrorMessage(listElement, editInput);

            // Для элемента li скрываем поле ввода, кнопки save и cancel
            changeElementsVisibility([editInput, saveButton, cancelButton], "none");

            // Для элемента li показываем введенный текст и кнопки edit и delete
            changeElementsVisibility([deleteButton, editButton, elementText], "unset");

            // Включаем все кнопки Delete и Edit
            changeButtonsDisabled(deleteButton.name, false);
            changeButtonsDisabled(editButton.name, false);

            // Очищаем поле ввода
            editInput.value = "";
        });

        listElement.classList.add("col-xs-8", "mb-1");
        listElement.id = "item";

        elementText.textContent = inputField.value;
        elementText.id = "text";

        createdList.appendChild(listElement);
        listElement.appendChild(note);
        listElement.appendChild(invalidFeedBackListElement);

        note.appendChild(elementText)
        note.appendChild(editButton);
        note.appendChild(deleteButton);
        note.appendChild(editInput);
        note.appendChild(saveButton);
        note.appendChild(cancelButton);

        listDiv.appendChild(createdList);

        inputField.value = "";
    });

    function createButton(buttonName, buttonText) {
        var button = document.createElement("button");

        button.textContent = buttonText;
        button.classList.add("btn", "ms-2", "btn-sm", "mx-auto");
        button.type = "button";
        button.id = buttonName;
        button.name = buttonName;

        return button;
    }

    function isInputEmpty(parent, inputField) {
        if (inputField.value.trim().length === 0) {
            setErrorMessage(parent, inputField);

            inputField.value = "";
            return true;
        }

        deleteErrorMessage(parent, inputField);

        return false;
    }

    function setErrorMessage(parent, input) {
        input.classList.add("is-invalid");

        if (parent !== listDiv) {
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].id === "invalid-feedback-li") {
                    parent.children[i].style.display = "unset";
                    break;
                }
            }
        } else {
            errorMessageGlobal.style.display = "unset";
        }
    }

    function deleteErrorMessage(parent, inputField) {
        if (parent !== listDiv) {
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].id === "invalid-feedback-li") {
                    parent.children[i].style.display = "none";
                    break;
                }
            }
        } else {
            errorMessageGlobal.style.display = "none";
        }

        inputField.classList.remove("is-invalid");
    }

    function changeElementsVisibility(elements, display) {
        elements.forEach(function (element) {
            element.style.display = display;
        });
    }

    function changeButtonsDisabled(buttonsName, disabled) {
        changeElementsDisabled(document.getElementsByName(buttonsName), disabled);
    }

    function changeElementsDisabled(elements, disabled) {
        elements.forEach(function (element) {
            element.disabled = disabled;
        });
    }
});