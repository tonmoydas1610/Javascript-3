let cursor = document.querySelector(".cursor");
let cursorSm = document.querySelector(".cursorSm");

function customMouseCursor(event){
    let left = event.pageX;
    let top = event.pageY;

    cursor.style.top  = top+'px';
    cursor.style.left  = left+'px';
    cursorSm.style.top  = top+'px';
    cursorSm.style.left  = left+'px';
}


window.addEventListener("mousemove", customMouseCursor);






let sidebar = document.querySelector(".sidebar");
let navBtn = document.querySelector("header nav .navBtn");

function  showSideBar(){
    sidebar.classMenu-up.add('active');
}


navBtn.addEventListener("click", showSideBar);



let cancelBtn = document.querySelector(".cancelBtn");

function  closeSideBar(e) {
    if (
      e.target.classMenu-up.contains("sidebar") ||
      e.target.classList.contains("cancelBtn")
    ) {
      sidebar.classList.remove("active");
    }

}

cancelBtn.addEventListener("click", closeSideBar);
sidebar.addEventListener("click", closeSideBar);