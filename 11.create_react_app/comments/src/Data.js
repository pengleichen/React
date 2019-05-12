class Comment {
  constructor({id, author, content}) {
    this.id = id
    this.author = author
    this.content = content
  }
}

const INIT_COMMENTS = [
  new Comment({id: 1, author: 'Jack', content: 'React is very good!'}),
  new Comment({id: 2, author: 'Jerry', content: 'React is so complex...'})
]
export default {
  Comments: {
    get: () => localStorage.getItem('comments') || INIT_COMMENTS
  }
}
