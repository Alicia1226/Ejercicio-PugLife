const pages = {
    home: (req, res) => {
        //res.send('Esto es home')
        let datos = {nombre:"Victor"}
        res.status(200).render("home", datos)
    },
    location: (req, res) => {
        res.status(200).send('Esto es location')
        },
    about: (req, res) => {
            res.send('Esto es about')
            },
    contact: (req, res) => {
        let datos = {nombre:"al formulario de contacto"}
        res.status(200).render('home', datos)
        },
    mission: (req, res) => {
        res.status(200).send('Esto es mission')
            },

    }

    module.exports = pages