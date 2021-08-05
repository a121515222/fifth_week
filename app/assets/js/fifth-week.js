
$(document).ready(function () {
     //彈出CKEditor
$('.switch').click(function (e) { 
    e.preventDefault();
    $('.slide_page').toggleClass('active');
    
});

});


/*DOM*/
const stopa = document.querySelector('.for_preventDefault');

/*/*取消 main_admin a標籤visibility and edit icon 的連結功能*/
function stopalink(e){
    e.preventDefault()
}
stopa.addEventListener('click',stopalink,false)
