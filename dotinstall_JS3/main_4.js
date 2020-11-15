'use strict';

let dc = document;
{
  // 「要素を追加する」というのは、ＤＯＭツリー内部に含める、ということである。
  dc.getElementById('jojoPlus').addEventListener('click', () => {
    const newJojo = dc.createElement('li');
    newJojo.innerHTML = '<span>スティールボールラン</span>';

    const olJojo = document.querySelector('ol');
    olJojo.appendChild(newJojo);
    // これ、どうやら押すたびに表示されていくようだ。
  });
  
  dc.getElementById('jojoPlus2').addEventListener('click', () => {
    const removeJojo = dc.querySelectorAll('li')[6];
    document.querySelector('ol').removeChild(removeJojo);
    // これ、どうやら押すたびに消せるようだ。
  });
}

{
  dc.getElementById('textAdd').addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'liClass'
    const text = document.querySelector('input');
    li.textContent = text.value;
    document.querySelectorAll('ul')[0].appendChild(li);
    // ↓のようにすれば、入力・追加後にテキストボックスを空にできる。
    text.value = '';
    text.focus();
  });
  // dc.getElementById('textRemove').addEventListener('click', () => {
  //   const removeText = dc.getElementsByClassName('liClass');
  //   document.querySelector('ul').removeChild(removeText);
  //   // これ、どうやら押すたびに消せるようだ。
  // });
}

{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    document.getElementById('selectBox').appendChild(li);
  });
}