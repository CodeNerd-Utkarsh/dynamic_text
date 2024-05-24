import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export default function POSCONFIG({ text, handleDataChange }) {

    return (
        <>
            <div className="flex items-center justify-between flex-row gap-4">
                <div className="flex items-center justify-between flex-row gap-4">
                    <Label htmlFor=" X" className="text-right">
                        X
                    </Label>
                    <Input id=" X"
                        value={text.x}
                        type="number"
                        min={0}
                        max={70}
                        onChange={e => handleDataChange('x', e.target.value)}
                    />
                </div>

                <div className=" flex items-center justify-between flex-row gap-2">
                    <Label htmlFor=" Y" className="text-right">
                        Y
                    </Label>
                    <Input id=" Y"
                        value={text.y}
                        type="number"
                        min={0}
                        max={70}
                        onChange={e => handleDataChange('y', e.target.value)}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between flex-row gap-4">
                <div className="flex items-center justify-between flex-row gap-4">
                    <Label htmlFor=" H" className="text-right">
                        H
                    </Label>
                    <Input id=" H"
                        type="number"
                        min={0}
                        max={70}
                        value={text.h}
                        onChange={e => handleDataChange('h', e.target.value)}
                    />
                </div>
                <div className=" flex items-center justify-between flex-row gap-2">
                    <Label htmlFor=" W" className="text-right">
                        W
                    </Label>
                    <Input id=" W"
                        type="number"
                        min={0}
                        max={70}
                        value={text.w}
                        onChange={e => handleDataChange('w', e.target.value)}
                    />
                </div>
            </div>
            <Separator />

        </>
    )
}