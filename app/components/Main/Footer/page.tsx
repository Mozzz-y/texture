import Image from "next/image";
import Link from "next/link";
export default function Footer() {
return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between text-center gap-8 my-12">
        <Link href="/">© ТЕКСТУРА</Link>
        <div className="flex flex-col lg:flex-row gap-6 opacity-80">
            <Link href="/Contacts">Контакты</Link>
            <Link href="/Return">Возврат</Link>
            <p>Оферта</p>
            <Link href="/AboutUs">О нас</Link>
            <p>Lookbook</p>
        </div>
        <p className="font-bold text-xl">© Mirror studio</p>
    </div>
);
}