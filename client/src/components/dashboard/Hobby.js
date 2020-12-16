import React,{Fragment} from 'react'
import PropTypes from 'prop-types'


const Hobby = ({hobbies}) => {

    return(

      <div>
        <table className = "striped">
        <thead>
          <tr>
              <h3><th>Hobbies</th></h3>
              
          </tr>
        </thead>

        <tbody>
        {hobbies.slice(0,4).map((hobbie, index)=>(

<tr key={index}>{hobbie}</tr>
))}
        </tbody>
      </table>
            
      </div>
    )

}

Hobby.propTypes = {

}


export default Hobby
