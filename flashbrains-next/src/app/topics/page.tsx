import Header from "@/components/Topics/Header";
import { TopicData } from "@/components/Topics/topics-list";
import Topic from "@/components/Topics/topics-list";

const topics: TopicData[] = [
    {title:"Matemática", description:"Matéria que tem varios numeros dahora", href:"/topics/matematica"},
    {title:"Matemática", description:"Matéria que tem varios numeros dahora", href:"/topics/matematica"},
    {title:"Matemática", description:"Matéria que tem varios numeros dahora", href:"/topics/matematica"},
    {title:"Matemática", description:"Matéria que tem varios numeros dahora", href:"/topics/matematica"},
    {title:"Matemática", description:"Matéria que tem varios numeros dahora", href:"/topics/matematica"},
    {title:"Matemática", description:"Matéria que tem varios numeros dahora", href:"/topics/matematica"},
    {title:"Matemática", description:"Matéria que tem varios numeros dahora", href:"/topics/matematica"},
    {title:"Matemática", description:"Matéria que tem varios numeros dahora", href:"/topics/matematica"},
]

export default function Subjects() {
    return(
        <section className="flex flex-col gap-5 p-5 bg-white rounded-xl w-full max-w-7xl mt-5">
            <Header title="Tópicos." button_title="Criar tópico"/>
            <ul className="flex flex-row flex-wrap gap-2.5">
                {topics.map((data, index) => (
                    <Topic href={data.href} key={index} title={data.title} description={data.description}/>
                ))}
            </ul>
        </section>
    )
}