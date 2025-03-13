import { Separator } from "@/components/ui/separator"
import { StatisticData } from "../your-statistics"


export default function Statistic({ value, subtitle }: StatisticData) {
    return(
        <div className="flex flex-col items-center gap-10 mt-5">
            <div className="flex flex-col items-center gap-5">
                <h2 className="font-serif text-flash-dark-green text-9xl">{value}</h2>
                <p className="text-flash-medium-gray">{subtitle}</p>
            </div>
            <Separator className="w-3/4"/>
        </div>
    )
}