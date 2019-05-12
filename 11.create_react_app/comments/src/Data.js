import Comment from './Comment'

const INIT_COMMENTS = [
  new Comment({id: 1, author: 'Jack', content: 'React is very good!'}),
  new Comment({id: 2, author: 'Jerry', content: 'React is so complex...'})
]
export default {
  Comments: {
    get: () => JSON.parse(localStorage.getItem('comments')) || INIT_COMMENTS,
    set: (comments) => localStorage.setItem('comments', JSON.stringify(comments))
  }
}
