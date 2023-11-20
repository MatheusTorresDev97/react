import React, { useState, useEffect, useRef } from 'react'

const UseRefExemplo4 = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    const [textInput, setTextInput] = useState('')
    const countRef = useRef()

    const timeToCallSomething = useRef(null)

    const fetchSomething = () => {
      fetch(`https://rickandmortyapi.com/api/character/?name=${textInput}`).then(res => res.json())
      .then(data => setData(data.results))
    }

    useEffect(() => {
        countRef.current = count
    }, [count])

    useEffect(() => {
        if (timeToCallSomething.current) {
            clearInterval(timeToCallSomething.current)
        }
        timeToCallSomething.current = setTimeout(fetchSomething, 1000)

        return () => clearInterval(timeToCallSomething.current)
    }, [textInput])

    return (
        <div className='Ap'>
            <h1>Front Begginers</h1>
            <div className="card">
                <p>Contador Original: {count}</p>
                <p>Contador Referência: {countRef.current}</p>
                <form>
                    <input type="text" name='name' value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default UseRefExemplo4