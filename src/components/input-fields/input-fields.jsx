import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { SET_ANALYSIS_PARAMETERS } from '../../services/actions/calculations-file'
import MainAnalysis from '../main-analysis/main-analysis'
import "./input-fields.scss"
import { Link } from 'react-router-dom'

const InputFields = () => {
    const dispatch = useDispatch()
    const [analysisStarted, setAnalysisStarted] = useState(false)
    const [inputs, setInputs] = useState({
        left_segment: "",
        right_segment_exp: "",
        right_segment_res: "",
        step: "",
        probability: ""
    }) 

    const startAnalysis = () => {
        dispatch({
            type: SET_ANALYSIS_PARAMETERS,
            inputs
        })
        setAnalysisStarted(true)
    }

    return(
        <div className='input-fields-container'>
            <p className='title'>Введите параметры, необходимые для анализа.</p>
            <p>
                <span>Левое значение сегмента: </span>
                <input 
                    type="text"
                    placeholder="0"
                    value={inputs.left_segment}
                    onChange={(e) => setInputs({...inputs, left_segment: e.target.value})}
                />
            </p>
            <p>
                <span>Правое значение сегмента в эспериментальном исследовании: </span>
                <input 
                    type="text"
                    placeholder="0"
                    value={inputs.right_segment_exp}
                    onChange={(e) => setInputs({...inputs, right_segment_exp: e.target.value})}
                />
            </p>
            <p>
                <span>Правое значение сегмента для результатов исследования: </span>
                <input 
                    type="text"
                    placeholder="0"
                    value={inputs.right_segment_res}
                    onChange={(e) => setInputs({...inputs, right_segment_res: e.target.value})}
                />
            </p>
            <p>
                <span>Шаг: </span>
                <input 
                    type="text"
                    placeholder="0"
                    value={inputs.step}
                    onChange={(e) => setInputs({...inputs, step: e.target.value})}
                />
            </p>
            <p>
                <span>Значение доверительной вероятности: </span>
                <input 
                    type="text"
                    placeholder="0"
                    value={inputs.probability}
                    onChange={(e) => setInputs({...inputs, probability: e.target.value})}
                />
            </p>
            <Link to="/main-analysis">
            <button onClick={startAnalysis}>Провести анализ</button>
            </Link>
            {/* {
                analysisStarted ?
                <MainAnalysis /> :
                null
            } */}
        </div>
    )
}

export default InputFields