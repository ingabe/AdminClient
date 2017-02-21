export function getGroups () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateGroups())
    }, 100)
  })
}

function generateGroups () {
  var groups = []

  groups.push({id: 1, name: 'group 1', description: 'This is group 1'})
  groups.push({id: 2, name: 'group 2', description: 'This is group 2'})
  groups.push({id: 3, name: 'group 3', description: 'This is group 3'})
  groups.push({id: 12, name: 'group 12', description: 'This is group 12'})

  return groups
}

export default {
  getGroups
}
