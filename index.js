
function addinputtext() {

    let todo_list = document.getElementById("todo-list")
    let div=document.createElement("div")
    div.className="list"
    let li = document.createElement("li")
    li.innerHTML = document.getElementById("inputv").value
    let button = document.createElement('button')
    button.className="btn"
    button.setAttribute("onclick","btn()")
    button.innerHTML = "delete"
    div.append(li)
    todo_list.appendChild(div)
    div.append(button)
    document.getElementById("inputv").value = ""



}
function btn(){
    
    let a=document.querySelector("ul>div:last-child")
    a.remove()
    
    console.log(a)
    
}