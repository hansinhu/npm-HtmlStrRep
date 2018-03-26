
// str: 目标字符串，sFrom: 被替换的字符串， sTo:  替换成字符串,
// const htmlStrRep = function () {
//   this.endObj = {
//     tag: '',
//     children: [],
//     nextStr: null
//   }
//   this.originStr = ''
//   this.sFrom = ''
//   this.sTo = ''
// }
// htmlStrRep.prototype.startRep = function (str, sFrom, sTo) {
//   this.originStr = str
//   this.sFrom = sFrom
//   this.sTo = sTo || ''
//   if (str.indexOf(sFrom) === -1 || !sFrom) {
//     return str
//   }
//   this.endObj = this.strToObj(str)
//   var changeStr = this.reGroup(this.endObj, sTo)
//   return changeStr
// }

// htmlStrRep.prototype.reGroup = function reGroup (splitObj, sTo) {
//   var groupStr = ''
//   if (splitObj.tag) {
//     var strArr = []
//     // 递归组合
//     splitObj.children.forEach(function (n) {
//       strArr.push(this.reGroup(n, sTo))
//     })
//     groupStr += strArr.join(splitObj.tag)
//   } else {
//     // 在此替换
//     groupStr += this.replace(splitObj.nextStr)
//   }
//   return groupStr
// }

// htmlStrRep.prototype.replace = function replace (str) {
//   return str.split(this.sFrom).join(this.sTo)
// }

// htmlStrRep.prototype.strToObj = function (str) {
//   // 暂存对象
//   var cashObj = {
//     tag: '',
//     children: [],
//     nextStr: null
//   }
//   // 匹配tag并去重
//   var tagArr = this.deleHave(this.machTag(str))
//   if (tagArr) {
//     var tag = tagArr[0]
//     cashObj.tag = tag
//     cashObj.nextStr = ''
//     var childArr = str.split(tag)
//     childArr.forEach(function (s, j) {
//       cashObj.children.push({
//         tag: '',
//         children: [],
//         nextStr: childArr[j]
//       })
//       if (s && this.deleHave(this.machTag(s))) {
//         cashObj.children[j] = this.strToObj(s)
//       }
//     })
//   } else {
//     cashObj.nextStr = str
//   }
//   return cashObj
// }

// // 匹配标签
// htmlStrRep.prototype.machTag = function (str) {
//   return str.match(/<[^>]+>/g)
// }

// // 数组去重
// htmlStrRep.prototype.deleHave = function (arr) {
//   if (!arr) {
//     return arr
//   }
//   var darr = []
//   for (var i = 0; i < arr.length; i++) {
//     if (darr.indexOf(arr[i]) === -1) {
//       darr.push(arr[i])
//     }
//   }
//   return darr
// }

// export default htmlStrRep

export default class HtmlStrRep {
  constructor () {
    this.endObj = {
      tag: '',
      children: [],
      nextStr: null
    }
    this.originStr = ''
    this.sFrom = ''
    this.sTo = ''
  }

  startRep (str, sFrom, sTo = '') {
    this.originStr = str
    this.sFrom = sFrom
    this.sTo = sTo
    if (str.indexOf(sFrom) === -1 || !sFrom) {
      return str
    }
    this.endObj = this.strToObj(str)
    let changeStr = this.reGroup(this.endObj, sTo)
    return changeStr
  }

  // 把树形对象重新组合，没有tag的执行替换
  reGroup (splitObj, sTo) {
    let groupStr = ''
    if (splitObj.tag) {
      let strArr = []
      // 递归组合
      splitObj.children.forEach((n) => {
        strArr.push(this.reGroup(n, sTo))
      })
      groupStr += strArr.join(splitObj.tag)
    } else {
      // 在此替换
      groupStr += this.replace(splitObj.nextStr)
    }
    return groupStr
  }

  replace (str) {
    return str.split(this.sFrom).join(this.sTo)
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
