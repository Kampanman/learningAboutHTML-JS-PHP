'use strict';

// 配列
{
  var driff = ["いかりや長介","仲本工事","高木ブー","加藤茶","志村けん"];
  console.log(driff);
  console.log(driff[0]);
}
{ // このように、変数に配列の次の数値を指定すると、新しい値を追加できる。
  // 因みに、次の数字ではなく幾つか数字を飛ばすと、飛ばした分が「empty」と表示される。
  driff[5] = "研ナオコ";
  console.log(driff);
}
{ // 尚、以下のようにすると、もはや配列ではなくなる模様
  driff += ","+"いしの陽子";
  console.log(driff);
}


// 配列とループ処理を組み合わせた書き方
var driff = ["いかりや長介","仲本工事","高木ブー","加藤茶","志村けん"];
for (let i=0; i<driff.length; i++){
  console.log(`ドリフメンバー No.${i+1}：${driff[i]}`)
}

// 配列への要素の追加や編集など
/* unshift()：配列の先頭に要素を追加する
push()：配列の末尾に要素を追加する
shift()：配列の先頭から要素を削除する
pop()：配列の末尾から要素を削除する */
var express = ["サンダーバード","スーパーカムイ","あずさ","いなほ","ふじがわ"];
express.unshift("サフィール踊り子");
express.push("しおさい");
for (let i=0; i<express.length; i++){
  console.log(`乗ってみたい在来線特急列車 No.${i+1}：${express[i]}`)
}

// spliceで配列を変更する
// a.splice(変化が開始する位置, 削除数)とすればよい

var comics = ["王様ランキング","鬼滅の刃","ゴールデンカムイ","ワンピース","ジョジョの奇妙な冒険","転生したらスライムだった件"]
{
  console.log('｛元データ｝')
  for (let i=0; i<comics.length; i++){
    console.log(`最近読んでいるマンガ No.${i+1}：${comics[i]}`)
  }
}
{
  console.log('｛splice()での削除後｝')
  comics.splice(3,2);
  for (let i=0; i<comics.length; i++){
    console.log(`最近読んでいるマンガ No.${i+1}：${comics[i]}`)
  }
}
{
  console.log('｛splice()での追加後｝')
  comics.splice(2,0,"花の慶次","ダイの大冒険");
  //これで配列[2]の"前"に何も削除せずに「花の慶次」と「ダイの大冒険」を入れられたことになる。
  for (let i=0; i<comics.length; i++){
    console.log(`最近読んでいるマンガ No.${i+1}：${comics[i]}`)
  }
}


// スプレッド構文（...）
const otherFavorite = ["札幌","岡山","長崎"];
const favoriteCity = ["仙台","広島","金沢","長野","富山","山形","秋田",...otherFavorite]; //これがスプレッド構文。
for (let i=0; i<favoriteCity.length; i++){
  console.log(`住んでみたい地方都市 第${i+1}位：${favoriteCity[i]}`)
}

// 分割代入
const trums = ["都電荒川線","東急世田谷線","富山市電","広島市電","阪堺電車"];
const [a,b, ...others] = trums;
console.log(`首都圏にお住いの場合、気軽に乗りに行ける路面電車といえば、${a}と${b}ですね。`);
console.log(`その他、オススメ日本国内の路面電車といえば、${others}といったところでしょうか。`);

// forEach()の機能
{
  const KimetsuCharas = ["竈門炭治郎","我妻善逸","竈門ねず子","富岡義勇","嘴平伊之助"]; //←配列で使うから「;」つけてる。
  KimetsuCharas.forEach((Kimetsu,index) => {
    console.log(`鬼滅の刃の人気キャラ 第${index+1}位：${Kimetsu}`);
  });
}

// map()の機能
{
  const prices = [100,500,1200];
  const taxedPrices = prices.map(price => price+(price*0.10)); //「=>」の後に書くのは「return」での処理だったな。
  console.log(taxedPrices);
}

// filter()の機能
{
  const numbers = [50,75,100,200,500];
  // const evenNumbers = numbers.filter(over100 => {
  //   if(over100 >= 100){
  //     return true ;
  //   }else{
  //     return false ;
  //   }
  // });
  const evenNumbers = numbers.filter(over100 => over100 >= 100);
  console.log(evenNumbers);
}


