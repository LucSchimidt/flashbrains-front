import SummaryList from "@/components/SummaryList";

export default function Subject() {
    return(
        <section className="p-6 flex flex-col gap-3 relative">
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">Resumos</h1>
                <p>Todos os seus resumos desta matéria.</p>
            </div>
            <div className="w-max">
                <SummaryList/>
            </div>
        </section>
    )
}