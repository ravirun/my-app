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
      <div className="">
        <video autoPlay loop muted controls={true} className="">
          <source
            src="https://cdn.shopify.com/videos/c/o/v/519ea2eb9b9645fb9ff1d4adcb71bdd6.mov"
            type="video/mp4"
          />
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-2xl  mb-4">
            {" "}
            Navohm is an Indian brand dedicated to spiritual & religious
            well-being, offering sacred products designed to balance cosmic
            alignment and elevate life’s harmony.
          </h1>
          <p className="text-lg mb-6 max-w-2xl"></p>
        </div>
      </div>
    </>
  );
}
