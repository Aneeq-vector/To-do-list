
//selecting ul
var ul = document.getElementById("list-container")

function add()
{
    var listitem = document.createElement("li")
    listitem.textContent = "Hello"
    ul.append(listitem)
}