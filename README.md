# jkeyboard
A js keyboard component for mobile.

![jkeyboard preview](./demo.gif)  

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