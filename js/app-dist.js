$(".slider-box").slick({dots:!1,speed:1e3,fade:!0,cssEase:"linear",prevArrow:'<button type="button" class="left-arrow"><img src="img/left-arrow.svg" alt="arrow"></button>',nextArrow:'<button type="button" class="right-arrow"><img src="img/right-arrow.svg" alt="arrow"></button>',responsive:[{breakpoint:1024,settings:{arrows:!1,dots:!0}}]});let burger=document.querySelector(".burger"),list=document.querySelector(".list"),body=document.body;burger.addEventListener("click",(function(){list.classList.toggle("open"),body.classList.toggle("scroll")}));
//# sourceMappingURL=app-dist.js.map