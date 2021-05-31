const pages = {
    home:(req, res) => {
        // res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
        // res.send('Es la home!')
        let datos = {nombre:"Alicia"}
        res.status(200).render('home',datos);
    },
    
    about:(req, res) => {
        // res.status(200).render('Esto es about!')
        
        res.status(200).send('Esto es about!')
    },
   contact:(req, res) => {
        // res.status(200).render('Esto es contact!')

        res.status(200).send('Esto es contact!')
    },
    location:(req, res) => {
        res.status(200).send('Esto es location!')
      },
    mission:(req, res) => {
        // res.status(200).render('Esto es mission!')

        res.status(200).send('Esto es mission!')

      },

}

module.exports= pages;