// オブジェクトのつくり方＆プロパティの操作
{
  const point = {
    x: 100, y: 200,
  };
  console.log(point);
  console.log(point.x);
  console.log(point['y']);
}
{
  const point = {
    x: 200, y: 400,
  };
  console.log(point);
  point.x = 300; //オブジェクトの外でこのように表記すると編集できる
  point.z = 600;
  delete point.y;
  console.log(point);
}


// Object.keys()[]の使い方
{
  const point = {
    x: 100, y: 200,
  };
  const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(`Key: ${key} , Value: ${point[key]}`)
    // keyがxやyを、point[key]はそれらの値を示す。
  });
}
{
  const points = [
    {x: 100, y: 200},
    {x: 200, y: 400},
    {x: 300, y: 600},
  ];
  console.log(points[1].y); //配列からデータを取り出したい時に使う
}


// 文字列を操作する
{
  const str = 'アイーン！';
  console.log(str.length); //文字列の文字数がわかる
  console.log(str.substring(1,3)+str.substring(4));
  // substring関数は、文字列を、配列と同じく0番目から数えてx文字目から、y文字目の手前までの文字を引き出すためのもの。
  const okiMiyage = 'ち〇すこう';
  console.log(okiMiyage[0]+okiMiyage[1]+okiMiyage[3]); //こうしても、文字列の一部を取り出す事ができる。
}


// 文字列での join()とsplit()
{
  const date = [1988,12,31];
  console.log(`ワダスの生誕日は、${date.join('/')}です。`); //join()の()の中に、配列の値同士を連結させるための文字列を入れればよい。

  const animals = 'こぶたとたぬきときつねとねこ';
  console.log(animals.split('と'));
  // こうすれば、「と」の文字で区切った配列ができる。
}


// 数値を操作する方法
{
  const scores = [10, 3, 9];
  let sum = 0;
  scores.forEach(score => {
      sum += score;
  });
    
  const avg = sum / scores.length;
    
  // console.log(sum);
    // console.log(avg);
    
  // console.log(Math.floor(avg)); // 7（小数点以下を切り下げたい場合）
    // console.log(Math.ceil(avg)); // 8（小数点以下を切り上げたい場合）
    // console.log(Math.round(avg)); // 7（四捨五入した値）
    // console.log(avg.toFixed(3)); // 7.333（小数点以下3桁まで表示してくれる）

    console.log(Math.random());
}


// ランダムな整数値を作る方法
{ //Math.randomを他の命令と組み合わせる方法。

  // こういう風に表記すれば、小数点以下を削ってランダムで数値を表示できる。
  console.log(Math.floor(Math.random() * 6) + 1);
  // サイコロの目がランダムで出るようにしたい場合は、最大値が６、最小値が１になるように上記のように記述する。
}
{ //（応用）配列内の文字列をランダム出力する方法。

  const pokemons = ['ズバット','ズバット','ズバット','ズバット','ズバット','イシツブテ','イシツブテ','イシツブテ','パラス','パラス','ピッピ'];
  const pokemonsNo = Math.floor( Math.random() * pokemons.length);
  console.log(`あ！やせいの${pokemons[pokemonsNo]}がとびだしてきた！`);
}


// 日時を表示する方法
{
  const date = new Date();
  console.log(`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`) ;
  // 月（getMonth）だけ0から始まる。
  // 年はgetFullYearとすると4桁で表示できる。
  
  
  // 特定の日時を扱う方法
  date.setHours(10,20,30);
  console.log(date); //現在の日付に「10時20分30秒」が付加されたものである。
}


// alert()､confirm()の使い方
{
  alert('オイッス！');
  // alertと違って、「はい」か「いいえ」を求められる。
  const answer = confirm('元気ハツラツ？');
  if(answer){
    alert('ファイト！イッパーツ！！');
    console.log('ファイト！イッパーツ！！');
  }else{
    alert('オロ〇ミンＣを飲みなさい。');
    console.log('オロ〇ミンＣを飲みなさい。');
  }
}


// setInterval()関数
{
  let i = 0;
  function showTime() {
      console.log(new Date());
      i++;
      if (i > 2) {
        clearInterval(intervalId);
    }
    //iの値が2以上になる、つまりこの関数が3回実行された後に止まるように設定されている。
  }
  const intervalId = setInterval(showTime, 1000);
}


