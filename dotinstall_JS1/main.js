'use strict';
//↑何じゃいこれは！？
// Ａ：エラーを発見しやすくする為のプログラム。

console.log('アイ～ン'); 
//コンソールは、処理結果を確認する為のもの
console.log('ワァァァオ！'); 

console.log('（別ファイルから）ワァァァオ！'); 
/* console等の文字を「Console」などと誤表記してしまうと、エラーになる。
 こういうエラーは、Chromeのコンソール画面（「検証」を押すと出る）から確認できる。 */
 console.log('That\'s right!\n'+'I\'m Henna Ojisan!'); 
//  「\'」をつけることで「I'm」などを表現できる。
// 　「\n」は空白の挿入を意味する。

// 定数 const （ある固定の値を代入したい時に用いる）
// 変数 let (var) （値をその都度変えて代入する時に用いる）

const price = 150;
console.log(price * 100);
console.log(price * 150);

let fee = 380;
console.log(fee * 2);
let fee2 = 450;
console.log(fee2 * 2);

// 演算子各種について
let foodPrice = 500;

// foodPrice = foodPrice + 100;
foodPrice += 100; // 600

// foodPrice = foodPrice * 2;
foodPrice *= 2; // 1200

// foodPrice = foodPrice + 1;
// foodPrice += 1;
foodPrice++; // 1201

// foodPrice -= 1;
foodPrice--; // 1200

console.log(foodPrice);

// データ型の確認方法
console.log(typeof 'hello'); //String
console.log(typeof 5); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object（{"～","～"}のこと）

// 文字列と数値で計算する。
console.log('5'-'3'); //数字同士だと文字列になっていても計算できる
console.log('5'+'3'); //しかし「+」の場合はそうはいかない
//文字列の状態の数字を使って「+」の計算をする場合は、次のようにする。
console.log(parseInt('5', 10) +'3'); 
// parseIntの第一引数指定した文字列型の数字を、第二引数で10進数の数値に変換してくれる。


// 比較演算子
const bookPrice = 1200;

// console.log(bookPrice > 1000); // true
// console.log(bookPrice < 1000); // false
// console.log(bookPrice >= 1000); // true
// console.log(bookPrice <= 1000); // false
// console.log(bookPrice === 1000); // false
// console.log(bookPrice !== 1000); // true

// false <- 0, null, undefined, '', false
// true <- それ以外

console.log(Boolean(0));
console.log(Boolean('hello'));
// Booleanとは真偽値のこと


// if文
const score = 75;
if (score >= 80) {
    console.log('ワァァァオ！！！');
  } else if (score >= 60) {
    console.log('だいじょうぶだぁ');
  } else {
    console.log('だっふんだ！');
  }

// if文の条件演算子
// 「条件式 ? trueの処理 : falseの処理」という書き方
const totalScore = 406;
totalScore >= 400 ? console.log('ワァァァオ！！！') : console.log('だっふんだ！');

// 複数の条件の組み合わせ
const thisScore = 94;
const name = 'ヨシヒコ';

// 普通の条件式で書くと↓のようになるが・・・
/* if (thisScore >= 80) {
   if (name === 'ヨシヒコ') {
     console.log('流石だな！');
  }
 } */

// 論理演算子ならば次のようになる↓

// && なおかつ（AND）
// || もしくは（OR）
// ! 〜ではない（NOT）

if (thisScore >= 80 && name === 'ヨシヒコ') {
  console.log('流石だな！');
}

// Switch構文
const signal = 'blue';
switch(signal){
  case 'red' :
    console.log('Stop!');
  case 'yellow' :
    console.log('Caution!');
  case 'blue' :
  case 'green' :
    console.log('You can go.');
  default :
  console.log('Wrong signal!');
}


// for文でのループ処理
for (let i=0 ; i<12; i++){
  console.log(`アイ～ン！ ${i+1}回目`);
  /* ${}のように、文字列に変数を埋め込む方法を、「テンプレートリテラル」という。
  　こいつを文字列内で使うには、シングルorダブルクォーテーションでなく、「``」で囲む必要がある */
}

// while文でのループ処理
// while文は、指定した条件が満たされている間、特定の処理を繰り返す為に使われる。
let hp = 60;

