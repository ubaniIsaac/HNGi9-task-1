const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({
        slackUsername: "i-ce-u",
        backend: true,
        age: 23,
        bio: "A backend developer that enjoys building cool things"
    })
});
app.post('/', (req, res) => {
    const { operation_type, x, y } = req.body;
    switch (operation_type) {
        case 'addition': result = x + y
            break;
        case 'subtraction': result = x - y
            break;
        case 'multiplication': result = x * y
            break;
        default: result = "Invalid Operation type"
    }
    res.send({
        slackUsername: "i-ce-u",
        operation_type: operation_type,
        result: result
    })
})


app.set('port', PORT)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});