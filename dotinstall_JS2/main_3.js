'use strict';

let dc = document;
{
  function attack(){
    dc.querySelector('h1').textContent = 'くらえッ！';
  }
  function title(){
    dc.querySelector('h1').textContent = '日本の"不覚にも笑った"地名 ベスト５';
  }
  // 但し、この「querySelector」は、指定した要素のうちの"最初のものだけしか"取得する事が出来ない点に注意！

  function bizzare_5(){
    dc.getElementById('bizzare_5').textContent = '鼻毛の滝（はなげのたき） in 群馬県';
  }
  function bizzare_4(){
    dc.getElementById('bizzare_4').textContent = '女体入口（にょたいいりぐち） in 長野県';
  }
  function bizzare_3(){
    dc.getElementById('bizzare_3').textContent = '面白山（おもしろやま） in 宮城県・山形県';
  }
  function bizzare_2(){
    dc.getElementById('bizzare_2').textContent = '漫湖（ま〇こ） in 沖縄県';
  }
  function bizzare_1(){
    dc.getElementById('bizzare_1').textContent = '珍小島（ち〇こじま） in 北海道';
    dc.getElementById('bizzare_1').style.fontWeight = '600';
  }

  //setTimeout(変数名,ミリ単位の秒数)の関数で、指定した秒数後に処理が実行される。
  setTimeout(attack, 2000);
  setTimeout(title, 4000);
  setTimeout(bizzare_5, 6000);
  setTimeout(bizzare_4, 7000);
  setTimeout(bizzare_3, 8000);
  setTimeout(bizzare_2, 9000);
  setTimeout(bizzare_1, 12000);

  function title_2(){
    dc.querySelector('h2').textContent = '世界の"不覚にも笑った"地名 ベスト５';
  }
  // 「querySelectorAll」と打ってからタグを指定することで、そのタグの要素をすべて取得する事が出来る。
  // ついでにその直後に[]で数字を指定すれば、配列のように、x番目の要素だけを指定できる。
  function P_bizzare_3(){
    dc.querySelectorAll('p')[2].textContent = 'スケベニンゲン in オランダ';
  }
  function P_bizzare_2(){
    dc.querySelectorAll('p')[1].textContent = 'マン湖 in アメリカ';
  }
  function P_bizzare_1(){
    dc.querySelectorAll('p')[0].textContent = 'チンポー湖 in 中国';
  }
  function benmei(){
    dc.querySelectorAll('h1')[1].textContent = 'しょうがねーやん！\n実際にあるんだから！';
    dc.querySelectorAll('h1')[1].style.color = 'red';
  }

  setTimeout(title_2, 14000);
  setTimeout(P_bizzare_3, 16000);
  setTimeout(P_bizzare_2, 17000);
  setTimeout(P_bizzare_1, 18000);
  setTimeout(benmei, 20000);

  dc.querySelectorAll('button')[0].addEventListener('click', () => { //クリックした時の機能はこう表記する。function()と書く必要はない。
      dc.getElementById('target').textContent = 'だから押すなっつーの！';
      dc.getElementById('target').style.color = 'orange';
    });

  dc.getElementById('button2').addEventListener('click', () => { //クリックした時の機能はこう表記する。function()と書く必要はない。
      dc.getElementById('turnRed').className = 'boldRed';
      dc.querySelector('p').classList.add('boldOrange');
    });

  dc.getElementById('button3').addEventListener('click', () => { //クリックした時の機能はこう表記する。function()と書く必要はない。
      dc.querySelector('section').classList.toggle('pinkBack');
      // これで、ボタンを押すごとに切り替えられるようになった。
    });
}
