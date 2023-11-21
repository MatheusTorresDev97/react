import React, {useState} from 'react'

const Exercicio = () => {
    const [cores, setCores] = useState([])

    const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

    const handleChecked = (cor) => {
        return cores.includes(cor)
    }

    const handleChange = ({target}) => {
        const {checked, value} = target;
        if(checked) {
            setCores([...cores, target.value])
        }else {
            setCores(cores.filter((cor) => cor !==value ))
        }
    }


  return (
    <form>
        {coresArray.map((cor) => (
            <label key={cor} style={{textTransform: 'capitalize'}}>
                <input
                 type="checkbox" 
                value={cor}
                checked={handleChecked(cor)}
                onChange={handleChange}
                />
                {cor}
            </label>
        ))}
        <ul>
            {cores.map((cor) => (
                <li key={cor}>cor</li>
            ))}
        </ul>
    </form>
  )
}

export default Exercicio