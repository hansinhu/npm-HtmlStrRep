# HtmlStrRep for html string repalce with keywords
### HtmlStrRep install
```bash
  npm install html-str-replace --save
```
### HtmlStrRep for ES6
```js

// 使用
<template>
  <div class="home">
    <h3>Html rep Test</h3>
    <h4 v-html="keyName(tHtml, tkey, '#407CFE')"></h4>
  </div>
</template>

import HtmlStrRep from 'html-str-replace'
export default {
  name: 'home',
  data () {
    return {
      tHtml: '<div>this is hansin; this is Hansin; this is hanSin <span class="hansin">hansintest</span></div>',
      tkey: 'hansin'
    }
  },
  methods: {
    keyName (html, keywords) {
      const strRep = new HtmlStrRep()
      return strRep.startRep(html, keywords, '#407CFE')
    }
  }
}

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
