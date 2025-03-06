import SubjectBox from "./SubjectBox";

export default function SubjectList() {
    return(
        <div className="grid grid-cols-3 gap-3">
            <SubjectBox nome="Arquitetura e Organização de Computadores" slug="arq-org-comp"/>
            <SubjectBox nome="Modelagem de Aplicações 3D" slug="arq-org-comp"/>
            <SubjectBox nome="Programação em C" slug="arq-org-comp"/>
        </div>
    )
}