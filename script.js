function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read;
    if(document.getElementById("yes").checked){
        read = "yes";
    }
    else if(document.getElementById("no").checked){
        read = "no";
    }
    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);

    let table = document.querySelector("table");
    let row = table.insertRow(myLibrary.length);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    let button = document.createElement("button");
    button.innerText = "Remove";
    button.className = "remove";

    cell1.innerHTML = author;
    cell2.innerHTML = title;
    cell3.innerHTML = pages;
    cell4.innerHTML = read;
    cell5.appendChild(button);

    
}

let btns = document.getElementsByClassName("remove");
console.log(btns);
for(let i = 0; i < btns.length; i++){
    console.log(btns[i]);
    let table = document.querySelector("table");
    btns[i].addEventListener("click", () => {
        myLibrary.pop();
        table.deleteRow(i);
    });
}