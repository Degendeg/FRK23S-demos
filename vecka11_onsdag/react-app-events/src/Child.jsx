const Child = ({ clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler}>click me (from Child.jsx)</button>
    </div>
  )
}
export default Child