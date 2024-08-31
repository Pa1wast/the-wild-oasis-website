import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to paadise!</h1>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
