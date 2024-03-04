// props som objekt, hämta message nedanför. 
// kan destructas till ({message}) ifall props är komplex med mångsidig data
const Child1 = (props) => {
  return (
    <div>{props.message}</div>
  )
}
export default Child1