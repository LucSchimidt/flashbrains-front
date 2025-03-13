
export interface AppointmentData {
    date?: string;
    schedule: string;
    description: string
}

export default function Appointment({schedule, description}: AppointmentData) {
    return(
        <div className="bg-flash-light-gray rounded-xl hover:bg-flash-light-green cursor-pointer w-full p-5 text-flash-dark-gray">
            <h2 className="font-bold">{schedule}</h2>
            <p>{description}</p>
        </div>
    )
}