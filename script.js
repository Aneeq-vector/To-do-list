
//selecting ul
var ul = document.getElementById("list-container")

var input = document.getElementById("input")

window.onload = function() {
    ul.innerHTML = ""; // Removes all list items
}

function add()
{
    var listitem = document.createElement("li")
    listitem.innerHTML = input.value + "<button onclick='deleteItem(event)'>Delete</button>"
    ul.append(listitem)
}

function deleteItem(event)
{
    event.target.parentElement.remove("li")
}