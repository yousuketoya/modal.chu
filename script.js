// モーダルを開くボタンを定数に代入
const buttnOpen = document.getElementById('modalOpen');
// モーダルを閉じるボタンを定数に代入
const buttonClose = document.getElementById('modalClose');
// モーダルの要素を定数に代入
const modal = document.getElementById('modal');

buttnOpen.addEventListener('click', () => {
  // モーダルを開く
  modal.style.display = 'block';
});

buttonClose.addEventListener('click', () => {
  // モーダルを開く
  modal.style.display = 'none';
});