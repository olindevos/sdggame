import './join.css'
import ReturnImage from './return.svg'

export default function Join (){
    return (
        <>
        <div className="CI1">
            <a className='CI1Btn' href='CreateJoin'> <img className='CJI2' src={ReturnImage} alt="" /></a>
        </div>
        <div className="JPage">
            
            <div className='JInput'>
                <label className="team-code">Team-Code</label>
                <input className='JInputCode' placeholder="000/000"></input>

                <label className="name">Naam Deelnemer</label>
                <input className='JInputName' ></input>

                <a className='JBut' href="/create"> DEELNEMEN </a>
            </div>
        </div>
        </>
    )
}              