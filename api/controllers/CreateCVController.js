'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM cvinfo'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM cvinfo WHERE userhash = ? order by id'
        db.query(sql, [req.params.userhash], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let userID = req.params.userID;
        let sql = 'UPDATE cvinfo SET ? WHERE id = ?'
        db.query(sql, [data, userID], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO cvinfo SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM cvinfo WHERE id = ?'
        db.query(sql, [req.params.userID], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}