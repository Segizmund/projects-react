import React, {useState} from "react";
import '../quiz/quiz-style.css';

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

function Result({correct,setCorrect,step,setStep}) {
    return (
        <div className="result">
            <img className={'mb-4'} src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} из {questions.length}</h2>
            <button onClick={()=>{setCorrect(correct = 0);
                setStep(step = 0)}}>Попробовать снова</button>
        </div>
    );
}

function Game({question, onClickVariant, step}) {
    const percentage = Math.round(step / questions.length * 100);

    return (
        <div>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1 className={'font-bold pb-5'}>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text,index) => (
                        <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

function Quiz() {
    const [step,setStep] = useState(0);
    const [correct,setCorrect] = useState(0);
    console.log(correct);
    const question  = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);
        if (index == question.correct){
            setCorrect(correct + 1)
        }
    }

    return (
        <div className={'main-game my-5 mx-auto '}>
            {
                step != questions.length ?  ( <Game step={step} question={question} onClickVariant={onClickVariant}/>
                ) : (
                    <Result correct = {correct} setCorrect={setCorrect} step={step} setStep={setStep}/>
                )
            }
        </div>
    );
}

export default Quiz;