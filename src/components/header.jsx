import './header.css'

export default function Header (){
    return(
        <>
        <div className='NavBar'>
         
            <div className='Logo'>Logo</div>
            <div className='InnerNav'>
               <a href="/Home">Home</a>
               <a href="/About">About</a>
               <a href="/Stats">Stats</a>
            </div>
        </div>
        </>
    )
}