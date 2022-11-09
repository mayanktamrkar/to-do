
function addinputtext() {
    let input_value=document.getElementById("inputv").value
    console.log("dfdf",input_value)
    if(input_value[0]==undefined || input_value[0]===" "){
        
        document.getElementById("error").innerHTML="pls ente value"
        

    }else{
        document.getElementById("error").innerHTML=""
      
        let todo_list = document.getElementById("todo-list")
        let div=document.createElement("div")
        div.className="list"
        let inputbox = document.createElement("input")
        inputbox.value = input_value
        inputbox.setAttribute("disabled", true);
        inputbox.id="inputbox"

        let button_del = document.createElement('button')
        button_del.className="btn"
        let button_edit = document.createElement('button')
        button_edit.className="btn"
        button_edit.innerHTML = "edit"
        
        button_del.innerHTML = "delete"
        div.append(inputbox)
        todo_list.appendChild(div)
        div.append(button_del)
        div.append(button_edit)
        document.getElementById("inputv").value = ""
        let ul=document.querySelector("ul")
        console.log(ul)
        ul.addEventListener("click",function del(e){
            if(e.target.innerHTML=="edit"){
                // let input_v =prompt("enter value",e.target.parentNode.firstChild.innerHTML)
                document.getElementById("inputbox").removeAttribute("disabled")
                let a=e.target.parentNode.firstChild
                
                
                // let input_v=document.getElementById("inputbox").value
                if(input_v!="" && input_v!=undefined){
                    document.getElementById("error").innerHTML=""
                    a.innerHTML=input_v
                    document.getElementById("inputv").value=""

                }else{
                    document.getElementById("error").innerHTML="pls enter value"
                }
                
               

            }
             
           if(e.target.innerHTML=="delete"){
             e.target.parentNode.remove()
             document.getElementById("inputv").value=""

           }
         
          
        })
    }
   



}






