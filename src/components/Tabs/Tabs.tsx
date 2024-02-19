import './Tabs.css';
import { useState } from "react";
import { ITabs } from '../../types/interface';

export default function Tabs({ children, styleTab, isDisabled }: ITabs) {

    const [isHoveredText, setIsHoveredText] = useState(false);
    const [isHoveredLine, setisHoveredLine] = useState(false);
    return (
        <>
            <button
                disabled={isDisabled}
                className={styleTab}
                onMouseEnter={() => {
                    setIsHoveredText(true);
                    setisHoveredLine(true);
                }}
                onMouseLeave={() => {
                    setIsHoveredText(false);
                    setisHoveredLine(false);
                }}
                style={{
                    color: isDisabled ? 'gray' : (isHoveredText ? '#2231AA' : 'black'),
                    borderBottom: isHoveredLine ? '2px solid black' : "#DADADA"
                }}
            >{children}</button >
        </>
    )
}



