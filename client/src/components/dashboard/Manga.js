import React from 'react'
import PropTypes from 'prop-types'


const Manga = ({mangas}) => {

    return(

      <div>
        <table className = "striped">
        <thead>
          <tr>
              <th className= "lead">Mangas</th>
              
          </tr>
        </thead>

        <tbody>
        {mangas.slice(0,4).map((manga, index)=>(

<tr key={index}>{manga}</tr>
))}
        </tbody>
      </table>
            
      </div>
    )

}

Manga.propTypes = {

    mangas: PropTypes.array.isRequired,

}


export default Manga
