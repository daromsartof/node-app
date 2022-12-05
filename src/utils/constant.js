const method = {
   get: "GET",
   post: "POST",
   put: "PUT",
   delete: "DELETE"
}

const path = {
   index: '/',
   admin: '/admin',
   portfolio: {
      index: '/admin/portfolio',
      add: '/admin/portfolio/add',
      edit: '/admin/portfolio/edit/',
      delete: '/admin/portfolio/delete/'
   },
   skils: {
      index: '/admin/skils',
      add: '/admin/skils/add',
      edit: '/admin/skils/edit/',
      delete: '/admin/skils/delete/'
   },
   skilsCat: {
      index: '/admin/skils-cat',
      add: '/admin/skils-cat/add',
      edit: '/admin/skils-cat/edit/',
      delete: '/admin/skils-cat/delete/'
   },
   profils:"/civils"
}
exports.path = path
exports.method = method