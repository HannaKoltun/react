import { useState } from "react";
import 'D:/Docs/TMS/react/reactt/my-react/src/components/Textarea/TextArea.css'
import { isDisabled } from "@testing-library/user-event/dist/utils";

interface ITextArea {
    rows: number
    cols: number
}
export default function TextArea({ rows, cols }: ITextArea) {

    return (
        <div className="textareablock">
            <form>
                <div className="title">Text</div>
                <textarea
                    placeholder="Add your text..."
                    id="story"
                    name="story"
                    rows={rows}
                    cols={cols}>
                </textarea>
        </form>
        </div >

    )
}



