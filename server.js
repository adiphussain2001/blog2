var express = require('express')
var morgan = require ('morgan')
var bodyparser = require ('body-parser')
var routes = require ('./routes')

let store = {
  posts: [
     {name: 'Top 10 ES6 Features every Web Developer must know',
     url: 'https://webapplog.com/es6',
     text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6,
     it’s a new JavaScript implementation.',
     comments: [
     {text: 'Cruel.....var { house, mouse} = No type optimization at all',}
     {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',     text: '(p1,p2)=>{ ... } ,i understand this ,thank you !'},
    ]
    }
  ]
}
       let hej = express()

       hej.use(bodyparser.json())
       hej.use(morgan('dev'))
       hej.use((req, res, next) => {
       hej.store = store
       next()
})


hej.get('/posts', (req, res) =>
 {routes.posts.getPosts(req, res)})
hej.post('/posts', (req, res) =>
 {routes.posts.addPosts(req, res)})
hej.put('/posts', (req, res) =>
 {routes.posts.updatePosts (req, res)})
hej.delete('/posts', (req, res) =>
 {routes.posts.deletePosts(req, res)})



hej.get('/posts/:postId/comments', (req,res) =>
 {routes.comments.getComments (req, res)})
hej.post('.posts/:postId/comments', (req, res) =>
  {routes.comments.addComments (req, res)})
hej.put('.posts/:postId/comments', (req, res) =>
   {routes.comments.updateComments (req, res)})
hej.delete('.posts/:postId/comments', (req, res) =>
   {routes.comments.deleteComments (req, res)})

app.listen(3000)
console.log("Nu är servern startad")
