


// letx = document.getElementById("mybtn");



// X.addEventListener ("mouseover", mouseOverFunction);
// x.addEventListener("mouseout", mouseOutFunction);
// x.addEventListener("onclick", onclickFunction);

//  function mouseoverFunction(){
//     document.getElementById("demo").innerHTML = "mouseover ! <br>";

//  }

//  function onclickFunction(){
//     document.getElementById("demo").innerHTML = "clicked ! <br>";
//  }
//  function.getElementById(){
//     document.getElementById("demo").innerHTML = "mouseout ! <br>";
//  }

// --->


// document.addEventListener('DOMContentLoaded', () =>{
//     const list = document.querySelectorAll('#movie-list ul');
//     const form = document.forms;
//     const addForm = form['add-movie'];

    
// })



// // delete

// list.addEventListener("click", (e) =>{
//     if(e.target.classList.contains("delete")){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })


// // add-movies

// addForm.addEventListener("submit", (e) =>{
//     e.preventDefault();

//     // create elements
//     const value = addForm.querySelector("input[type='text']").value;
//     const li = document.createElement("li"); 
//     const movieName = document.createElement("span");
//     const deleteBtn = document.createElement("button");


//     // add text content
//     movieName.textContent = value;
//     deleteBtn.textContent = "delete";



//     // add classes
//     novieName.classlist.add('name');
//     deleteBtn.classlist.add('delete');
   

//     // append to dom
//     li.appendChild(movieName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);

//     // clear form
//     addForm.querySelector("input[type='text']").value = "";
// })

// --->

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;
    const addform = forms['add-movie'];

    // delete movies

    list.addEventListener("click", (e) => {
        if (e.target.className == "delete") {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })

    // add movies

    addform.addEventListener('submit', (e) => {
        e.preventDefault();

        //create elements
        
        const value = addform.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //add text content

        movieName.textContent = value;
        deleteBtn.textContent = 'delete';

        //add classes

        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        //append to DOM

        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);


        //clear inputs

        addform.querySelector('input[type="text"]').value = '';

    })
})