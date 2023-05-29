import Link from "next/link"

export default function Navbar() {
    return(
        <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about/anotherRoute">New About</Link>
            <Link href="/contact">Contact</Link>

        </div>
    )
}