/* eslint-disable @typescript-eslint/no-unused-vars */
import FONTCONFIG from './FONTCONFIG';
import POSCONFIG from './POSCONFIG';
import { Button } from './ui/button'
import { Separator } from './ui/separator'

function TextConfig({ handleShowText, handleDataChange, text, showTextBox }) {
    return (
        <>
            <Button
                className='bg-black mx-[43%]'
                onClick={handleShowText}>Add Text</Button>
            <div
                style={{ pointerEvents: showTextBox ? "all" : "none" }}
                className="flex items-center justify-between flex-col gap-4 p-4 text-black  
            ">
                <Separator />
                {/* positioning config */}
                <POSCONFIG
                    text={text} handleDataChange={handleDataChange}
                />
            </div>
            {/* font configuration */}
            <div
                style={{ pointerEvents: showTextBox ? "all" : "none" }}
            >
                <FONTCONFIG text={text} handleDataChange={handleDataChange} />
            </div>

        </>
    )
}

export default TextConfig;