import React, { useState } from 'react';
import './index.css';

function App() {

    const [weight, setWeight] =useState(0);
    const [height, setHeight] =useState(0);
    const [bmi, setBmi] =useState('');
    const [massege, setMassege] =useState('');

    const hendlerBmi = (e) => {
        if(weight === 0 || height === 0){
            alert('Пожалуйста, укажите Ваш вес и рост')
        } else {
            e.preventDefault();
            const res = weight / ((height / 100) * (height / 100));
            setBmi(res.toFixed(1));
        }

        if(bmi <= 16){
            setMassege('Выраженный дефицит массы тела');
        } else if (bmi <= 18.5) {
            setMassege('Недостаточная масса тела');
        } else if (bmi <= 25) {
            setMassege('Норма');
        }else if (bmi <= 30) {
            setMassege('Избыточная масса тела');
        }else if (bmi <= 35) {
            setMassege('Ожирение 1-й степени');
        }else if (bmi <= 40) {
            setMassege('Ожирение 2-й степени');
        }else if (bmi > 40) {
            setMassege('Ожирение 3-й степени');
        }
    }

    let imgSrc = require('../src/img/healthy.png');

    // if (bmi < 1) {
    //     imgSrc = null;
    //   } else {
    if(bmi < 25) {
        imgSrc = require('../src/img/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
        imgSrc = require('../src/img/healthy.png')
    } else {
        imgSrc = require('../src/img/overweight.png')
    }
    

    let resset = () => {
        window.location.reload()
    }

    return (
        <div className="app">
            <div className='container'>
                <h2 className='center'>Калькулятор ИМТ</h2>
                <form onSubmit={hendlerBmi}>
                    <div>
                        <label>Ваш вес (в кг)</label>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    </div>
                    <div>
                        <label>Ваш рост (в см)</label>
                        <input value={height} onChange={(e) => setHeight(e.target.value)}/>
                    </div>
                    <div>
                        <button className='btn' type='submit'>Расчитать</button>
                        <button className='btn btn-outline' type='submit' onClick={resset}>Сбросить</button>
                    </div>
                </form>

                <div className="center">
                    <h3>Ваш ИМТ: {bmi}</h3>
                    <p>{massege}</p>
                </div>

                <div className='img-container'>
                    <img src={imgSrc} alt="img"/>
                </div>
            </div>
        </div>
    );
}

export default App;
