# better-keyboard
A js keyboard component for mobile.

![better-keyboard preview](./demo.gif)  

## 立即使用

```HTML
<body>
  <script type="text/javascript" src="jkeyboard.js"></script>
  <script type="text/javascript">
    var keyboard = new JKeyboard({
      onInput: function (key, rs) {
          // do something
      },
      onClose: function () {
         // do something
      },
      onShow: function () {
         // do something 
      },
      onDelete: function (rs) {
         // do something
      }
    });                             
  </script>
</body>
```  

## 通过npm引入

安装better-keyboard

```shell
npm install better-keyboard --save-dev
```
引入better-keyboard

```javascript
import JKeyboard from 'better-keyboard'
````

测试demo页

```shell
npm run dev
```

打开浏览器访问如下地址, 查看效果

> localhost:9090  

## Options 参数  

-  defaultResult: `[]` 默认值
-  containEl:  `body` 父级容器
-  closeTitle: `完成` 关闭按钮文本
-  max:  `6` 最大长度

## Events 事件

-  onInput  点击数字按钮
-  onClose  键盘关闭
-  onClosed 关闭动画结束后 
-  onShow  键盘打开
-  onDelete 点击删除按钮  

## 实例方法

-  show  打开键盘
-  close  关闭键盘
-  empty 清空输入值
-  setResult  设置输入值
-  getResult 获取当前输入值
-  closeAndClear 关闭并清空已输入的值