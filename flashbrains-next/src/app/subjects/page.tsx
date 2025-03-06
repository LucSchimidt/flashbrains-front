import { ProfileForm } from "@/components/SubjectForm";
import SubjectList from "@/components/SubjectList";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";
  

export default function Subjects() {
    return(
        <section className="p-6 flex flex-col gap-3 relative">
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">Matérias</h1>
                <p>Bem vindo(a) às suas matérias.</p>
            </div>
            <SubjectList/>
            <Dialog>
                <DialogTrigger className="fixed bottom-3 right-3 bg-gray-100 cursor-pointer text-6xl rounded-full p-2 shadow-md hover:bg-gray-200">
                    <FaPlus />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Criar uma nova matéria</DialogTitle>
                    <DialogDescription>
                        Crie uma nova matéria para organizar os seus resumos.
                    </DialogDescription>
                    </DialogHeader>
                    <ProfileForm/>
                </DialogContent>
            </Dialog>
        </section>
    )
}