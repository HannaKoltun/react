import './button.css';


interface IButton {
    text: string | number,
    isDisabled: boolean,
    clickFunction: () => void
}

export default function Button({ text, isDisabled, clickFunction }: IButton) {
    return (
        <>
            <button 
            onClick={clickFunction} 
            disabled={isDisabled} className='button'>{text}</button>
        </>
    );
}

