import React from 'react'

function movieForm({match, history}) {
    return (
        <div>
            <h1>Movie Form {match.params.id}</h1>
            <button className="btn btn-primary" onClick={()=> history.push('/movies')}>Go Back</button>
        </div>
    )
}

export default movieForm
