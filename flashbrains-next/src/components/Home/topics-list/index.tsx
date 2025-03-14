import TopicCard from "../topic-card";
import { TopicCardType } from "../topic-card";
import GreenButton from "@/components/green-btn";

export interface CardData {
    title: string;
    description: string;
    href: string;
}

export interface TopicsData {
    title: string;
    items: CardData[];
    type: TopicCardType;
}

export default function TopicsList({ title, items, type }: TopicsData) {
    return(
        <div className="w-full p-5 h-full bg-white rounded-xl flex flex-col">
            <h2 className="text-lg">{title}</h2>
            <ul className="flex flex-col gap-2.5 mt-5">
                {items.map((data, index) => (
                    <TopicCard href={data.href} key={index} title={data.title} description={data.description} type={type}/>
                ))}
            </ul>
            <div className="flex justify-end w-full mt-2.5">
                <GreenButton title="Ver mais" href="/topics"/>
            </div>
        </div>
    )
}