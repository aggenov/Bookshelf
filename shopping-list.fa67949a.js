!function(){document.querySelector(".shopping-main-list-js"),document.querySelector(".empty-list"),JSON.parse(localStorage.getItem("books-data"));var e=document.querySelector(".modal-mobile-menu"),t=document.querySelector(".header-burger"),n=document.querySelector(".mobile-close-btn"),o=document.querySelector("#switch"),c=localStorage.getItem("ui-theme");c||localStorage.setItem("ui-theme","light"),o.attributes.type.ownerElement.checked="light"!==c,t.addEventListener("click",(function(){e.style.display="block"})),n.addEventListener("click",(function(){e.style.display="none"})),o.addEventListener("click",(function(){o.attributes.type.ownerElement.checked?localStorage.setItem("ui-theme","dark"):localStorage.setItem("ui-theme","light")})),document.addEventListener("DOMContentLoaded",(function(){"dark"===localStorage.getItem("ui-theme")?document.documentElement.setAttribute("ui-theme","dark"):document.documentElement.removeAttribute("ui-theme")})),o.addEventListener("click",(function(){document.documentElement.hasAttribute("ui-theme")?document.documentElement.removeAttribute("ui-theme"):document.documentElement.setAttribute("ui-theme","dark")}));var l=document.querySelector(".btn-up");window.addEventListener("scroll",(function(){l.hidden=scrollY<document.documentElement.clientHeight/2})),l.onclick=function(){window.scrollTo(scrollX,0)}}();
//# sourceMappingURL=shopping-list.fa67949a.js.map
