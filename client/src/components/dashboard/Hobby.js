import React,{Fragment} from 'react'
import PropTypes from 'prop-types'


const Hobby = ({hobbies}) => {

  const hobby = hobbies.slice(0,4).map((hobby,index) =>(

    <tr key ={index}>{hobby}</tr>
  ))

    return(

      <Fragment>
        <table className = "striped">
        <thead>
          <tr>
              <th className = "lead">Hobbies</th>
              
          </tr>
        </thead>

        <tbody>
          {hobby}
        </tbody>
      </table>
            
      </Fragment>
    )

}

Hobby.propTypes = {

    hobbies: PropTypes.array.isRequired,
}


export default Hobby
