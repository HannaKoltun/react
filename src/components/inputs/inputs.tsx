import { useState } from "react";
import 'D:/Docs/TMS/react/reactt/my-react/src/components/inputs/inputs.css'
import { isDisabled } from "@testing-library/user-event/dist/utils";

interface IInput {
    typeInput: string,
    isDisabled: boolean,
    type: string,
    legend: string,
    id: string

}
export default function Inputs({ typeInput, isDisabled, type, legend, id }: IInput) {

    const [dataName, setDataNAme] = useState("");
    function inputTextChange(event: any): void {
        setDataNAme(event.target.value)
        setError(event.target.value.length > 10)
        setErrorText(event.target.value.length > 10)
    }
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState(false);


return (
    <div className="mainBlock">
        <form>
            <fieldset>
                <legend >{legend}</legend>
                <input
                    disabled={isDisabled}
                    id={id}
                    type={type}
                    className={typeInput}
                    value={dataName}
                    onChange={inputTextChange}
                    placeholder="Placeholder"
                    style={{ border: error ? "2px solid #FD3419" : typeInput }}
                ></input>
            </fieldset>
            <div className="ErrorText"  style={{display: errorText ? "flex" : typeInput }}>Error text</div>
        </form>
    </div>

)
}






