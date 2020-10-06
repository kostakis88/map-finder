import React, {useRef} from 'react'

const SearchBar: React.FC = (): JSX.Element => {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(inputRef.current!.value)
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