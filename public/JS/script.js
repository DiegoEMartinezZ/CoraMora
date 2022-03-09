let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('header .search-form');

searchBtn.onclick = () => {
  searchBtn.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
  shoppingBtn.classList.remove('fa-times');
  loginBtn.classList.remove('fa-times');
  userForm.classList.remove('active');
  registerBtn.classList.remove('fa-times');
  registerForm.classList.remove('active');
};

let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('header .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  shoppingBtn.classList.remove('fa-times');
  loginBtn.classList.remove('fa-times');
  userForm.classList.remove('active');
  registerBtn.classList.remove('fa-times');
  registerForm.classList.remove('active');
};

let shoppingBtn = document.querySelector('#shopping-btn');

shoppingBtn.onclick = () => {
  shoppingBtn.classList.toggle('fa-times');
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  loginBtn.classList.remove('fa-times');
  userForm.classList.remove('active');
  registerBtn.classList.remove('fa-times');
  registerForm.classList.remove('active');
};

let loginBtn = document.querySelector('#login-btn');
let userForm = document.querySelector('header .user-form');

loginBtn.onclick = () => {
  loginBtn.classList.toggle('fa-times');
  userForm.classList.toggle('active');
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  shoppingBtn.classList.remove('fa-times');
  registerBtn.classList.remove('fa-times');
  registerForm.classList.remove('active');
};

let registerBtn = document.querySelector('#register-btn');
let register = document.querySelector('.register-btn');
let registerForm = document.querySelector('header .register-form');

register.onclick = (e) => {
  e.preventDefault(register);
  registerBtn.classList.toggle('fa-times');
  registerForm.classList.toggle('active');
  loginBtn.classList.remove('fa-times');
  userForm.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  shoppingBtn.classList.remove('fa-times');
};

registerBtn.onclick = (e) => {
  e.preventDefault(register);
  registerBtn.classList.toggle('fa-times');
  registerForm.classList.toggle('active');
  loginBtn.classList.remove('fa-times');
  userForm.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  shoppingBtn.classList.remove('fa-times');
};

window.onscroll = () => {
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
  shoppingBtn.classList.remove('fa-times');
  loginBtn.classList.remove('fa-times');
  userForm.classList.remove('active');
  registerBtn.classList.remove('fa-times');
  registerForm.classList.remove('active');
};
