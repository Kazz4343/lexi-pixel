import React, {useState} from 'react'
import ProgressBar from '../ProgressBar'
import {isEncountered, shuffle} from "../../utils/index.js";
import DEFINITIONS from '../../utils/VOCAB.json'

const Challenge = (props) => {

    const {day, daysWords, handleChangePage, handleIncrementAttempts, handleCompleteDay, PLAN } = props

    const [wordIndex, setWordIndex] = useState(0)
    const [inputVal, setInputVal] = useState('')
    const [showDefinition, setShowDefinition] = useState(false)
    const [listToLearn, setListToLearn] = useState([
        ...daysWords,
        ...shuffle(daysWords),
        ...shuffle(daysWords),
        ...shuffle(daysWords),
    ])

    const word = listToLearn[wordIndex]
    const isNewWord = showDefinition || (!isEncountered(day,word) && wordIndex < daysWords.length)
    const definition = DEFINITIONS[word]

    function giveUp(){
        setListToLearn([...listToLearn, word])
        setShowDefinition(true)
    }

    return (
        <section id='challenge'>
            <h1>{word}</h1>
            {isNewWord && (<p>{definition}</p>)}
            <div className='helper'>
                <div>
                    {[...Array(definition.length).keys()].map((element, elementIndex)=>{
// I am not sure whether it should be elementIndex or element right about HERE
                        const styleToApply = inputVal.length < elementIndex + 1 ?
                            '' : inputVal.split('')[elementIndex].toLowerCase() == definition.split('')[elementIndex].toLowerCase() ? 'correct' : 'incorrect'


                        return(
                            <div className={'' + styleToApply} key={elementIndex}>  </div>
                        )
                    })}
                </div>
                <input value={inputVal} onChange={(e)=>{

                    if (e.target.value.length == definition.length && e.target.value.length > inputVal.length) {

                        handleIncrementAttempts()

                        if (e.target.value.toLowerCase() == definition.toLowerCase()) {
                            if (wordIndex >= listToLearn.length - 1) {
                                handleCompleteDay()
                                return
                            }
                            setWordIndex(wordIndex + 1)
                            setShowDefinition(false)
                            setInputVal('')
                            return

                        }

                    }
                    setInputVal(e.target.value)
                }} type='text' placeholder='Enter the definition...' />
            </div>

            <div className='challenge-btns'>
                <button onClick={()=>{
                    handleChangePage(1)
                }} className='card-button-secondary'>
                    <h6>Quit</h6>
                </button>
                <button onClick={giveUp} className='card-button-primary'>
                    <h6>I forget</h6>
                </button>
            </div>
            <ProgressBar remainder={wordIndex * 100 / listToLearn.length} text={`${wordIndex} / ${listToLearn.length}`} />
        </section>
    )
}

export default Challenge
