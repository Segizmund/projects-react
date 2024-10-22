import React, {useState} from 'react';

 const Block = ({defaultCurrencies, value, currency, onChangeValue, onChangeCurrency, valutes, isOpen, setIsOpen}) => {
     const currencyList = Object.entries(valutes).reduce((acc, [currency], index) => {
         const column = index % 13;
         acc[column] = acc[column] || [];
         acc[column].push(
             <li className={'item-valute'}
                 key={currency}
                 onClick={() => {
                     onChangeCurrency(currency);
                     onChangedefaultCurrencies(currency);
                     setIsOpen(false);
                 }
             }
             >
                 {currency}
             </li>
         );
         return acc;
     }, []);
     const onChangedefaultCurrencies = (currency) => {
         defaultCurrencies[defaultCurrencies.length - 1] = currency;
     }
     return (
         <div className="block">
             <ul className="currencies">
                 {defaultCurrencies.map((cur) => (
                     <li
                         onClick={() => onChangeCurrency(cur)}
                         className={currency === cur ? 'active' : ''}
                         key={cur}>
                         {cur}
                     </li>
                 ))}
                 <li className={`btn-more-valute ${isOpen ? 'active' : ''}`} onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                     <svg height="50px" viewBox="0 0 50 50" width="50px">
                         <rect fill="none" height="50" width="50"/>
                         <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/>
                     </svg>
                 </li>
             </ul>
             <div className={`dropdown-valute ${isOpen ? 'show' : ''}`}>
                 <ul className="currency-list">
                     {currencyList.map((column, columnIndex) => (
                         <div key={columnIndex} className="column">
                             <ul>
                                 {column}
                             </ul>
                         </div>
                     ))}
                 </ul>
             </div>
             <input
                 onChange={(e) => onChangeValue(e.target.value)}
                 value={value}
                 type="number"
                 placeholder={0}
             />
         </div>
     );
 }
 export default Block;