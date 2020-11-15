'use strict';
let dc = document;
{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Clicked!');
  });

  // document.addEventListener('mousemove', e => {
  //   // console.log('moved!');
  //   console.log(e.clientX, e.clientY);
  // });

  document.addEventListener('keydown', e => {
    // この「e =>」というのは、イベントオブジェクト、という意味。
    console.log(e.key);
  });
}

{
  const text = document.querySelector('textarea');

  // text.addEventListener('focus', () => {
  //   console.log('focus');
  // });

  // text.addEventListener('blur', () => {
  //   console.log('blur');
  // });

  text.addEventListener('input', () => {
    // console.log('input');
    console.log(text.value.length);
  });

  text.addEventListener('change', () => {
    console.log('change');
  });
}

{
  dc.getElementById('textAdd').addEventListener('click', () => {
    const li = document.createElement('li');
    const text = document.querySelector('input');
    li.className = 'li_1';
    li.textContent = text.value;
    document.getElementById('ul_1').appendChild(li);
    // ↓のようにすれば、入力・追加後にテキストボックスを空にできる。
    text.value = '';
    text.focus();
  });
  dc.getElementById('textRemove').addEventListener('click', () => {
    const removeText = dc.querySelector('li');
    document.getElementById('ul_1').removeChild(removeText);
    // これ、どうやら押すたびに消せるようだ。
  });
}

{
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); //←既定の動作をキャンセルする為の関数
    console.log('submit！');
    // submitされた後のメッセージ
  });
}