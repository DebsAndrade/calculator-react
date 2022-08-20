import "./Calculator.css"

const Calculator = () => {
    return (
        <div className="wrapper">
            <div className="screen">
                <p>000000000</p>
            </div>
            <div className="buttonBox">
                <button className="buttonColorBlue">AC</button>
                <button className="buttonColorBlue">+/-</button>
                <button className="buttonColorBlue">%</button>
                <button className="buttonColorOrange">÷</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="buttonColorOrange">x</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className="buttonColorOrange">-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="buttonColorOrange">+</button>
                <button className="buttonZero">0</button>
                <button>,</button>
                <button className="buttonColorOrange">=</button>
            </div>
        </div>
    );
}

export default Calculator