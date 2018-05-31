# HtmlStrRep for html string repalce with keywords
### HtmlStrRep install
```bash
  npm install html-str-replace --save
```
### HtmlStrRep for ES6
```js

  import HtmlStrRep from 'html-str-replace'
  const strRep = new HtmlStrRep()

  /*
  * str: Origin string (原始字符串)
  * sFrom: will be repalce this string (被替换的字符串)
  * sTo:  sFrom => sTo
  * */
  let endStr = strRep.startRep(str, sFrom, sTo)
  console.log(endStr)
  
  // for example
  let newStr = strRep.startRep('<div><a href="www.hansin.com">hansin</a><div>hansinhu</div></div>', 'han', '<span style="color: red;">han<span>')
  console.log(newStr)

```
### update: 
  ```js
  npm login
  // 用户名:hansin
  // 密码:****
  // 邮箱:hansincn@gmail.com 
  npm version patch 
  npm publish
  ```
