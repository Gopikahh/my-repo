

import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('MySQL connected...');
    }
});

// GET all records
app.get('/', (req, res) => {
    const sql = "SELECT * FROM books";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error fetching records:', err);
            return res.status(500).json({ error: err.message });
        }
        return res.json(data);
    });
});




app.post('/create', (req, res) => {
    console.log('Received POST data:', req.body); // Add this line
  
    const sql = "INSERT INTO books (publisher, name) VALUES (?, ?)";
    const values = [req.body.publisher, req.body.name];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error(' MySQL Insert Error:', err.sqlMessage || err);
        return res.status(500).json({ error: err.sqlMessage || 'Unknown error' });
      }
      return res.status(200).json({ message: 'Book added', data });
    });
  });
  app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log('Deleting book with id:', id); // Debug log to ensure the right ID is being passed
  
    const sql = 'DELETE FROM books WHERE id = ?'; // Adjust the column name if necessary
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error deleting book:', err);
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Book not found' });
      }
      return res.status(200).json({ message: 'Book deleted successfully' });
    });
  });
  
  
 

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


