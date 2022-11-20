const config = {
   user : 'daroms',
   mdp  : 'rP2rBA9RN8-jPmB'
}

const method = {
   get : "GET",
   post : "POST",
   put : "PUT",
   delete : "DELETE"
}

const path = {
   index : '/',
   portfolio : {
       index : '/admin/portfolio',
       add   : '/admin/portfolio/add',
       edit  : '/admin/portfolio/edit/',
       delete: '/admin/portfolio/delete/'
   }
}
exports.path     = path
exports.constant = { ...config  }
exports.method   = method