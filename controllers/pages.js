const pages = {
    home: (req, res) => {
        //res.send('Esto es home')
        //let datos = {nombre:"Victor"}
        res.status(200).render("home")
    },
    location: (req, res) => {
        res.status(200).render('location')
        },
    about: (req, res) => {
        res.status(200).render('about')
            },
    contact: (req, res) => {
        //res.status(200).send('Esto es contact')
        let datos = {nombre:"al formulario de contacto"}
        res.status(200).render('contact', datos)
        },
    mission: (req, res) => {
        let datos = {nombre:"Víctor", nombra:"Alicia"}
        res.status(200).render('mission',datos)
            },

    }

    module.exports = pages