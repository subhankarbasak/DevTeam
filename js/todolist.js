// Add Function 
let inputField = document.getElementById("todo-input");
let addButton = document.getElementById("todo-add");
let saveButton = document.getElementById("todo-save");
addButton.addEventListener("click", () => {
    addTodo();
})

function addTodo() {
    //
    let note = inputField.value;
    let items = localStorage.getItem('Notes');
    if (items == null) localStorage.setItem('Notes', JSON.stringify([note]));
    else {
        let Notes = JSON.parse(items);
        Notes.push(note);
        localStorage.setItem('Notes', JSON.stringify(Notes));
    }
}

// `<div style="" id="itemNo${index}" class="col-md-3 mb-2 listitemClass">
// <div class="card" style="width: 18rem; height:12rem; overflow:hidden; box-shadow:inset 2px 2px 3px #e9e9e9, inset -2px -2px 3px #e9e9e9, 2px 2px 10px #4544">
// <div class="btn-group" style="cursor: pointer; position:absolute; top:0; right:0; padding:3.5px;">
// <span onclick="editNow(${index})">
//     <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
// </span> 
// <span onclick="deleteNow(${index})">
//     <i class="fa fa-trash" aria-hidden="true"></i>
// </span>
// </div>
//     <div style="cursor: all-scroll;" class="card-body">
//         <p class="card-text">${item}</p>
//     </div>
// </div>
// </div>`;

function loadNote() {
    let Notes = JSON.parse(localStorage.getItem('Notes'));
    let html = "";
    Notes.forEach((item, index) => {
        html += `<div class="col-sm-4 listitemClass"  id="itemNo${index}">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">${item}</p>
                </div>
                <div class="card-footer bg-transparent border-success">
                <a href="#" onclick="editNow(${index})" class="btn btn-primary">Edit</a>
                <a href="#" onclick="deleteNow(${index})" class="btn btn-danger">Delete</a>
                </div>
              </div>
            </div>`;

    });
    document.getElementById('all-list').innerHTML = html;
}

function noRefresh(e) {
    e.preventDefault();
}
function deleteNow(i) {
    let Notes = JSON.parse(localStorage.getItem('Notes'));
    Notes.splice(i, 1);
    localStorage.setItem('Notes', JSON.stringify(Notes));
    loadNote();
}

function editNow(i) {
    let Notes = JSON.parse(localStorage.getItem('Notes'));
    inputField.value = Notes[i];
    saveButton.style.display = 'block';
    addButton.style.display = 'none';
    saveButton.addEventListener('click', () => {
        saveNow(i);
    })
}
function saveNow(i) {
    let Notes = JSON.parse(localStorage.getItem('Notes'));
    let newNote = inputField.value;
    Notes.splice(i, 1, newNote);
    localStorage.setItem('Notes', JSON.stringify(Notes));
}
loadNote();


$(function () {
    $("#all-list").sortable({
        update: function (event, ui) {
            getIdsOfImages();
        }//end update		
    });
});


function getIdsOfImages() {
    var values = [];
    $('.listitemClass').each(function (index) {
        values.push($(this).attr("id")
            .replace("itemNo", ""));
    });

    $('#outputvalues').val(values);
}