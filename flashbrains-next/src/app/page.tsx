import YourStatistics from "@/components/Home/your-statistics"
import TopicsList from "@/components/Home/topics-list"
import { TopicsData } from "@/components/Home/topics-list"
import Appointments from "@/components/Home/appointments"

const resumos: TopicsData = {
    title:"Seus resumos",
    items: [
        {
            title: "Matemática",
            description: "Funções quadráticas.",
        },
        {
            title: "Física",
            description: "Termodinâmica.",
        },
        {
            title: "Química",
            description: "Tabela Periódica.",
        },
    ],
    type: "resumo"
}

const mapas_mentais: TopicsData = {
    title:"Seus mapas mentais",
    items: [
        {
            title: "Matemática",
            description: "Funções quadráticas.",
        },
        {
            title: "Matemática",
            description: "Funções quadráticas.",
        },
        {
            title: "Matemática",
            description: "Funções quadráticas.",
        },
    ],
    type: "mapa"
}

export default function Home() {
    return(
        <section className="grid grid-cols-3 grid-rows-2 gap-5 w-full h-full py-5 max-w-7xl">
            <div className="flex flex-col gap-3 row-span-2">
                <YourStatistics />
            </div>
            <div className="col-span-1">
                <TopicsList {...resumos}/>
            </div>
            <div className="col-span-1">
                <TopicsList {...mapas_mentais}/>
            </div>
            <div className="col-span-2">
                <Appointments />
            </div>
        </section>
    )
}