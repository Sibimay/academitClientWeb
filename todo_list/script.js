(function () {
    var inputField = document.getElementById("input");
    var addButton = document.getElementById("addButton");
    var listDiv = document.getElementById("list-div");

    addButton.addEventListener("click", function () {
        if (inputField.value === "") {
            setErrorMessage(inputField);

            return
        } else {
            if (document.getElementById("errorText")) {
                listDiv.removeChild(document.getElementById("errorText"));
                inputField.classList.remove("is-invalid");
            }
        }

        var list = createList();

        var listElement = document.createElement("li");
        var elementText = document.createElement("label");
        var editInput = document.createElement("input");
        editInput.style.display = "none";

        var deleteButton = createButton("deleteButton", "Delete");
        deleteButton.classList.add("btn-danger");
        deleteButton.addEventListener("click", function () {
            list.removeChild(listElement);
        });

        var editButton = createButton("editButton", "Edit");
        editButton.classList.add("btn-secondary");
        editButton.addEventListener("click", function () {
            document.getElementsByName("deleteButton")
                .forEach(function (button) {
                    button.disabled = true;
                });

            document.getElementsByName("editButton")
                .forEach(function (button) {
                    button.disabled = true;
                });

            deleteButton.style.display = "none";
            editButton.style.display = "none";
            elementText.style.display = "none";

            editInput.style.display = "unset";
            editInput.type = "text";
            editInput.id = "input";
            editInput.classList.add("col-5", "mx-2", "w-auto", "form-control");
            editInput.value = elementText.textContent;

            saveButton.style.display = "unset";
            cancelButton.style.display = "unset";
            addButton.disabled = true;
            inputField.disabled = true;

            list.appendChild(listElement);
            listElement.appendChild(editInput);
            listElement.appendChild(saveButton);
            listElement.appendChild(cancelButton);
            listDiv.appendChild(list);
        });

        var saveButton = createButton("saveButton", "Save");
        saveButton.classList.add("btn-secondary");
        saveButton.style.display = "none";
        saveButton.addEventListener("click", function () {
            if (editInput.value === "") {
                setErrorMessage(editInput, list);

                return
            } else {
                if (document.getElementById("errorText")) {
                    list.removeChild(document.getElementById("errorText"));
                    editInput.classList.remove("is-invalid");
                }
            }

            elementText.textContent = editInput.value;

            editInput.style.display = "none";
            saveButton.style.display = "none";
            cancelButton.style.display = "none";
            addButton.disabled = false;
            inputField.disabled = false;

            deleteButton.style.display = "unset";
            editButton.style.display = "unset";
            elementText.style.display = "unset";
            document.getElementsByName("deleteButton")
                .forEach(function (button) {
                    button.disabled = false;
                });

            document.getElementsByName("editButton")
                .forEach(function (button) {
                    button.disabled = false;
                });

            editInput.value = "";
        });

        var cancelButton = createButton("cancelButton", "Cancel");
        cancelButton.classList.add("btn-secondary");
        cancelButton.style.display = "none";
        cancelButton.addEventListener("click", function () {
            editInput.style.display = "none";
            saveButton.style.display = "none";
            cancelButton.style.display = "none";

            deleteButton.style.display = "unset";
            editButton.style.display = "unset";
            elementText.style.display = "unset";
            addButton.disabled = false;
            inputField.disabled = false;
            document.getElementsByName("deleteButton")
                .forEach(function (button) {
                    button.disabled = false;
                });

            document.getElementsByName("editButton")
                .forEach(function (button) {
                    button.disabled = false;
                });

            editInput.value = "";
        });

        listElement.classList.add("col-8", "mb-1");
        listElement.id = "item";

        elementText.textContent = inputField.value;
        elementText.id = "text";

        list.appendChild(listElement);
        listElement.appendChild(elementText);
        listElement.appendChild(editButton);
        listElement.appendChild(deleteButton);
        listDiv.appendChild(list);

        inputField.value = "";
    });

    function createList() {
        var listId = "todoList";
        var list = document.getElementById(listId);

        if (!list) {
            list = document.createElement("ol");
            list.id = "todoList";
            list.classList.add("mx-5");
        }

        return list;
    }

    function createButton(buttonName, buttonText) {
        var button = document.createElement("button");

        button.textContent = buttonText;
        button.classList.add("col", "btn", "ms-2", "btn-sm", "mx-auto");
        button.type = "button";
        button.id = buttonName;
        button.name = buttonName;

        return button;
    }

    function setErrorMessage(input, list) {
        if (!document.getElementById("errorText")) {
            input.classList.add("is-invalid");

            var error = document.createElement("label");

            error.textContent = "Нельзя создать пустую заметку!";
            error.style.color = "#f00";
            error.id = "errorText";

            if (list !== undefined) {
                list.appendChild(error);
            } else {
                listDiv.appendChild(error);
            }
        }
    }
})();