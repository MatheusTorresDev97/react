import React, {useState} from 'react'

const Radio = () => {
    const [radio, setRadio] = useState('');

    const handleChange = ({target}) => {
        setRadio(target.value)
        console.log(target.value);
    }

  return (
   <form>
    <label>
        <input 
        type="radio" 
        value="notebook"
        checked={radio === 'notebook'}
        onChange={handleChange}
        />
        Notebook
    </label>
    <label>
        <input 
        type="radio"
        value="smartphone"
        checked={radio === 'smartphone'}
        onChange={handleChange}
         />
         Smartphone
    </label>
    <label>
        <input 
        type="radio"
        value="tablet"
        checked={radio === 'tablet'}
        onChange={handleChange}
         />
         Tablet
    </label>
   </form>
  )
}

export default Radio