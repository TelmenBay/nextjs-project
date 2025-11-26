import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './products/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>hi mom</h1>
      <Link href='/users'>users list</Link>
      <ProductCard/>
      <Link href='/todo'>todo list</Link>
    </main>
  )
}
