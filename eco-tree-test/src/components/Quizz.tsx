import React, { useState } from 'react'
import CountdownComponent from './CountdownComponent';
import question from '../questions.json'
interface Question {
    name: string,
    nb: number
}
const Quizz: React.FC = (

) => {
    // Writing some questions to simulate a quizz and give some context
    const questions: Array<Question> = question.questions

    const [counter, setCounter] = useState(0)

    const [isOver, setIsOver] = useState(false)

    // handleOnDone function will replace current question by the next one in our list

    const handleOnDone = () => {

        if (questions[counter + 1]) {
            setCounter(counter + 1)
        }
        else {
            setIsOver(true)
        }
    }

    // we render our question only if it exists, else we render an ending message
    return (
        !isOver ?
            <div className="Quizz container">
                <p>
                    {questions[counter].nb}) &nbsp;
                    {questions[counter].name}
                    {<CountdownComponent nb={questions[counter].nb} onDone={handleOnDone} />}
                </p>

                <button className="btn btn-light" onClick={handleOnDone}>Suivant</button>

            </div>
            : <> <div> Terminé </div> </>
    );
}
export default Quizz