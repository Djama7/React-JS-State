import React from "react";



    

class Person extends React.Component{
    constructor () {
        super()
        this.state = {
            count : 1,
        Person : {
            fullname : ' Jamoussi Med Amine',
            bio : ['     2011:Lycée les péres blanc   ',     '2015:Uik   ',     '2022 : GOMYCODE'     ],
            profession : 'Développeur Web' ,
            count : 1 , 
        }
        
    }
    
    
}
componentDidMount (){
    this.myInterval = setInterval (() => {
      this.setState ( a=> ( {

        count : this.state.count +1
      }))
        
    } ,1000 )
             
  }
  
render () {
    const a = this.state.count
    return (

        <div className="Per">
            <h1 id='ehseb'>{a}</h1>
            
            <h2>{this.state.Person.fullname}</h2>
            <ul className="nod">
                {
                    this.state.Person.bio.map ((el,i,t) => <li key={i}>{el}</li>)
                }
            </ul>
            
            <h3>{this.state.Person.profession}</h3>
           
            <div className="img">

            <img src="\amin.jpg" alt="Not found"/>

            </div>
            
            
        </div>

        
    )
}



}
export default Person ; 