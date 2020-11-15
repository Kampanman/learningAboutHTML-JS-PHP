<?php

// User
class User {
  // property
  public $name;
  // constructor
  public function __construct($name) { // 「下のメソッドでは、こういうインスタンスを使いますよ」
    $this->name = $name;  // __construct()"といえば"、その後には$thisが出てくると思え。
  }

  // アクセス権
  // - private: そのクラス内からのみアクセス可能
  // - protected: そのクラス＋親子クラス内からのみアクセス可能
  // - public: どこからでもアクセス可能

  // method
  public function sayHi() {
    echo "hi, i am $this->name!<br>";
  }
}
// このように定義づけしてから、新しい要素（この場合はユーザーネーム）を追加していく。

$tom = new User("Tom");
$bob = new User("Bob");

echo $tom->name; // Tom
echo "<br>";
$bob->sayHi(); // hi, i am Bob!

?>

<?php

// クラス継承
    // あるクラスを基に新しいクラスを作りたい場合に便利な仕組み

// class User {
//   public $name;
//   public function __construct($name) {
//     $this->name = $name;
//   }
//   final public function sayHi() {
//     echo "hi, i am $this->name!";
//   }
// }
// 上記が、継承したいクラスの本体。

class AdminUser extends User { // 「Admin ○○ extends」と打ち込めば継承できる
  public function sayHello() {
    echo "hello from Admin!";
  }
  // override
  public function sayHi() {
    echo "[admin] hi, i am $this->name!";
  }
}

$tom = new User("Tom");
$steve = new AdminUser("Steve");
// echo $steve->name;
$tom->sayHi();
$steve->sayHi();
// $steve->sayHello();

?>

<?php
// interface（このクラスではこのメソッドを必ず実装してくださいよ、というルールを定義するための仕組み）

interface sayHi {
  public function sayHi(); // インターフェースの特性上、必ずメソッドのアクセス権はpublicになる。
}

interface sayHello {
  public function sayHello();
}

class User implements sayHi, sayHello {
  public function sayHi() {
    echo "hi!";
  }
  public function sayHello() {
    echo "hello!";
  }
}

?>
