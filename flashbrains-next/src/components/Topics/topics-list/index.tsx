import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

export interface TopicData {
    title: string;
    description: string;
    href:string;
}

export default function Topic({title, description, href}:TopicData) {
    return(
        <Link href={href} passHref>
            <div className="bg-flash-light-gray hover:bg-flash-light-green rounded-lg h-[400px] flex flex-col justify-between p-5 cursor-pointer max-w-72">
                <div className="text-flash-medium-gray">
                    <h2 className="font-bold">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="flex w-full items-end justify-end">
                    <BsArrowDownRight className="text-xl text-gray-600" />
                </div>
            </div>
        </Link>
    )
}