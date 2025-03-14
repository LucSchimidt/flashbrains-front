import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BsPatchQuestion, BsBell } from "react-icons/bs";

interface Pages {
    title: string;
    slug: string;
}

const pages: Pages[] = [
    {title:"Home", slug:"/"},
    {title:"Tópicos", slug:"/topics"},
    {title:"Configurações", slug:"/config"},
]

export default function Header() {
    return(
        <section className="bg-white w-full max-w-7xl flex flex-row justify-between items-center h-16 rounded-xl mt-1 px-5">
            <h1 className="text-2xl font-serif cursor-default">Flashbrains.</h1>
            <ul className="flex flex-row gap-5 justify-center text-sm">
                {pages.map((page, index) => (
                    <Link key={index} href={page.slug}>{page.title}</Link>
                ))}
            </ul>
            <div className="flex flex-row gap-5 items-center text-xl">
                <BsPatchQuestion />
                <BsBell />
                <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </section>
    )
}