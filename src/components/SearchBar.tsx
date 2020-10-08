import React, {useRef} from 'react'

interface SearchBarProps {
  onAddedAddress: (address: string) => void
}

const SearchBar: React.FC<SearchBarProps> = (props): JSX.Element => {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredAddress = inputRef.current!.value
    props.onAddedAddress(enteredAddress)
  } 

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="address-input">Type an Adrress here: </label>
      <input type="text" id="address-input" ref={inputRef}/>
      <button type="submit">SEARCH ADDRESS</button>
    </form>
  )

}

export default SearchBar