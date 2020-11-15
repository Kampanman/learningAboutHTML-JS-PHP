<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>PHP Youtube Tutorials</title>
  </head>
  <body>

  <?php
    echo("Hello World");
    echo "<br>";
    echo "<h1>I's Site</h1>";
    echo "<p>edited Mike's Site</p>";
   ?>
<hr>
   <?php
     $characterName = "Tom" ;
     $characterAge = 50 ;
     echo "There once was a man named $characterName <br>" ;
     echo "He was $characterAge year old <br>" ;
    ?>
<hr>
   <?php
     $phrase = "To be or not to be" ;
     $age = 30 ;
     $gpa = 30.3 ;
     $isMale = false ;
     echo $phrase ;
    ?>
<hr>
   <?php
     $phrase = "Giraffe Academy" ;
     echo strtolower("$phrase")."<br>"  ;
     echo strtoupper("$phrase")."<br>"  ;
     echo strlen("$phrase")."<br>"  ;
     echo $phrase[0]."<br>" ;
     echo $phrase[1]."<br>" ;
     echo substr($phrase,8,3)."<br>" ;
    ?>
<hr>
   <?php
     echo 5 + 9; echo "<br>" ;
     echo (5 + 9) / 2 ; echo "<br>" ;
     echo 10 * 5 % 3; echo "<br>" ;
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
    <hr>
    <form action="File1.php" method="get">
      <!-- methodは、「get」よりも「post」にした方が安全。
      その場合、出力するPHPも、「$_POST[" "]」とする必要がある。 -->
      Your name: <input type="text" name="username" style="width:100">
      <br>
      Your age: <input type="number" name="userage" style="width:50">
      <br>
      <input type="submit" value="これで送信する">
    </form>
    <br>
    <!-- 以下を、「site.php」のファイルに載せる。 -->
    <?php
      echo $_GET["username"];
      echo $_GET["userage"];
     ?>
    <hr>
    <form action="File1.php" method="post">
      Apples: <input type="checkbox" name="fruits[]" value="apples"><br>
      Oranges: <input type="checkbox" name="fruits[]" value="oranges"><br>
      Pears: <input type="checkbox" name="fruits[]" value="pears"><br>
      <!-- チェックボックス形式で「fruits」の中身を選択してもらうには、上記のようにするとよい。 -->
      <input type="submit" value="これで送信する">
    </form>

    <?php
      $fruits = $_POST["fruits"];
      echo $fruits[1];
      // []の中に番号を入れれば、0をスタートとして、
      // チェックをつけられたもののうちx番目のものが出力される。
     ?>
    <hr>
    <form action="File1.php" method="post">
      <input type="text" name="student">
      <input type="submit" value="これで送信する">
    </form>

     <?php
      $grades = array("Jim"=>"A+","Pam"=>"B","Oscar"=>"B-");
      echo $grades[];
      // この[]の中に上記のarray中の人物名を入力すれば、その人物の値が表示される。
      // echoの上の段で「$grades["Jim"] = "F";」といった具合に入力すれば、
      // もともとのarray中の値がFに更新される。
      ?>
    <hr>
    <?php
      function sayHi(){
        echo "Hello User";
    }
    // ここまでが関数。
    // これ以降に出力値を入力する。

    sayHi();
    ?>

    <!-- 引数を設けて値を代入する場合はこうする↓ -->
    <?php
      function sayHi($name,$age) {
        echo "Hello $name, you are $age <br>";
    }
    // 以下、それぞれ引数も含めて入力した値↓
    sayHi("Tom",30);
    sayHi("John",28);
    sayHi("Dave",21);
    ?>
    <hr>
    <?php
       function cube($num){
         return $num * $num * $num ;
        }
  //   上記が、引数の関数。
  // 　尚、「return」で関数は一度区切られる。
      $cubeResult = cube(4);
      echo $cubrResult;
    ?>
    <hr>
    <?php
      $isMale = true;
      $isTall = true;
      if($isMale && $isTall){
        echo "You are a tall male.";
      }elseif($isMale && !$isTall){
        <!-- 条件中で、最初に「!」とつければ、「〇〇でない」という意味になる。 -->
        echo "You are not a tall male."
      }elseif(!isMale && $isTall){
        echo "You are a tall female."
      }else{
        echo "You are nomal female.";
      }
    ?>
    <hr>
    <?PHP
       function getMax($num1,$num2,$num3){
         if($num1>=$num2 && $num1>=$num3){
           return $num1;
         }elseif($num2>=$num1 && $num2>=$num3){
           return $num2;
         }else{
           return $num3;
       }
     }

     echo getMax(360,120,480);
    ?>
    <hr>
    <form action="File1.php" method="post">
      First Num: <input type="number" step="0.1" name="num1"><br>
      <!-- 「step」で小数点第何位まで指定できるかを決められる。 -->
      OP: <input type="textbox" name="op"><br>
      Second Num: <input type="number" step="0.1" name="num2">
      <input type="submit" value="これで送信する">
    </form>

    <?PHP
    $num1 =$_POST["num1"];
    $num2 =$_POST["num2"];
    $op =$_POST["op"];

    if($op == "+"){
      echo $num1 + $num2;
    }elseif($op == "-"){
      echo $num1 - $num2;
    }elseif($op =="*"){
      echo $num1 * $num2;
    }else{
      echo "Invalid Operator";
    }
    ?>
    <hr>
    <form action="File1.php" method="post">
      What was your grade?<br>
      <input type="text" name="grade"><br>
      <input type="submit" value="これで送信する">
    </form>
    <?php
        $grade = $_POST["grade"];
        switch($grade){
          case "A":
            echo "You did amazing!";
          break;
          case "B":
            echo "You did pretty good!";
          break;
            default:
              echo "Goog Luck...";
            end
        }
      ?>
    <hr>
    <?php
      $index = 1;
      while($index <= 5){
        echo "$index <br>";
        $index++;
        // ↑これがないと無限ループする。
      }
    ?>
    <!-- これがfor文だと以下のようになる。 -->
    <?php
      for ($i=1; $i<=5; $i++) {
        echo "$i <br>";
      }
    ?>
    <!-- 以下、for文の発展型 -->
    <?php
      $luckeyNumbers = array(4,8,12,16,20);
      for($i=0; $i<=count($luckeyNumbers); $i++){
        echo "$luckeyNumbers[$i] <br>";
      }
    ?>

    <?php
      // ループ処理
      // while
      // do ... while

      $i = 100;
      // while ($i < 10) {
      //   echo $i;
      //   $i++;
      // }
      // ↑では何も出力されないが、↓ならとりあえず100は出力されるが、それ以上は続かない。
      do {
        echo $i;
        $i++;
      } while ($i < 10);
    ?>
  </body>
</html>
