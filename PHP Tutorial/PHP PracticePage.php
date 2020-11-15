<!DOCTYPE html>
<html lang="ja" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP PracticePage</title>
    <style type="text/css">
      body {line-height:17.5px;}
      hr+p {font-weight:bold;}
      [type=checkbox]{display:none}
      [type=checkbox]+span{visibility:hidden}
      [type=checkbox]:checked+span{visibility:visible}
      .blind{
        display:inline-block;
        border-bottom:solid 1px #009999
      }
      pre>.blind{
        display:inline-block;
        border: 1px solid #009999;
        margin: 1px 3px;
      }
      span {
        font-weight: bold;
        color: orange;
      }
      .memoblind {
        font-weight: normal;
        color:blue;
      }
    </style>
  </head>
  <body>
<p><a href="https://yomukiku-mukashi.com/sumida.html">隅田川花火大会のはじまり</a></p>
    <pre>
      <label class="blind"><input type="checkbox"><span class="memoblind">
  隅田川花火大会の起源は享保18年（1733年）にまでさかのぼります。
  この前年、全国で飢饉、そして江戸でコレラが流行し、
  多くの人びとが亡くなりました。
  時の将軍徳川吉宗は、亡くなった方々の魂を慰めるため、
  そして悪疫をはらうために両国橋のたもとで
  水神祭をとり行うことにしました。
  その際に、余興として花火を打ち上げのが
  隅田川花火大会のはじまりです。
  この時に花火を担当したのが有名な花火職人、
  六代目鍵屋弥兵衛（やへえ）という男です。
  最初は20発という小規模なものでしたが、年々規模が大きくなっていきました。
  文化7年（1810年）鍵屋の番頭に静七というたいへん優秀な男が出ました。
  清七はのれん分けを許されて、両国の広小路吉川町に玉屋を築き、
  初代玉屋市兵衛を名乗りました。
  「お前は一を聞いては十を悟る、実に教えがいのある番頭であった。
  しかし、これからは商売の上ではカタキ同士だ。ひとつ、鍵屋の看板を
  ひきずり下すくらいの覚悟でやってみなさい」
  「旦那さま、もったいないお言葉です！」
  そんなやり取りがあったかどうかわからないですが…
  本当に玉屋のほうが人気が出てきました。
  両国橋をはさんで
  「玉屋ーーー鍵屋ーーー」
  という掛け声が上がりました。
  後発組である玉屋のほうが掛け声が先になってるんですね。
  それくらい、玉屋のほうが技術がすぐれ美しかったのです。
  しばらく鍵屋と玉屋の二頭体制が続きますが、
  それも長く続きませんでした。
  天保14年（1843年）玉屋は火事を出してしまいます。
  しかもまずいことに、ちょうど将軍徳川家慶が
  日光に参詣する前日でした。
  「こんな大切な時期に江戸をさわがして、けしからん！！」
  玉屋は江戸の退去を命じられてしまいました。
  こうして玉屋の歴史はただの一代で幕を下ろしてしまいました。
  しかし玉屋なき後も玉屋の花火の素晴らしさをしたう江戸庶民の声は大きかったのです。
  橋の上玉屋玉屋の声ばかりなぜに鍵屋と言わぬ情無し
  隅田川の花火大会。その歴史。
  幕末の動乱期や太平洋戦争の時など一時的な中断はありましたが
  今日まで連綿と続いています。
      </span></label>
    </pre>
    <?php
      echo "夏の風物詩といえば、誰もが花火大会を想像するのではないでしょうか。";
      echo "<br>";
      echo "そんな花火大会の一つとして日本全国の中でもっとも有名な花火大会が、東京三大花火大会の一つとして数えられる、隅田川花火大会です。";
      echo "<br>";
      echo "東京三大花火大会の一つである隅田川花火大会は、毎年７月の最終土曜日に開催されます。";
      echo "<br>";
      echo "この隅田川花火大会の歴史をさかのぼると、驚くことに約３００年前の江戸時代から始まったとされています。";
      echo "<br>";
     ?>
<pre>上のphpの中身
  <label class="blind"><input type="checkbox"><span class="memoblind">
echo "夏の風物詩といえば、誰もが花火大会を想像するのではないでしょうか。";
echo "<br>";
echo "そんな花火大会の一つとして日本全国の中でもっとも有名な花火大会が、東京三大花火大会の一つとして数えられる、隅田川花火大会です。";
echo "<br>";
echo "東京三大花火大会の一つである隅田川花火大会は、毎年７月の最終土曜日に開催されます。";
echo "<br>";
echo "この隅田川花火大会の歴史をさかのぼると、驚くことに約３００年前の江戸時代から始まったとされています。";
echo "<br>";
  </span></label>
