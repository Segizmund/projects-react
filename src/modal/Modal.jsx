import React, {useState} from 'react';
import '../modal/modal-style.css';

const Modal = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const Modal =({isOpen, setIsOpen}) => (
        <div className={'modal bg-[#EEEEEE] max-w-[40%] mx-auto px-[40px] py-[30px] rounded-[15px]'}>
            <div className={'flex justify-end'}>
                <svg onClick={() => setIsOpen(false)} width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg" className={'cursor-pointer'}>
                    <path d="M7.75732 7.75745L16.2426 16.2427" stroke="black" stroke-width="null"
                          stroke-linecap="round" className="my-path"></path>
                    <path d="M16.2426 7.75745L7.75732 16.2427" stroke="black" stroke-width="null"
                          stroke-linecap="round" className="my-path"></path>
                </svg>
            </div>
            <h1 className={'font-bold mb-3'}>Это модальное окно</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae consequuntur eos,
                eum ex fugit ipsam itaque laboriosam laudantium molestias quisquam quod ratione
                recusandae rem sit sunt suscipit ut voluptate?
            </p>
        </div>
    );
    return (
        <>
            <div className={'text-center my-5'}>
                <button onClick={() => setIsOpen(true)}
                        className={'plus bg-[#347928] hover:bg-[#225719] transition duration-[300ms] text-[#FFFFFF] rounded-full px-3 py-2'}>Открыть
                    окно
                </button>
                <div className={`overlay animated ${isOpen ? 'show' : ''}`}>
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </div>
        </>
    )
}

export default Modal;