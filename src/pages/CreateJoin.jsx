import './CreateJoin.css'
import InfoImage from './Info.png'

export default function CreateJoin (){
    return (
        <>
            <div className="CJpage">
                <div className="CJbut">
                    <a className="CreateBut" href="/create">AANMAKEN</a>
                    <a className="JoinBut" href="/join">DEELNEMEN</a>
                </div>
             </div>
             <div className='CJI'>
                    <div className='CJII'><img src={InfoImage}   alt="" /></div>
             </div>
        </>
    )

}