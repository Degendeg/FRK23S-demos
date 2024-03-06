const Child = ({ setName }) => {
  // Child-komponent som renderar en knapp för att uppdatera namnet när den klickas
  return (
    <button onClick={() => setName('Luigi')}>Click to update name</button>
  )
}
export default Child