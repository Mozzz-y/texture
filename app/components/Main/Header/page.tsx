"use client";

import { useState } from "react";
import Image from "next/image";
export default function Header() {
const [cartOpen, setCartOpen] = useState(false);
return (
    <div className="container mx-auto flex flex-row justify-between mb-12">
        <Image src="/icons/menu.svg" alt="menu" width={24} height={24}/>
        <h1 className="text-xl">ТЕКСТУРА</h1>
        <button onClick={() => setCartOpen(true)}>
            <Image src="/icons/shopping-bag.svg" alt="menu" width={24} height={24}/>
        </button>
        {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div className="relative z-10 h-full w-full max-w-[420px] bg-[#f7f7f2] p-6">
            <div className="flex justify-between items-center">
            <h2>Корзина</h2>
            <button onClick={() => setCartOpen(false)}>✕</button>
        </div>
        <div className="flex h-[80%] items-center justify-center">
        <p>Корзина пуста</p>
        </div>
    </div>
</div>
)}
    </div>

);
}

