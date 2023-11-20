import React, { useMemo } from 'react'

//useMemo
//Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.

//Serve para casos em que você faz uma operação lenta para retornar um valor.

    function operacaoLenta(){
        let c;
        for(let i = 0; i < 100000000; i++){
            c = i + i /10;
        }
        return c;
    }


const UseMemo = () => {
    // const [contar, setContar] = useState(0)
    // const valor = useMemo(() => {
    //     const localStorageItem = window.localStorage.getItem('produto')
    //     //só será executado uma vez
    //     console.log('teste');
    //     return localStorageItem;
    // },[])
    const t1 = performance.now()
    const valor = useMemo(() => operacaoLenta(), []) 
    console.log(performance.now() - t1);
    return (
        <button onClick={() => setContar(contar + 1)}>{valor}</button>
    )
}

export default UseMemo