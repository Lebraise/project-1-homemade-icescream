var modal = document.getElementById('orderBtn');
var btnhead = document.getElementById('orderBtnHead');
var btnmob = document.getElementById('orderBtnMob');
var btnabout = document.getElementById('orderBtnAbout');
var btnclose = document.getElementsByClassName('close')[0];
btnclose.onclick = function () {
  modal.style.display = 'none';
};
function orderBtn() {
  modal.style.display = 'block';
}
btnhead.onclick = orderBtn;
btnmob.onclick = orderBtn;
btnabout.onclick = orderBtn;
