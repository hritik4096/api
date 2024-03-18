const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        const user_id = "Hritik Mishra";
        const email = "hritik1960.be21@gmail.com";
        const roll_number = "2110991960";

        const odd_numbers = data.filter(item => typeof item === 'string' && !isNaN(item) && parseInt(item) % 2 !== 0);

        const even_numbers = data.filter(item => typeof item === 'string' && !isNaN(item) && parseInt(item) % 2 === 0);

        
        const alphabets = data.filter(item => typeof item === 'string' && /^[a-zA-Z]$/.test(item)).map(item => item.toUpperCase());

    
        const response = {
            is_success: true,
            user_id,
            email,
            roll_number,
            odd_numbers,
            even_numbers,
            alphabets
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
