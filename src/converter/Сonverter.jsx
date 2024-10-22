import React, {useEffect, useRef, useState} from 'react';
import Block  from './Block';
import './Converter-style.css';

function Converter() {
    const [fromCurrency, setFromCurrency] = useState('RUB')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(1)
    const valutes = useRef({})

    const [isOpenFrom, setIsOpenFrom] = useState(false);
    const [isOpenTo, setIsOpenTo] = useState(false);

    const [defaultFromCurrencies,setDefaultFromCurrencies] =useState(['RUB', 'USD', 'EUR', 'GBP'])
    const [defaultToCurrencies,setDefaultToCurrencies] =useState(['RUB', 'USD', 'EUR', 'GBP'])

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
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrency]);

    const handleBlockClick = (index) => {
        if (index === 1 && isOpenTo) {
            setIsOpenTo(false);
        } else if (index === 2 && isOpenFrom) {
            setIsOpenFrom(false);
        }

        if (index === 1) {
            setIsOpenFrom(prevIsOpen => !prevIsOpen);
        } else if (index === 2) {
            setIsOpenTo(prevIsOpen => !prevIsOpen);
        }
    };

    return (
        <div className="Converter">
            <Block
                defaultCurrencies={defaultFromCurrencies}
                value={fromPrice}
                currency={fromCurrency}
                onChangeCurrency={setFromCurrency}
                onChangeValue={onChangeFromPrice}
                valutes={valutes.current}
                isOpen={isOpenFrom}
                setIsOpen={() => handleBlockClick(1)}
            />
            <Block
                defaultCurrencies={defaultToCurrencies}
                value={toPrice}
                currency={toCurrency}
                onChangeCurrency={setToCurrency}
                onChangeValue={onChangeToPrice}
                valutes={valutes.current}
                isOpen={isOpenTo}
                setIsOpen={() => handleBlockClick(2)}
            />
        </div>
    );
}

export default Converter;