import GreenButton from "@/components/green-btn"
import { ProfileForm } from "@/components/SubjectForm";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import SearchBar from "@/components/search-bar";

interface HeaderData {
    title:string
    button_title:string;
}

export default function Header({title, button_title}: HeaderData) {
    return(
        <div className="flex w-full flex-row justify-between">
            <h2 className="text-4xl font-serif cursor-default">{title}</h2>
            <div className="flex flex-row gap-2.5">
                <SearchBar/>
                <Dialog>
                    <DialogTrigger className="">
                        <GreenButton title={button_title} href=""/>
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
            </div>
        </div>
    )
}