</pre>
    <?php
      $caracterName = "与平";
      $caracterAge = 30;
      $phrase = "玉屋～！";
      echo "{$caracterAge}歳の若者の{$caracterName}も、そんな江戸時代から続く隅田川花火大会が大好き。<br>";
      echo "夏が来るたび、よく会場に足を運んでは、{$phrase}と叫んでいたのでした。";
      echo "<hr>";
     ?>
 <pre>上のphpの中身
   <label class="blind"><input type="checkbox"><span class="memoblind">
 $caracterName = "与平";
 $caracterAge = 30;
 $phrase = "玉屋～！";
 echo "{$caracterAge}歳の若者の{$caracterName}も、そんな江戸時代から続く隅田川花火大会が大好き。<br>";
 echo "夏が来るたび、よく会場に足を運んでは、{$phrase}と叫んでいたのでした。";
 echo "<hr>";
 </span></label>
 </pre>
    <?php
      $num = 10 ; echo "<br>" ;
      $num +=20 ; echo "<br>" ;
      echo $num ; echo "<br>" ;
      echo abs(-100); echo "<br>" ;
      echo pow(2,4) ; echo "<br>" ;
      echo sqrt(144) ; echo "<br>" ;
      echo max(2,10); echo "<br>" ;
      echo min(2,10); echo "<br>" ;
      echo round(2,10); echo "<br>" ;
      echo floor(3.9) ;
    ?>
    <pre>上のphpの中身
  $num = 10 ; echo "<br>" ;
  $num +=20 ; echo "<br>" ;
  echo $num ; echo "<br>" ;
  echo abs(-100); echo "<br>" ;
  echo pow(2,4) ; echo "<br>" ;
  echo sqrt(144) ; echo "<br>" ;
  echo max(2,10); echo "<br>" ;
  echo min(2,10); echo "<br>" ;
  echo round(2,10); echo "<br>" ;
  echo floor(3.9) ;
      <label class="blind"><input type="checkbox"><span class="memoblind">
  echo $num ; echo "<br>" ;
   // つまり、もともとの10に20を足した値。
  echo abs(-100); echo "<br>" ;
   // absとは、「絶対値」を意味する。
  echo pow(2,4) ; echo "<br>" ;
  // powとは、「指数表現」つまり「乗数」を意味する。
  // この場合なら、２の4乗で答えは16になる。
  echo sqrt(144) ; echo "<br>" ;
  // sqrtとは、「平方根」を意味する。
  // この場合なら、144は12の平方根だから、答えは12。
  echo max(2,10); echo "<br>" ;
  echo min(2,10); echo "<br>" ;
  // maxとminは言わずもがな、範囲内の最大値と最小値。
  echo round(2,10); echo "<br>" ;
  // roundとは、左側の数を右側の少数第何の値まで四捨五入すること。
  echo floor(3.9) ;
  // floorとは、左側の数の小数点以下、右側の第何の値まで切り捨てること。
    </span></label>
    </pre>
    <hr>

    <pre>問題１のphpの中身
      <label class="blind"><input type="checkbox"><span class="memoblind">
  echo $_POST["username"];
  echo "／";
  echo $_POST["userage"];
      </span></label>
      </pre>
      <hr>

      <pre>問題２のphpの中身
        <label class="blind"><input type="checkbox"><span class="memoblind">
  $fruits = $_POST["fruits"];
  echo $fruits[1];
  // []の中に番号を入れれば、0をスタートとして、チェックをつけられたもののうちx番目のものを出力させられる。
      </span></label>
      </pre>

      <hr>
      <pre>問題３のphpの中身
        <label class="blind"><input type="checkbox"><span class="memoblind">
  $grades = array("Jim"=>"A+","Peter"=>"B","Oscar"=>"B");
  echo $grades[];
  // この[]の中に上記のarray中の人物名を入力すれば、その人物の値が表示される。
  $grades["Sum"] = "A";
  echo $grades["sum"];
      </span></label>
      </pre>

      <hr>
      <pre>問題４のphpの基本例題
        <label class="blind"><input type="checkbox"><span class="memoblind">
  function sayHi(){
    echo "Hello User";
  }
  sayHi();
 ?>
     </span></label>
     </pre>
       <br>
       <?php
        function sayHi($name,$age){
          echo "Hello {$name}, you are {$age}<br>";
        }
        sayHi("Tom",30);
        sayHi("John",28);
        sayHi("Dave",21);
        ?>
        <pre>問題４のphpの中身
          <label class="blind"><input type="checkbox"><span class="memoblind">
  function sayHi($name,$age){
    echo "Hello {$name}, you are {$age}<br>";
  }
  sayHi("Tom",30);
  sayHi("John",28);
  sayHi("Dave",21);
        </span></label>
        </pre>

         <?php
           $num3 = 20;
           $num4 = 30;
           $op = "*";

           if($op=="+"){
             echo $num3+$num4;
           }elseif($op=="-"){
             echo $num3-$num4;
           }elseif($op=="*"){
             echo $num3*$num4;
           }else{
             echo "Invalid Operator";
           }
         ?>
   <pre>問題５のphpの中身
   <label class="blind"><input type="checkbox"><span class="memoblind">
 $num3 = 20;
 $num4 = 30;
 $op = *;

 if($op=="+"){
   echo $num3+$num4;
 }elseif($op=="-"){
   echo $num3-$num4;
 }elseif($op=="*"){
   echo $num3*$num4;
 }else{
   echo "Invalid Operator";
 }
         </span></label>
         </pre>
         <hr>
          <?php
          $grade = "B";
          switch($grade){
            case "A":
              echo "You did amazing!";
            case "B":
              echo "You did pretty good!";
            default:
              echo "Good Luck...";
          }
           ?>
   <pre>問題６のphpの中身
   <label class="blind"><input type="checkbox"><span class="memoblind">
 $grade = B;
 switch($grade){
   case "A":
     echo "You did amazing!";
   case "B":
     echo "You did pretty good!";
   default:
     echo "Good Luck...";
   end
   </span></label>
   </pre>
         <hr>
         <?php
            for($i=1; $i<5; $i++){
              echo "間もなく、{$i}番線に、電車が参ります。";
            }
          ?>
    <pre>問題７のphpの中身
    <label class="blind"><input type="checkbox"><span class="memoblind">
      for($i=1; $i<5; $i++){
        echo "間もなく、{$i}番線に、電車が参ります。";
      }
    </span></label>
    </pre>
         <hr>
         <?php
          $i=100;
          do {
            echo $i;
            $i++;
          }while($i<10);
          ?>
    <pre>問題８のphpの中身
    <label class="blind"><input type="checkbox"><span class="memoblind">
  $i=100;
  do {
    echo $i;
    $i++;
  }while($i<10);
    </span></label>
    </pre>
  </body>
</html>
