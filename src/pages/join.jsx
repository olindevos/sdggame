import './join.css'

export default function Join (){
    return (
        <div className="JPage">
            <div className='JInput'>
                <label className="team-code">Team-Code</label>
                <input className='JInputCode' placeholder="000/000"></input>

                <label className="name">Naam Deelnemer</label>
                <input className='JInputName' ></input>

                <a className='JBut' href="/create"> DEELNEMEN </a>
            </div>
        </div>
    )
}              