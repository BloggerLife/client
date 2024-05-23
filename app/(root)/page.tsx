import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <Collections />
      <ProductList />
      <span className="fabContainer">
        <a href={`https://wa.me/263783536329`}>
          <Image
            src="/app.png"
            alt="whatsapp"
            width={2000}
            height={1000}
            className="fab"
          />
        </a>
      </span>
    </>
  );
}

export const dynamic = "force-dynamic";
