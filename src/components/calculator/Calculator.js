import "./Calculator.css"
import Button from "../button/Button";

const Calculator = () => {
    return (
        <div className="wrapper">
            <div className="screen">
                <p>0123456789</p>
            </div>
            <div className="buttonBox">
                <Button color="lighter">AC</Button>
                <Button color="lighter">+/-</Button>
                <Button color="lighter">%</Button>
                <Button color="orange">÷</Button>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button color="orange">x</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button color="orange">-</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button color="orange">+</Button>
                <Button span="2">0</Button>
                <Button>,</Button>
                <Button color="orange">=</Button>
            </div>
        </div>
    );
}

export default Calculator