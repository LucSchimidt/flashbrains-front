import Tiptap from '@/components/TipTapEditor';
        

export default function SummaryEditor() {
    return(
        <section className="w-[100%] bg-gray-100 flex justify-center p-6">
            <div className="w-[1024px] min-h-[200px] rounded-lg shadow-lg bg-white">
                <Tiptap/>
            </div>
        </section>
    )
}