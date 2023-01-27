import db from './models/db.js'

function getAll() {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM todo`, (err, result) => {
            if(err) throw err
            resolve(result)
        })
    })
}

function addData(data) {
    db.query(`INSERT INTO todo VALUES(null, '${data}')`, (err, result) => {
        if(err) throw err
    })
}

export {getAll, addData}