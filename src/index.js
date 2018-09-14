
// str: 目标字符串，sFrom: 被替换的字符串， sTo:  替换成字符串,
// import HtmlStrRep from '@/common/htmlStrRep.js'
// const strRep = new HtmlStrRep()
// strRep.startRep(n.data.enquiryContent, params.keyword, '#f44c3f')

export default class htmlStrRep {
  constructor () {
    this.endObj = {
      tag: '',
      children: [],
      nextStr: null
    }
    this.originStr = ''
    this.sFrom = ''
    this.sToColor = ''
  }

  startRep (str, sFrom, color = '#f44c3f') {
    this.originStr = str
    this.sFrom = sFrom
    this.sToColor = color
    this.endObj = this.strToObj(str)
    let changeStr = this.reGroup(this.endObj)
    return changeStr
  }

  // 把树形对象重新组合，没有tag的执行替换
  reGroup (splitObj) {
    let groupStr = ''
    if (splitObj.tag) {
      let strArr = []
      // 递归组合
      splitObj.children.forEach((n) => {
        strArr.push(this.reGroup(n))
      })
      groupStr += strArr.join(splitObj.tag)
    } else {
      // 在此替换
      groupStr += this.replace(splitObj.nextStr)
    }
    return groupStr
  }

  replace (str) {
    return str.replace(new RegExp(this.sFrom, 'gi'), (key) => {
      if (key !== '') {
        return '<span style="color: ' + this.sToColor + ';">' + key + '</span>'
      } else {
        return ''
      }
    })
  }

  // 把字符串递归切割成树形对象
  strToObj (str) {
    // 暂存对象
    let cashObj = {
      tag: '',
      children: [],
      nextStr: null
    }
    // 匹配tag并去重
    let tagArr = this.deleHave(this.machTag(str))
    if (tagArr) {
      let tag = tagArr[0]
      cashObj.tag = tag
      cashObj.nextStr = ''
      let childArr = str.split(tag)
      childArr.forEach((s, j) => {
        cashObj.children.push({
          tag: '',
          children: [],
          nextStr: childArr[j]
        })
        if (s && this.deleHave(this.machTag(s))) {
          cashObj.children[j] = this.strToObj(s)
        }
      })
    } else {
      cashObj.nextStr = str
    }
    return cashObj
  }

  // 匹配标签
  machTag (str) {
    return str.match(/<[^>]+>/g)
  }

  // 数组去重
  deleHave (arr) {
    if (!arr) {
      return arr
    }
    let darr = []
    for (let item of arr) {
      if (darr.indexOf(item) === -1) {
        darr.push(item)
      }
    }
    return darr
  }
}