while(hp>=0){
  console.log('ドラゴンフライは火の息を吐いた！');
  console.log('もょもとは 18のダメージを受けた！');
  hp -= 18; //←の処理分は必ず書こう。でないと無限ループになる！
  console.log(`（HP : ${hp}）`);
}

// continueやbreakの使い方
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      // iが３の倍数の時だけスキップされてループする。
      continue;
    }
  }
for (let j = 1; j <= 10; j++) {
    if (j === 4) {
      break;
      // ｊの値が4になる前にループが止まる。
    }
    console.log(j);
  }


// 関数で処理を纏める方法
console.log("1月は正月で酒が飲めるぞ～♪");
console.log("酒が飲める飲めるぞ～♪");
console.log("酒が飲めるぞ～♪");
console.log("2月は正月で酒が飲めるぞ～♪");
console.log("酒が飲める飲めるぞ～♪");
console.log("酒が飲めるぞ～♪");
/* 上記のように毎度毎度記述していくのは大変だから、
　こういう感じでまとめてしまおう↓ */
function drink() {
  console.log("酒が飲める飲めるぞ～♪");
  console.log("酒が飲めるぞ～♪");
}

console.log("3月はひな祭りで酒が飲めるぞ～♪");
drink();
console.log("4月は花見で酒が飲めるぞ～♪");
drink();


// 引数を使って関数を出す方法
function drinkSong(month,event){
  console.log(`${month}月～は${event}酒が飲めるぞ～♪`);
  console.log("酒が飲める飲めるぞ～♪ 酒が飲めるぞ～♪");
}
/* こんな風に関数を設定しておこう。
　あとは引数を設定して実際に関数を出力すればＯＫだ */
drinkSong(1,"正月～で");
drinkSong(2,"豆まき～で");
drinkSong(3,"ひな祭り～で");
drinkSong(4,"花見～で");
drinkSong(5,"こどもの日～で");
drinkSong(6,"田植え～で");
drinkSong(7,"七夕～で");
drinkSong(8,"暑いか～ら");
drinkSong(9,"台風～で");
drinkSong(10,"月見～で");
drinkSong(11,"何でもないけど");
drinkSong(12,"ドサクサ～で");

// 尚、引数の必要な関数で何も引数を入力してない状態でも関数が正常に出るようにするには、functionのところで「デフォルト値」を設定しとけばよい。
function Burn(magicAppearance = 'メラゾーマ', magicReal='メラ'){ //このようにデフォルト値を設定しておく。
  console.log(`今のは${magicAppearance}ではない・・・${magicReal}だ。`);
}
Burn();


// returnで値を返す
function sum(a,b,c){
  console.log(a+b+c);
}

function sum2(a,b,c){
  return a+b+c;
}; //←他の変数に代入したりする場合には、セミコロンを付ける必要がある。
// console.logとの違いは、これを他の場所でも組み合わせて、計算などで使えるようになる、ということ。

sum(1,2,3);
sum2(1,2,3);


// 関数式
const total = sum2(1,2,3) + sum2(3,4,5);
console.log(total);


// アロー関数
// const sumFinal = function(a,b,c){
//   return a+b+c;
// };

// ↑と↓は同じ意味になる。
const sumFinal = (a,b,c) => a+b+c;
/*この場合「sumFinal」が関数名になる。
　=>の右側にreturnをつける必要はない。 */


const totalFinal = sumFinal(10,20,30)+sumFinal(5,10,25);
console.log(totalFinal);

// const double = function(a){
//   return a * 2;
// };
const double = (a) => a * 2;
const answer = double(100)+double(150);
console.log(answer);

/* functionやif文などの{}の内側で定義した変数は、その{}の中でしか通用しない。
　この{}の中の範囲のことを「スコープ」という。
　変数の及ぼす範囲を全体としたいのならば、変数はコード画面の一番上で定義する必要がある。
　この時の範囲は「グローバルスコープ」とよばれる。 */

// 同じ変数を複数のjsファイルやscriptエリアで使いまわす場合は、次のようにスコープをブロックごとに分けて記述する。

// main.js↓
{
  const num = 100;
  console.log(num);
}

// main.js 2↓
{
  const num = 300;
  console.log(num);
}

