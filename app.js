// const wrap = document.querySelector('#wrapper');

// console.log(wrap);

// var wmf = document.querySelectorAll('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelectorAll('#book-list li .name');
// Array.from(books).forEach(function(book){
//     console.log(book);
// })
// var books = document.querySelectorAll('#book-list li .name');
// Array.from(books).forEach(function(book){
//     book.textContent = 'test';
// })

// test = document.querySelector('#page-banner .title');

// test.addEventListener('click', function(){
//     alert('hello woorld');
// })
//delete books
const list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add books

const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
//create elements
   const li = document.createElement('li');
   const bookName = document.createElement('span');
   const deleteBk = document.createElement('span');

// add content
    bookName.textContent = value;
    deleteBk.textContent = 'delete';

//add classes
    bookName.classList.add('name');
    deleteBk.classList.add('delete');
//append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBk);
    list.appendChild(li);
});

//hide all books

hide = document.querySelector('#hide');
hide.addEventListener('change',function(e){
    if(hide.checked){
        list.style.display = 'none';
    }
    else{
        list.style.display = 'block';
    }
});

// filter books
const searchBar = forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});
