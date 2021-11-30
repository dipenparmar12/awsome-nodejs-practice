console.clear()
console.info('%c src/utils/temp.js', 'color: green; font-weight: bold;')

const arr = [
  {
    id: '12',
    parentId: '0',
    text: 'Man',
    level: '1',
    children: null,
  },
  {
    id: '6',
    parentId: '12',
    text: 'Boy',
    level: '2',
    children: null,
  },
  {
    id: '7',
    parentId: '12',
    text: 'Other',
    level: '2',
    children: null,
  },
  {
    id: '9',
    parentId: '7',
    text: 'Woman',
    level: '1',
    children: null,
  },
  {
    id: '11',
    parentId: '9',
    text: 'Girl',
    level: '2',
    children: null,
  },
]

const listToTree = (arr = []) => {
  let map = {},
    node,
    res = [],
    i
  for (i = 0; i < arr.length; i += 1) {
    map[arr[i].id] = i
    arr[i].children = []
  }
  for (i = 0; i < arr.length; i += 1) {
    node = arr[i]
    if (node.parentId !== '0') {
      arr[map[node.parentId]].children.push(node)
    } else {
      res.push(node)
    }
  }
  return res
}

function treeToList(list) {
  const result = []
  list.forEach(item => {
    result.push(item)
    if (item.children && item.children.length > 0) {
      result.push(...treeToList(item.children))
    }
  })
  result?.forEach((element) => {
    delete element.children
  })
  return result
}

console.log(JSON.stringify(listToTree(arr), undefined, 2))
console.log(JSON.stringify(treeToList(listToTree(arr)),null, 2))

console.warn('Done')
