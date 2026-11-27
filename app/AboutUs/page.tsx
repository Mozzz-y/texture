import Image from "next/image";

export default function AboutUs() {
    return(
        <div className="containter mx-auto flex flex-col lg:flex-row items-center gap-16">
            <p className="block lg:hidden">Молодой бренд одежды, основанный в 2024 году в Москве. <br/>
            Bibendum donec purus sagittis lorem suspendisse. Sagittis vulputate purus etiam ac scelerisque ac habitant maecenas.
            Vulputate bibendum ultrices egestas eget faucibus quis malesuada tellus tellus. Tellus diam lobortis neque velit.Sed elit laoreet adipiscingproin quis quis nunc ornare mi.
            Nisi quis turpis vulputate tincidunt nisl nullam et morbi tempus. Congue lacus orci orci enim ultrices ipsum adipiscing.
            Donec scelerisque felis et nec ac est id. Semper blandit sit a magnis arcu eget. Ornare dui mauris diam ultricies.
            Ultrices eros fringilla cursus ullamcorper rhoncus in suspendisse. Duis suspendisse feugiat aliquam eget venenatis ut ut sagittis dignissim.
            Tortor dictum morbi gravida non. Imperdiet a odio volutpat ac. Egestas elementum malesuada ipsum lobortis eu vitae tristique.
            Vivamus rhoncus sit bibendum auctor tincidunt volutpat. Donec eget vitae morbi sed sit. Et tempor nibh viverra pulvinar id egestas netus.</p>
            <p className="hidden lg:block">Молодой бренд одежды, основанный в 2024 году в Москве. <br/>
            Bibendum donec purus sagittis lorem suspendisse. Sagittis vulputate purus etiam ac scelerisque ac habitant maecenas. <br/>
            Vulputate bibendum ultrices egestas eget faucibus quis malesuada tellus tellus. Tellus diam lobortis neque velit. <br/>Sed elit laoreet adipiscingproin quis quis nunc ornare mi.
            Nisi quis turpis vulputate tincidunt nisl nullam et morbi tempus.<br/> Congue lacus orci orci enim ultrices ipsum adipiscing.
            Donec scelerisque felis et nec ac est id. Semper blandit sit a magnis arcu eget.<br/> Ornare dui mauris diam ultricies.
            Ultrices eros fringilla cursus ullamcorper rhoncus in suspendisse.<br/> Duis suspendisse feugiat aliquam eget venenatis ut ut sagittis dignissim.
            Tortor dictum morbi gravida non.<br/> Imperdiet a odio volutpat ac. Egestas elementum malesuada ipsum lobortis eu vitae tristique.<br/>
            Vivamus rhoncus sit bibendum auctor tincidunt volutpat. Donec eget vitae morbi sed sit. Et tempor nibh viverra pulvinar id egestas netus.</p>
        <Image src="/quadImage.svg" alt="product" width={616} height={616} className="hidden lg:block rounded-2xl"/>
        <Image src="/quadImage.svg" alt="product" width={350} height={350} className="block lg:hidden rounded-2xl"/>
    </div>
    );
}