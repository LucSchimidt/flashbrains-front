import Header from "@/components/Topics/Header";

export default function Subject() {
    return(
        <section className="flex flex-col gap-5 p-5 bg-white rounded-xl w-full max-w-7xl mt-5">
            <Header title="Matemática." button_title="Criar Conteúdo"/>
            <ul className="flex flex-row flex-wrap gap-2.5">
                {/* {topics.map((data, index) => (
                    <Topic href={data.href} key={index} title={data.title} description={data.description}/>
                ))} */}
            </ul>
        </section>
    )
}