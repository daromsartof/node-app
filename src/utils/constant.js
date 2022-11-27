const method = {
   get : "GET",
   post : "POST",
   put : "PUT",
   delete : "DELETE"
}

const path = {
   index : '/',
   admin : '/admin',
   portfolio : {
       index : '/admin/portfolio',
       add   : '/admin/portfolio/add',
       edit  : '/admin/portfolio/edit/',
       delete: '/admin/portfolio/delete/'
   },
   skils : {
      index : '/admin/skils',
      add   : '/admin/skils/add',
      edit  : '/admin/skils/edit/',
      delete: '/admin/skils/delete/'
  },
}
exports.path     = path
exports.method   = method