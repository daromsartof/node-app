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
   }
}
exports.path     = path
exports.method   = method