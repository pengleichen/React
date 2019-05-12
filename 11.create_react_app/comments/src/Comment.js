export default
class Comment {
  constructor({id, author, content}) {
    this.id = id
    this.author = author
    this.content = content
  }
  toString = () => {
    return JSON.stringify(this)
  }
}