//  从1099个名字中获取任意名字
(function () {
  'use strict';
    //  一共1099个
    var arr = [];
    //  获取随机名字
    function getNickname() {
        //  取0~1099的随机数
        var random = Math.floor(Math.random() * 1099);
        console.log(random  );
        if (random >= 1099) {
            throw new Error("获取人名数组下标月结！");
        } else {
          arr.push(random);
          return arr;
        }
    }
    exports.getNickname = getNickname;
  }());
