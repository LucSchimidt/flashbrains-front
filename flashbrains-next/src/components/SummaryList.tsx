import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import SummaryBox from "./SummaryBox"
  

export default function SummaryList() {
    return(
        <div className="flex flex-col gap-3">
            <SummaryBox nome="Aula 01" slug="arq-org-comp"/>
            <SummaryBox nome="Aula 02" slug="arq-org-comp"/>
            <SummaryBox nome="Aula 03" slug="arq-org-comp"/>
        </div>
    )
}