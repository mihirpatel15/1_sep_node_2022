const path = require('path')
//console.log(path)
console.log(path.basename('G:/1_aug_node_2022/path.js'))
console.log(path.dirname('G:/1_aug_node_2022'))
console.log(path.extname('G:/1_aug_node_2022/path.js'))
console.log(path.format({dir:'G:/1_aug_node_2022',base:'path.js'}))
console.log(path.isAbsolute("G:/"))
console.log(path.join('home','login','zyz'))
console.log(path.resolve('home///login/zyz/./sam'))

// const  data = 'foo/bar/baz'.split(path.sep)
// console.log(data);