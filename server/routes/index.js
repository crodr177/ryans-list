var express = require('express');
var router = express.Router();
const pool = require('../db')

router.get('/', (req, res, next) => {
  pool.query('SELECT name, id FROM categories WHERE id < 6 OR (id > 121 AND id < 124)', (err, results, fields) => {
    console.log(err)
    res.json(results)
  })
});

router.get('/categories', (req, res, next) => {
  pool.query(`SELECT c.id as parent_id, c2.id, c.name, c2.slug 
  FROM categories c
    LEFT JOIN categories c2  ON c.id = c2.parent_id`, (err, results, fields) => {
    res.json(results)
  })
})

router.get('/category/:id', (req, res, next) => {
  const sql = `
  SELECT p.*, c.name
  FROM categories c
	  LEFT JOIN postings p ON p.category_id = c.id
  WHERE c.id = ?
  `
  pool.query(sql, [req.params.id], (err, results, fields) => {
    res.json(results)
  })
})

router.post('/category/:id', (req, res, next) => {
  const title = req.body.title
  console.log(req.body.title)
  const desc = req.body.desc
  const image = req.body.image
  const categoryId = req.params.id
  const sql = `
  INSERT INTO postings (title, description, post_image, category_id, date_posted)
  VALUES(?,?,?,?, CURDATE())
  `
  pool.query(sql, [title, desc, image, categoryId], (err, results, fields) => {
    res.json({
      id: results.insertId,
      title: title,
      desc: desc,
      image: image,
      category_id: categoryId
    })
  })
})

router.get('/post/:id', (req, res, next) => {
  const sql= `
  SELECT * 
  FROM postings 
  WHERE id = ? 
  `
  pool.query(sql, [req.params.id], (err, results, fields) => {
    res.json(results)
  })
})

router.get('/top-category/:id', (req, res, next) => {
  const sql = `
  SELECT p.*,c.parent_id
  FROM postings p
	  LEFT JOIN categories c ON p.category_id = c.id
  WHERE c.parent_id = ?
  `
  pool.query(sql, [req.params.id], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router;
