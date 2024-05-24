import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export default function FONTCONFIG({ text, handleDataChange }) {
    return (
        <div
            className="flex items-center justify-between flex-col gap-4 p-4 text-black bg-white 
            ">
            <div className="flex items-center justify-between flex-row gap-4">
                <div className="flex items-center justify-between flex-row gap-4">
                    <Label htmlFor=" fontSize" className="text-right">
                        FontSize
                    </Label>
                    <Input id=" fontSize"
                        value={text.fontSize}
                        type="number"
                        min={0}
                        max={70}
                        onChange={e => handleDataChange('fontSize', e.target.value)}
                    />
                </div>
                <Button className='font-bold' onClick={e => handleDataChange('fontWeight', "bold")} >B</Button>
                <Button className='italic' onClick={e => handleDataChange('fontStyle', "italic")}>I</Button>
                <Button className='underline' onClick={e => handleDataChange('textDecoration', "underline")} >U</Button>
            </div>

            <div className="flex w-full items-center justify-between flex-row gap-4">
                <Label htmlFor=" Color" className="text-right">
                    Colour
                </Label>
                <Input id=" Color"
                    value={text.fill}
                    type="color"
                    onChange={e => handleDataChange('fill', e.target.value)}
                />
            </div>
            <div className="flex w-full items-center justify-between flex-row gap-4">
                <Label htmlFor=" Stroke" className="text-right">
                    Stroke
                </Label>
                <Input id=" Stroke"
                    defaultValue={text.stroke}
                    type="color"
                    onChange={e => handleDataChange('stroke', e.target.value)}
                />
            </div>
            <Separator />

        </div>
    )
}
