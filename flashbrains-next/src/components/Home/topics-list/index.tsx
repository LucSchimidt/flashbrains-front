import TopicCard from "../topic-card";
import { TopicCardType } from "../topic-card";

export interface CardData {
    title: string;
    description: string;
}

export interface TopicsData {
    title: string;
    items: CardData[];
    type: TopicCardType
}

export default function TopicsList({ title, items, type }: TopicsData) {
    return(
        <div className="w-full p-5 h-full bg-white rounded-xl">
            <h2 className="text-lg">{title}</h2>
            <ul className="flex flex-col gap-2.5 mt-5">
                {items.map((data, index) => (
                    <TopicCard key={index} title={data.title} description={data.description} type={type}/>
                ))}
            </ul>
        </div>
    )
}