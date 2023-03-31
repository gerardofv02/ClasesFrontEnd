import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/planets/index.tsx">Planetitas</Link>
      <Link href="/rick/index.tsx">Rickisitos</Link>
    </>
  );
}
