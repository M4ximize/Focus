import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 0.2,
        short: 0.1,
        long: 0.5,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <div>
                        <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                        <p>Pequena Pausa</p>
                    </div>
                    <div>
                        <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} />
                        <p>Foco</p>
                    </div>

                    <div>
                        <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
                        <p>Grande Pausa</p>
                    </div>
                </div>
                <button type='submit'>Definir Tempo</button>
            </form>
        </div>
    )
}

export default SetPomodoro
