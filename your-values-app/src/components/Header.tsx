import { Link } from "react-router";

export default function Header() {
    return (
        <div className="flex gap-3 p-4">
            <Link to="/">
                <div className="flex gap-2">
                    <img src="favicon.svg" alt="temporary logo" />
                    <div className="self-center text-xl">Your Values</div>
                </div>
            </Link>
        </div>
    )
}