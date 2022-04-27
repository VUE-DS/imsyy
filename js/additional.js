document.getElementById('fair').addEventListener('click', function () {
  iziToast.show({
    message: '以下排名不分<span class="gege">先后顺序</span>',
  });
})
// 显示第一个
var slides = document.querySelectorAll('.slide')
if (slides.length > 1) {
  document.querySelector('.slides .icon-right').style.display = 'block'
}
slides[0].style.display = 'block'
// 当前标签页
var col = 1
document.querySelector('.slides .icon-right').addEventListener('click', function () {
  col++
  console.log(col == slides.length);
  if (col == slides.length) {
    document.querySelector('.slides .icon-right').style.display = 'none'
    document.querySelector('.slides .icon-right-copy').style.display = 'block'
  }
  nones()
  slides[col - 1].style.display = 'block'
})
document.querySelector('.slides .icon-right-copy').addEventListener('click', function () {
  col--
  if (col == 1) {
    document.querySelector('.slides .icon-right-copy').style.display = 'none'
    document.querySelector('.slides .icon-right').style.display = 'block'
  }
  nones()
  slides[col - 1].style.display = 'block'
})

// 隐藏
function nones() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
}