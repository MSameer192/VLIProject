import dayjs from "dayjs"
import './InstructorTemplate.css'
export const InstructorRowTemplate = ({ index, FirstName, LastName, Status, createdAt, Email, LastComp, StatusColor, PaymentOrUnderClients, PaymentOrClientsColor, OnClick, TrStyle, ImgUrl }) => {



    return <tr onClick={OnClick} className={TrStyle}>
        <td className="px-3 text-start">{++index}</td>
        <td className="text-center">
            <img className="addCourseinstructorImg" src={ImgUrl} alt={FirstName+"img"} />
        </td>
        <td className="text-center">{FirstName} {LastName}</td>
        <td className="text-center">{Email}</td>

        <td className="text-center">
            <div className={`addCourse4Status ${StatusColor}`}
            >
                {Status}
            </div>
        </td>

        <td className="text-center">
            {dayjs(new Date(createdAt)).format('DD/MM/YYYY')}
        </td>


        <td className="text-center relative">
            <div className={`addCourse4Status ${PaymentOrClientsColor} whitespace-nowrap`}
            >
                {PaymentOrUnderClients}
            </div>
        </td>



        <td className="text-center">04/10</td>
        <td className="text-center">
            {LastComp ? <LastComp /> : null}
        </td>
    </tr>
}
