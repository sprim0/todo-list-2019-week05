const completeList = document.querySelector('.completelist > ul')

document.querySelector('button.add').addEventListener('click',newTask)
const taskList = document.querySelector('ul')
function newTask(){
    let task = document.querySelector('input').value
    let listItem = document.createElement ('li')

//refactor- change the code to extract a constant to the global scope. Improve code to remove duplicates later.
    taskList.appendChild(listItem)
    listItem.innerText = task
    
}
document.querySelector('ul').addEventListener('click',completeTask)
function completeTask(event){
    
    event.target.style.textDecoration = 'line-through'
}
document.querySelector('button.clearCompleted').addEventListener('click',clearTask)
function clearTask(){

    //telling the comp to find the 1st completed task from top ul. 
    //text-decoration is used in the selector b/c, we are only moving the completed list-items from the top ul into the .completelist ul
    let task = document.querySelector('.list > ul > li[style="text-decoration: line-through;"]')


   while(task){
//using appendchild b/c it is telling where to put the Element (task), which is moving it under the new parent ul (.completelist)
    completeList.appendChild(task)  
//telling the comp to find the NEXT completed task from top ul.  
    task = document.querySelector('.list > ul > li[style="text-decoration: line-through;"]')
   }
}
document.querySelector('button.clearAll').addEventListener('click',clearAll)
function clearAll(){
//telling the entire ul in .list to reset the inner HTML (check in inspect) to no list items (indicated with the empty string).
    taskList.innerHTML = ''
}

/*once user clicks on completed task and clicks 'clear completed, make list-item disappear from ul.
re-appear in new ul under*/

// Javascript code completed in community hours with the help of mentors including Sam L. & Michael Kazin