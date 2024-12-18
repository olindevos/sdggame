import './create.css'
import ReturnImage from './return.svg'

export default function Create (){
    return (
        <div className="CPage"> 
         <div className="CI1">
                <a className='CI1Btn' href='CreateJoin'> <img className='CJI2' src={ReturnImage} alt="" /></a>
         </div>
            <div className='Cpage1'>
                <div> 
                     <label className="team-name">teamnaam</label>
                     <input className='Cteam-name' ></input>

                     <div className='Cpage1TC'>000-000</div>
                </div>
                <a className='CpagePlayBtn' href="FirstPage">start spel</a>
            </div>
                <hr className='CpageHr'/>

            <div className='Cpage2'>

            </div>
        </div>
    )
}