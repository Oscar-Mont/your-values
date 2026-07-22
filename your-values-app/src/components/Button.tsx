import type { ReactNode } from "react"
type ButtonProps = {
    children: ReactNode
    variant: string
    onClick?: () => void
    type?: "button" | "submit"
}
//add variant prop: start, primery, secondary
export default function Button({ children, variant, onClick, type }: ButtonProps) {
    return (
        <button className={applyVariant(variant)}
            onClick={onClick}
            type={type ?? "button"}>
            {children}
        </button>
    )
}

//Define Button Variants
function applyVariant(variant: string) {
    if (variant === "start") {
        return "bg-cyan-500 rounded-lg py-4 px-8 text-2xl text-violet-50 font-semibold"
    }
    if (variant === "primary") {
        return "bg-cyan-500 rounded-lg py-2 px-4 text-2xl text-violet-50 font-semibold"
    }
    if (variant === "secondary") {
        return "bg-violet-400 rounded-lg py-4 px-4 text-2xl text-violet-50 font-semibold"
    }
    if (variant === "selected") {
        return "bg-green-500 rounded-lg py-2 px-4 text-2xl text-violet-50 font-semibold"
    }
}