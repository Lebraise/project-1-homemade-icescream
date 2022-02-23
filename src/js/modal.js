var modal = document.getElementById('orderBtn');
var btnhead = document.getElementById('orderBtnHead');
var btnmob = document.getElementById('orderBtnMob');
var btnclose = document.getElementsByClassName('close')[0];
btnclose.onclick = function () {
  modal.style.display = 'none';
};
function orderBtn() {
  modal.style.display = 'block';
  const mobModal = document.querySelector('.mob-menu');
if (mobModal) {
  mobModal.classList.add('is-hidden');
}
}
btnhead.onclick = orderBtn;
btnmob.onclick = orderBtn;
