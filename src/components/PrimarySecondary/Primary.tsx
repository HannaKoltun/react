import './Primary.css';
import { useState } from "react";

interface IPrimary {
    children: string
    styleButton: string
}

export default function Primary({ children, styleButton }: IPrimary) {

    const [isDisabledText, setisDisabledText] = useState(false);

    return (
        <>
            <button
                onDoubleClick={() => {
                    setisDisabledText(true)
                }}
                className={styleButton}
                style={{
                    backgroundColor: isDisabledText ? '#E8E8E8' : styleButton,
                    color: isDisabledText ? '#8D8E97' : styleButton,
                }}
            >{children}</button >
        </>
    )
}


