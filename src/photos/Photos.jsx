import React, {useEffect, useState} from 'react';

import Collection from './Collection';
import './photos-style.css';

const cats = [

    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
]

function Photos() {
    const [categoryId, setCategoryId] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [collections, setCollections] =useState([])

    useEffect(() => {
        setIsLoading(true)

        const category = categoryId ? `category=${categoryId}` : ''

        fetch(`https://6718b8ca7fc4c5ff8f4ac52d.mockapi.io/Photos?page=${page}&limit=3&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json)
            })
            .catch(err => {
                console.warn(err)
                alert('Ошибка при получении данных')
            }).finally(() => setIsLoading(false))
    }, [categoryId, page])

    const filteredItems = collections.filter((obj) => {
        const SearchResult = obj.name.toLowerCase()
        return SearchResult.includes(searchValue.toLowerCase());
    });

    return (
        <div className="Photos-app">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {
                        cats.map((obj,i) => (

                            <li onClick={() => setCategoryId(i)} className={categoryId === i ? 'active' : ''} key={obj.name}>
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
            </div>
            <div className="content">
                {isLoading ? (
                    <h2>Идет загрузка ...</h2>
                ) : (
                    <>
                        {filteredItems.length > 0 ? (
                            filteredItems.map((obj,index) => (
                                    <Collection
                                        key={index}
                                        name={obj.name}
                                        images={obj.photos}
                                    />
                                ))
                        ) : (
                            <h2>Совпадений нет.</h2>
                        )}
                    </>
                )
                }
            </div>
            <ul className="pagination">
                {
                    [...Array(5)].map((_, i) => (
                        <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''} key={i}>
                            {i + 1}
                        </li>)
                    )
                }
            </ul>
        </div>
    );
}

export default Photos;