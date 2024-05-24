import Draggable from "react-draggable";
import { Textarea } from "./ui/textarea";

function FloatingText({ text, handleDataChange }) {
    return (
        <>
            <Draggable>
                <Textarea
                    className="bg-transparent backdrop-blur-lg"
                    style={{
                        position: 'absolute',
                        left: `${text.x}%`,
                        top: `${text.y}%`,
                        zIndex: "10",
                        height: `${text.h}ch`,
                        width: `${text.w}ch`,
                        color: `${text.fill}`,
                        stroke: `${text.stroke}`,
                        fontSize: `${text.fontSize}px`,
                        fontWeight: `${text.fontWeight}`,
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: `${text.stroke}`,
                        padding: "2rem",
                        fontStyle: `${text.fontStyle}`,
                        textDecoration: `${text.textDecoration}`,
                    }}
                    value={text.userText}
                    onChange={e => handleDataChange('userText', e.target.value)}
                />
            </Draggable>
        </>
    )
}
export default FloatingText