// 例外処理を使う
{
  const name = 'oinarisan';
  console.log(name.toUpperCase()); //これで文字列をすべて大文字にできる。
}
{
  const name = 5;
  // ここからが例外処理↓
  try {
    console.log(name.toUpperCase());
  }catch(e){
    console.log(e);
  }
  // こうすることで、エラーを検知すれどプログラムを止めずに実行してくれる。
  console.log('Finish!');
}


// オブジェクトが複数ある場合
{
  const posts = [
    {
      text: 'このおじさん、変なんです！',
      likeCount: 10,
    },
    {
      text: 'そうです。ワダスが変なおじさんです。',
      likeCount: 30,
    },
    {
      text: 'だっふんだっ！！！',
      likeCount: 100,
    },
  ]; //配列ごと変数に代入するので「;」をつける

  function show(post){
    console.log(`投稿：${post.text} ／ いいね：${post.likeCount}`);
  }

  // 上記のように関数を設定した状態で、↓のように入力すると・・・
  show(posts[2]); //オブジェクト内の設定した値が表示される、という訳だ。
}
// メソッドを使う方法
{
  const posts = [
    {
      text: 'このおじさん、変なんです！',
      likeCount: 10,
      // show: function(){
      //   console.log(`投稿：${post.text} ／ いいね：${post.likeCount}`);
      // }
      show(){
        console.log(`投稿：${this.text} ／ いいね：${this.likeCount}`);
      }
    },
    {
      text: 'そうです。ワダスが変なおじさんです。',
      likeCount: 30,
      show(){
        console.log(`投稿：${this.text} ／ いいね：${this.likeCount}`);
      }
    },
    {
      text: 'だっふんだっ！！！',
      likeCount: 100,
      show(){
        console.log(`投稿：${this.text} ／ いいね：${this.likeCount}`);
      }
    },
  ]; //配列ごと変数に代入するので「;」をつける

  posts[1].show();
}


// クラスの実装
{
  class Post {
    constructor(text, likeCount) { //こいつで初期化しておく
      this.text = text;
      //constructor()の引数「text」を変数にして設定している。
      this.likeCount = likeCount; //同様
    }

    show() {
      console.log(`投稿：${this.text} ／ いいね：${this.likeCount}`);
    }
  }
  // ↑のとおりクラスを設定したら・・・
  // 今度は↓に配列を作って、新しい配列のデーターを挿入していく。
  const posts = [
    new Post('最強の男になる為に、私は今日、腕立て伏せを100回やりました', 50),
    new Post('最強の男になる為に、私は今日、四股踏みを左右30回やりました', 60),
    new Post('最強の男になる為に、私は今日、ランジを3分半やりました', 80),
    new Post('最強の男になる為に、私は今日、筋力と体力の養成技術の本を読みました', 80),
    new Post('最強の男になる為に、私は今日、埼京線に乗りました', 0),
  ];

  for(let i=0; i<posts.length; i++){
    posts[i].show();
  }
}

// クラスを拡張したい場合
{
  class Post {
    constructor(text, likeCount) {
      this.text = text;
      this.likeCount = likeCount;
    }

    show() {
      console.log(`投稿：${this.text} ／ いいね：${this.likeCount}`);
    }
  }

  class SponseredPost {
    constructor(text, sponser) {
      this.text = text;
      this.likeCount = 0;
      this.sponser = sponser;
    }

    show() {
      console.log(`投稿：${this.text} ／ いいね：${this.likeCount}`);
      console.log(`: sponsered by ${this.sponser}`);
    }

    like(){ //いいねボタンが押されるたびにいいねを増やして処理が実行されるようになる。
      this.likeCount++;
      this.show();
    }
  }

    const posts = [
      new Post('最強の男になる為に、私は今日、腕立て伏せを100回やりました', 50),
      new SponseredPost('最強の男になる為に、私は今日、埼京線に乗って30分ずっと立ってました', '黒の組織'),
    ];
  
    posts[1].show();
    posts[1].like();
    posts[1].like();
}

// クラスの継承
{
  class Post { // 親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post { // 子クラス
    constructor(text, sponsor) {
      super(text); //先にコイツを書いてやる必要がある
      this.sponsor = sponsor;
      // super()で継承した後、子クラス独自のものを記述していけばよい。
    }

    show() {
      super.show(); //先にコイツを書いてやる必要がある
      console.log(`... sponsored by ${this.sponsor}`);
      // super.show()で継承した後、子クラス独自のものを記述していけばよい。
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}