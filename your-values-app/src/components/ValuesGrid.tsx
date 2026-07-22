import type { Value } from "../data/values.ts"
import Button from "./Button.tsx"

type ValuesGridProps = {
    values: Value[],
    onValueToggle: (value: Value) => void
    selectedValues: Value[]
}

export default function ValuesGrid({ values, onValueToggle, selectedValues }: ValuesGridProps) {

    return (
        <div className="grid grid-cols-2 grid-rows-5 gap-5 p-4">{
            values.map((value) => {
                const isSelected = selectedValues.some(obj => obj.id === value.id);
                return < Button
                    variant={isSelected ? "primary" : "secondary"}
                    key={value.id}
                    onClick={() => onValueToggle(value)}
                    type="button">
                    {value.name}
                </Button>
            })
        }</div >
    )
}