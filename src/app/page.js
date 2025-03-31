import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="https://cdn.shopify.com/s/files/1/0570/2415/1758/files/Navohm_-8.png?v=1740496557"
        alt="Navohm Logo"
        width={150}
        height={150}
        className="mb-4 mx-auto"
      />
      <h1 className="text-2xl text-center">
We will be live soon.
      </h1>
      </>
  );
}
