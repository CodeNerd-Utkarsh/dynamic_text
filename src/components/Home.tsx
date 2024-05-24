import Video from "@/assets/Video.mp4"
import TextConfig from './TextConfig';
import { useState } from 'react';
import FloatingText from './FloatingText';

type typeText = {
    x?: number;
    y?: number;
    h?: number;
    w?: number;
    userText: string;
    fontSize?: number;
    fontWeight?: string;
    fill?: string;
    stroke?: string;
    fontStyle?: string;
    textDecoration?: string;
}
const Home = () => {
    const [text, setText] = useState<typeText>({});
    const [showTextBox, setShowTextBox] = useState(false);

    const handleShowText = () => {
        setShowTextBox(true);
        setText({
            x: 50, y: 50, h: 4, w: 18, userText: "hello world", fontSize: 22, fontWeight: "normal", fill: "#000000", stroke: "#000000", fontStyle: "",
            textDecoration: "",
        })
    };

    const handleDataChange = (key: keyof typeText, value: string | number) => {
        setText(prevState => ({ ...prevState, [key]: value }));
    };

    return (
        <div className="App">
            <div style={{ display: 'flex', height: '100vh', width: '100%' }}
            >
                <div style={{ flex: .7, position: 'relative', }}>
                    {showTextBox && (
                        <>
                            <FloatingText text={text} handleDataChange={handleDataChange} />
                        </>
                    )}
                    <video width="100%" height="100%" controls>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div style={{ flex: .3 }}>
                    <TextConfig handleShowText={handleShowText} handleDataChange={handleDataChange} text={text} showTextBox={showTextBox} />
                </div>
            </div>
        </div>
    );
};

export default Home;
