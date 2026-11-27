import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
    return(
        <Link href="/ProductBuy">
        <div className="max-w-[457.63px] hover:border-3 rounded-2xl border-[#0000C5]">
            <Image src="/product.svg" alt="product" width={457.63} height={572.04} className="rounded-2xl"/>
            <div className="flex flex-col lg:flex-row justify-between">
                <p>Лонгслив Heavy Green</p>
                <div className="flex flex-row  justify-between gap-4">
                    <p>5990 р</p>
                    <p className="line-through opacity-60">10 000 р</p>
                </div>
            </div>
        </div>
        </Link>
    );
}