import Statistic from "../statistic"

export interface StatisticData {
    value: string;
    subtitle: string;
}

const stats: StatisticData[] = [
    {value: "84%", subtitle: "de aproveitamento." },
    {value: "23", subtitle: "resumos criados." },
    {value: "07", subtitle: "mapas mentais desenhados." },
]

export default function YourStatistics() {
    return(
        <div className="w-full p-5 h-full bg-white rounded-xl">
            <h1 className="text-lg cursor-default">Suas estatísticas</h1>
            <ul>
                {stats.map((stat, index) => (
                    <Statistic key={index} value={stat.value} subtitle={stat.subtitle}/>
                ))}
            </ul>
        </div>        
    )
}