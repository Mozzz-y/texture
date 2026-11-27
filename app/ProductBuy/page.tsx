"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductBuy() {
    const [tab, setTab] = useState("Описание");
    const [sizeOpen, setSizeOpen] = useState(false);
    return(
        <div className="containter mx-auto flex flex-col lg:flex-row justify-between gap-26 items-center mb-12">
            <div className="flex flex-col gap-4 hidden lg:block">
                <Image src="/product.svg" alt="product" width={54} height={77.5} className="rounded-lg hover:border-1 rounded-2xl border-[#0000C5]"/>
                <Image src="/product.svg" alt="product" width={54} height={77.5} className="rounded-lg hover:border-1 rounded-2xl border-[#0000C5]"/>
                <Image src="/product.svg" alt="product" width={54} height={77.5} className="rounded-lg hover:border-1 rounded-2xl border-[#0000C5]"/>
                <Image src="/product.svg" alt="product" width={54} height={77.5} className="rounded-lg hover:border-1 rounded-2xl border-[#0000C5]"/>
            </div>
            <Image src="/product.svg" alt="product" width={550} height={687.5} className="hidden lg:block rounded-2xl"/>
            <Image src="/mobileProduct.svg" alt="product" width={360} height={300} className="block lg:hidden rounded-2xl"/>
            <div>
                <div className="flex flex-col gap-2">
                    <p className="text-3xl">Лонгслив Heavy Green</p>
                    <p className="opacity-60">SKU: SKU0010</p>
                </div>
                <div className="flex flex-row text-xl gap-4">
                    <p>5 000 р</p>
                    <p className="line-through opacity-60">10 000 р</p>
                </div>
                <div>
                    <div className="flex flex-col gap-1 py-6 ">
                        <p>Размер</p>
                        <div className="flex flex-row gap-4">
                            <p className="p-4 border-2 border-black/20 rounded-lg hover:border-[#0000C5] ">S</p>
                            <p className="p-4 border-2 border-black/20 rounded-lg hover:border-[#0000C5] ">M</p>
                            <p className="p-4 border-2 border-black/20 rounded-lg hover:border-[#0000C5] ">L</p>
                        </div>
                        <button onClick={() => setSizeOpen(true)} className=" text-[#0000C5] underline underline-offset-4 hover:text-black transition-colors w-fit">Размерная сетка</button>
                        {sizeOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSizeOpen(false)}>
                            <div className="relative w-full max-w-[500px] bg-white p-8" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => setSizeOpen(false)} className="absolute right-4 top-4 text-2xl opacity-50     hover:text-black">×</button>
                                <p className="mb-6 text-xl">Размерная сетка</p>
                                <div className="grid grid-cols-5 border-t border-gray-200 text-sm">
                                    
                                        <p className="opacity-50 py-3">Размер</p>
                                        <p className="opacity-50 text-center py-3">S</p>
                                        <p className="opacity-50 text-center py-3">M</p>
                                        <p className= "opacity-50 text-center py-3">L</p>
                                        <p className= "opacity-50 text-center py-3">XL</p>
                                        <p className="opacity-50 border-b border-gray-200 py-3 ">Талия</p>
                                        <p className="text-center py-3 border-b border-gray-200">70</p>
                                        <p className="text-center py-3 border-b border-gray-200">73</p>
                                        <p className="text-center py-3 border-b border-gray-200">76</p>
                                        <p className="text-center py-3 border-b border-gray-200">79</p>
                                        <p className="opacity-50 border-b border-gray-200 py-3 ">Длина</p>
                                        <p className="text-center py-3 border-b border-gray-200">70</p>
                                        <p className="text-center py-3 border-b border-gray-200">73</p>
                                        <p className="text-center py-3 border-b border-gray-200">76</p>
                                        <p className="text-center py-3 border-b border-gray-200">79</p>
                                        <p className="opacity-50 border-b border-gray-200 py-3 ">Ширина</p>
                                        <p className="text-center py-3 border-b border-gray-200">70</p>
                                        <p className="text-center py-3 border-b border-gray-200">73</p>
                                        <p className="text-center py-3 border-b border-gray-200">76</p>
                                        <p className="text-center py-3 border-b border-gray-200">79</p>
                                </div>
                            <p className="mt-5 text-xs opacity-40">Lorem ipsum dolor sit amet consectetur. Pretium vel quis sed at eget hendrerit ornare et. Donec et ut netus consequat orci nunc nibh. Convallis et integer malesuada auctor massa orci morbi volutpat fusce. Non accumsan tortor sit egestas sollicitudin tincidunt arcu integer elementum.</p>
                            </div>
                        </div>
                        )}
                    </div>
                    <div>
                        <p>Цвета</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/blue.svg" alt="product" width={30} height={30} className="rounded-lg hover:border-1 rounded-xl border-[#0000C5]"/>
                            <Image src="/black.svg" alt="product" width={30} height={30} className="rounded-lg hover:border-1 rounded-xl border-[#0000C5]"/>
                        </div>
                    </div>
                </div>
                <button className="rounded-2xl bg-black text-white py-3 px-24 my-6">В корзину</button>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-6 lg:gap-12 py-6 ">
                        <button className="opacity-40 hover:opacity-100" onClick={() => setTab("Описание")}>Описание</button>
                        <button className="opacity-40 hover:opacity-100" onClick={() => setTab("Состав")}>Состав</button>
                        <button className="opacity-40 hover:opacity-100" onClick={() => setTab("Уход")}>Уход</button>
                        <button className="opacity-40 hover:opacity-100" onClick={() => setTab("Доставка")}>Доставка</button>
                    </div>
                        <p className="opacity-40">
                        {tab === "Описание" && "Lorem ipsum dolor sit amet consectetur."}
                        {tab === "Состав" && "Состав изделия..."}
                        {tab === "Уход" && "Рекомендации по уходу..."}
                        {tab === "Доставка" && "Доставка курьерской службой СДЭК или Почта россии"}
                        </p>
                </div>
                
            </div>
        </div>
    
);
}