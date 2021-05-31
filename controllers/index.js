const router = require ("express").Router();
const pages = require ("./pages")

router.get('/', pages.home)
router.get('/about', pages.about)
router.get('/contact', pages.contact)
router.get('/location', pages.location)
router.get('/mission', pages.mission)


module.exports = router