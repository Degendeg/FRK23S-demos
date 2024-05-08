// Destructad props, här säger jag vad jag vill ha från props objektet. Annars kan jag skicka:
// const BlogList = (props) => {
// men då måste jag sedan i JSXen komma åt det jag specifikt vill ha:
// {props.myText} eller {props.blogs[0].title} för att komma åt första förekomsten av titel, alternativt loopa
const BlogList = ({ myText, blogs }) => {
  return (
    <>
      <ul>
        {blogs.map((blog, idx) => (
          <>
            <li>{blog.title}</li>
            <li>{blog.body}</li>
            <li>{blog.author}</li>
            <li>{blog.id}</li>
          </>
        ))}
      </ul>
      {myText}
    </>
  )
}
export default BlogList