import Link from "next/link"

interface GreenBtnData {
    title:string;
    href:string;
}

export default function GreenButton({title, href}: GreenBtnData) {
    return(
        <Link className="text-sm flex justify-center items-center p-5 bg-flash-dark-green h-9 text-white rounded-lg font-bold hover:brightness-110" href={href}>
            {title}
        </Link>
    )
}