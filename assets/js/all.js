"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
"use strict";

$(document).ready(function () {
  $('.switch').click(function (e) {
    e.preventDefault();
    $('.slide_page').toggleClass('active');
  });
});
/*DOM*/

var stopa = document.querySelector('.for_preventDefault');
var stopa2 = document.querySelector('.for_preventDefault');
/*/*取消 main_admin a標籤visibility and edit icon 的連結功能*/

function stopalink(e) {
  e.preventDefault();
}

stopa.addEventListener('click', stopalink, false);
stopa2.addEventListener('click', stopalink, false);
//# sourceMappingURL=all.js.map
