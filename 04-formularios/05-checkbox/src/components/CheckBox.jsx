import React, {useState} from 'react'

const CheckBox = () => {
    const [checkbox, setCheckbox] = useState(false);

    const handleChange = ({target}) => {
        setCheckbox(target.checked)
    }


  return (
    <form>
        <label>
            <input type="checkbox"
            value="termos"
            checked={checkbox}
            onChange={handleChange}
             />
             Li os termos.
        </label>
    </form>
  )
}

export default CheckBox