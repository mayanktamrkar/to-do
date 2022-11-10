
function addinputtext() {
    let input_value=document.getElementById("inputv").value
    console.log("dfdf",input_value)
    if(input_value[0]==undefined || input_value[0]==" "){
        
        document.getElementById("error").innerHTML="pls ente value"
        

    }else{
        document.getElementById("error").innerHTML=""
      
        let todo_list = document.getElementById("todo-list")
        let div=document.createElement("div")
        div.className="list"
        let inputbox = document.createElement("input")
        inputbox.value = input_value
        inputbox.setAttribute("disabled", true);
       
        inputbox.setAttribute("class", "input-box");

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
            if( e.target.innerHTML=="done"){

                if(e.target.parentNode.firstChild.value.length!=0 && e.target.parentNode.firstChild.value[0]!==" ")
                {
                    
                    
                    document.getElementById("error").innerHTML=""
                    let a=e.target.parentNode.firstChild
                    a.setAttribute("disabled",true)
                    a.setAttribute("class","input-box")
                    e.target.innerHTML="edit"
                    console.log("v",e.target.parentNode.firstChild.value)

                }else{
                    document.getElementById("error").innerHTML="pls ente value"
                

                }
                
            

            }else if(e.target.innerHTML=="edit"){
                
              
                let a=e.target.parentNode.firstChild
                a.removeAttribute("disabled")
                a.removeAttribute("class")
                e.target.innerHTML="done"
             
                
                
            
               

            }
           
           
             
           if(e.target.innerHTML=="delete"){
             e.target.parentNode.remove()
             document.getElementById("inputv").value=""

           }
         
          
        })
        function lockinput(){
         
        }
    }
   



}






