import { useState } from "react";
import 'D:/Docs/TMS/react/reactt/my-react/src/components/Inputs/Inputs.css'
import { IInput } from "../../types/interface";
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';


export default function Inputs({ typeInput, isDisabled, type, legend, id, placeholder }: IInput) {
    const [color] = useContext(myContext)

    const [dataName, setDataNAme] = useState("");
    function inputTextChange(event: any): void {
        setDataNAme(event.target.value)
        setError(event.target.value.length > 10)
        setErrorText(event.target.value.length > 10)
    }
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState(false);


return (
    <div className={`mainBlock${color}`}>
        <form>
            <fieldset className="fieldset">
                <legend className={`legend${color}`}>{legend}</legend>
                <input
                    disabled={isDisabled}
                    id={id}
                    type={type}
                    className={typeInput}
                    value={dataName}
                    onChange={inputTextChange}
                    placeholder={placeholder}
                    style={{ border: error ? "2px solid #FD3419" : typeInput }}
                ></input>
            </fieldset>
            <div className="errorText"  style={{display: errorText ? "flex" : typeInput }}>Error text</div>
        </form>
    </div>

)
}






