import React, {useState} from 'react';

const Counter = () =>{
    const [counter,setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1);
    }
    return(
        <>
            <div className={'text-center my-5'}>
                <h2 className={'font-bold text-[20px]'}>Счетчик:</h2>
                <h1 className={'font-bold text-[72px]'}>{counter}</h1>
                <div className={'flex gap-5 justify-center'}>
                    <button onClick={decrement} className={'minus bg-[#C40C0C] hover:bg-[#A90909] transition duration-[300ms] text-[#FFFFFF] rounded-full px-3 py-2'}>- Минус</button>
                    <button onClick={increment} className={'plus bg-[#347928] hover:bg-[#225719] transition duration-[300ms] text-[#FFFFFF] rounded-full px-3 py-2'}>Плюс +</button>
                </div>
            </div>
        </>
    )
}

export default Counter;