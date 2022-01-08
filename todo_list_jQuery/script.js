$(document).ready(function () {
    var todoList = $("#todo-list-content");
    var note = $("#note");
    var addButton = $("#add-button");

    note.click(function () {
        $("p.error-message").hide();
    });

    function addNote() {
        var text = note.val().trim();

        if (text.length === 0) {
            $("p.error-message").show();
            return;
        }

        var todoNote = $("<li>");

        function setEditMode() {
            todoNote.html("<div class='note-block'>" +
                "<textarea class='edit-note'></textarea>" +
                "<span class='button-group'>" +
                "<button class='list-button note-button save-button' type='button'>save</button>" +
                "<button class='list-button note-button cancel-button' type='button'>cancel</button>" +
                "</span>" +
                "<p class='error-message-li' style='display: none;'>error: new note cannot be empty</p>" +
                "</div>");

            var oldText = text;

            todoNote.find(".edit-note").text(oldText);

            todoNote.find(".save-button").click(function () {
                text = todoNote.find(".edit-note").val().trim();

                if (text.length === 0) {
                    $("p.error-message-li").show();
                    text = oldText;

                    return;
                }

                setViewMode(text);
            });

            todoNote.find(".cancel-button").click(function () {
                setViewMode(oldText);
            });
        }

        function setViewMode(newText) {
            todoNote.html("<div class='note-block'>" +
                "<span class='todo-note'></span>" +
                "<span class='button-group'>" +
                "<button class='list-button note-button edit-button' type='button'>edit</button>" +
                "<button class='list-button note-button delete-button' type='button'>delete</button>" +
                "</span>" +
                "</div>");

            todoNote.find(".todo-note").text(newText);

            todoNote.find(".delete-button").click(function () {
                todoNote.remove();
            });

            todoNote.find(".todo-note").click(setEditMode);
            todoNote.find(".edit-button").click(setEditMode);
        }

        setViewMode(text);
        todoList.append(todoNote);
        note.val("");
    }

    note.keydown(function (event) {
        var keyCode = (event.keyCode ? event.keyCode : event.which);

        if (keyCode === 13) {
            event.preventDefault();
            addNote();
        }
    });

    addButton.click(addNote);
});