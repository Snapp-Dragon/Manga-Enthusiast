import React,{Fragment} from 'react'
import PropTypes from 'prop-types'


const Manga = ({mangas}) => {

    return(

      <div>
        <table className = "striped">
        <thead>
          <tr>
              <h3><th>Mangas</th></h3>
              
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

}


export default Manga
