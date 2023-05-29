import Pokemon from "./PokeSearch/page"
import Link from "next/link"

export default function Home() {
  return (
    <main >
    <h1>This is a test project made in NEXT.Js.
    It is a simple pokemon search app.</h1>
    <h2>Click the link below to start</h2>
    <Link href="/PokeSearch">Click To Start</Link>
    </main>
  )
}
