import { AppointmentData } from "../appointment"
import Appointment from "../appointment"

const compromissos: AppointmentData[] = [
    { schedule: "09h - 10h", description:"Call com os meninos, sobre o estudo da matéria de química deste semestre." },
    { schedule: "09h - 10h", description:"Call com os meninos, sobre o estudo da matéria de química deste semestre." },
    { schedule: "09h - 10h", description:"Call com os meninos, sobre o estudo da matéria de química deste semestre." },
]

export default function Appointments() {
    return(
        <div className="w-full h-full bg-white rounded-xl p-5">
            <h2 className="text-lg">Seus compromissos</h2>
            <ul className="flex flex-row gap-2.5 h-full max-h-72 mt-5">
                {compromissos.map((data, index) => (
                    <Appointment key={index} schedule={data.schedule} description={data.description}/>
                ))}
            </ul>
        </div>
    )
}