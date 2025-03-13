import { BsFileEarmarkFontFill, BsFillMapFill } from "react-icons/bs";

export type TopicCardType = "resumo" | "mapa";

interface TopicCardData {
    title: string;
    description: string;
    type: TopicCardType
}

export default function TopicCard({title, description, type}: TopicCardData) {
    return(
        <div className="flex flex-row items-center justify-between bg-flash-light-gray p-5 rounded-lg cursor-pointer hover:bg-flash-light-green">
            <div className="text-flash-medium-gray">
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
            <div className="text-5xl text-flash-medium-gray">
                {type == "resumo" ? <BsFileEarmarkFontFill /> : <BsFillMapFill />}
            </div>
        </div>
    )
}