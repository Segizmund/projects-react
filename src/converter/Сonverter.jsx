import React, {useEffect, useRef, useState} from 'react';
import { Block } from './Block';
import './Converter-style.css';

function Converter() {
    const [fromCurrency, setFromCurrency] = useState('RUB')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(1)
    const valutes = useRef({})

    useEffect(() =>{
        fetch('https://v6.exchangerate-api.com/v6/9419682b734bdcca0dce1bd5/latest/USD')
            .then((res) => res.json())
            .then((json) => {
                valutes.current = json.conversion_rates;
            onChangeToPrice(1)
        }).catch(err =>{
            console.warn(err);
            alert('Не получить информацию');
        });
    },[]);
    console.log(valutes.current);
    const onChangeFromPrice = (value) => {
        const price = value / valutes.current[fromCurrency];
        const result = price * valutes.current[toCurrency];
        setToPrice(result.toFixed(3));
        setFromPrice(value);
    }

    const onChangeToPrice = (value) => {
        const result = (valutes.current[fromCurrency] / valutes.current[toCurrency]) * value;
        setFromPrice(result.toFixed(3));
        setToPrice(value)
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency,]);

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrency]);

    return (
        <div className="Converter">
            <Block
                value={fromPrice}
                currency={fromCurrency}
                onChangeCurrency={setFromCurrency}
                onChangeValue={onChangeFromPrice}
            />
            <Block
                value={toPrice}
                currency={toCurrency}
                onChangeCurrency={setToCurrency}
                onChangeValue={onChangeToPrice}
            />
        </div>
    );
}

export default Converter;