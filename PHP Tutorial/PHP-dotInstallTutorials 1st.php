<?php

// コメント
# コメント
/*
コメント
コメント
コメント
*/

<p>Hello World <?php echo "from PHP";?></p>
<p>Hello World <?= "from PHP";?></p>

<?php

データ型
-文字列：string
-数値 integer float
-論理値 boolean / true false
-配列
-オブジェクト
-null

$msg = "Hello from the Top !";
echo $msg;
var_dump($msg);

// 定数：「変更されない値」につけるラベル
define("MY_EMAIL","taguchi@dotinstall.com");

echo "<br>";
echo MY_EMAIL;
// MY_EMAIL="hogehoge";

var_dump(__LINE__); // 10
echo "<br>";
var_dump(__FILE__); // ファイル名が表示される
echo "<br>";
var_dump(__DIR__); // どのディレクトリにあるかが表示される


// 数値型の演算

// + - * / %

// $x = 10 % 3; // 1（余り）
// $y = 30.2 / 4 // 7.55（割った解）
// var_dump($x);
// var_dump($y);

// 単項演算子（インクリメント） ++ --
// $z = 5;
// $z++; // 6
// var_dump($z);
// $z--; // 5
// var_dump($z);

// 代入を伴う演算子
$x = 5;
// $x = $x * 2;
$x*=2; // 10
var_dump($x);

// 文字列
// "" 特殊文字(\n,\t)変数

// $name = "taguchi";
// $s1 ="hello $name!\nhello again!"."<br>";
// $s1 ="hello {$name}!\nhello again!"."<br>";
// $s1 ="hello ${name}!\nhello again!"."<br>";
// $s2 ='hello $name!\nhello again!'."<br>";
// var_dump($s1);
// var_dump($s2);

// 連結
$s = "hello"."world";
var_dump($s);

// if 条件分岐
// 比較演算子 > < >= <= == === != !==
// 論理演算子 and && , or || , !

$score =85;

if($score > 80){
  echo "Good!";
}elseif($score > 60){
  echo "OK";
}else{
  echo "oh...";
}

// 真偽値
/*
# falseになる場合
文字列：空、"0"
数値：0、0.0
論理値：falseになる場合
配列：要素の数が0
null
*/

$x=5;
  if($x==true){
    echo "Great!";
  }

  # 三項演算子

$a=8;
$b=5;
  $max=($a>$b)? $a:$b; // これでif文を置き換えている
  // 因みに意味は、「($a>$b)の条件が真だったら$aを、偽だったら$bをmaxに代入しなさい」というもの。

  if($a>$b){
    $max=$a;
  }else{
    $max=$b;
  }

// swich 条件分岐

$signal = "green";

switch($signal){
  case "red":
    echo "stop!";
    break;
  case "blue":
  case "green":
    echo "go!";
    break;
  case "yellow":
    echo "caution!";
    break;
  default:
    echo "wrong signal";
    break;
}
// ループ処理
// while
// do...while

$i = 100;
// while($i<10){
// echo $i;
// $i++;
// }

do {
  echo $i;
  $i++;
}while($i<10);

// ループ処理
// for
// break: ループを抜ける
// continue: それ以降の処理を実行せずに次のループに移る

// $i=0;
// while($i<10){
//   echo $i;
//   $i++;
// }

for ($i=0;$i<10;$i++){
  if($i===5){
    // break;
    continue;
  }
  echo $i;
}


// 配列
// key value

// $sales =array(
//   "taguchi"=>200,
//   "kojima"=>800,
//   "lichard"=>600,
// );

$sales =[
  "taguchi"=>200,
  "kojima"=>800,
  "lichard"=>600,
];

var_dump($sales["kojima"]); //800
$sales["kojima"]=900;
var_dump($sales["kojima"]); //900

$colors = ["red","blue","pink"];
var_dump($colors[1]); //blue


// 配列
// foreach

// $sales =[
//   "taguchi"=>200,
//   "kojima"=>800,
//   "lichard"=>600,
// ];
//
// foreach ($sales as $key=>$value){
//   echo "($key)$value";
// }

$colors = ["red","blue","pink"];

// foreach($colors as $value){
//   echo "$value"; // ""（ダブルクォーテーション）をつけることをお忘れなく
// }

foreach($colors as $value):
  echo "$value";
endforeach;

<ul>
  <?php foreach($colors as $value): ?>
  <li><?= "$value";?></li>
  <?php endforeach; ?>
</ul>


<?php

// 関数

function saiHi($name ="taguchi"){
  // echo "Hi!".$name;
  return "Hi!".$name;
}

// saiHi();

// saiHi("Tom");
// saiHi("Bob");
// saiHi();

$s = sayHi();
var_dump($s);

$lang = "ruby";

function saiHi($name){
  $lang = "PHP"; // この$langの値（PHP）はこの関数内でのみ有効。
  echo "hi! $name from $lang";
}

saiHi("Tom");
var_dump($lang); // ruby


// 組み込み関数

$x = 5.6;

// echo ceil($x); // 小数点以下を切り上げて、6になる。
// echo floor($x); // 小数点以下を切り捨てて、5になる。
// echo round($x); // 四捨五入して6になる。
// echo rand(1,10); // 1から10までの数字がランダムに出力される

$s1 = "hello";
$s2 = "ねこ";
echo strlen($s1); // 5（文字数を数えてくれる）
echo mb_strlen($s2); // 2（日本語の文字列に関してはこちらを使おう）

$colors = ["red","blue","pink"];
echo count($colors); // これで要素の数がカウントされる
echo implode("@",$colors);
// 配列の要素を区切り文字（この場合は@）で連結して文字列にして返す
