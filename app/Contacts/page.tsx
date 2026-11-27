export default function Contacts() {
    return(
        <div className="containter mx-auto flex flex-col justify-center text-center gap-6">
            <p className="text-3xl font-bold mb-6">Контакты</p>
            <div>
                <p>Группы в ВКонтакте</p>
                <a href="https://www.figma.com" className="text-[#0000C5] underline">https://www.figma.com</a>
            </div>
            <div>
                <p>Telegram-канал c новостями</p>
                <a href="https://www.figma.com" className="text-[#0000C5] underline">https://www.figma.com</a>
            </div>
            <div>
                <p>Страница в другой соцсети</p>
                <a href="https://www.figma.com" className="text-[#0000C5] underline">https://www.figma.com</a>
            </div>
            <div>
                <p>Наша почта для связи</p>
                <a href="https://www.figma.com" className="text-[#0000C5] underline">https://www.figma.com</a>
            </div>
        </div>
    );
}