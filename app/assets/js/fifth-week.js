$(document).ready(function () {
$('.switch').click(function (e) { 
    e.preventDefault();
    $('.slide_page').toggleClass('active');
    
});
});


/*DOM*/
const stopa = document.querySelector('.for_preventDefault');
const stopa2 = document.querySelector('.for_preventDefault');
/*/*取消 main_admin a標籤visibility and edit icon 的連結功能*/
function stopalink(e){
    e.preventDefault()
}
stopa.addEventListener('click',stopalink,false)
stopa2.addEventListener('click',stopalink,false)