const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT;

app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({
        slackUsername: "isaacchimdi",
        backend: true,
        age: 23,
        bio: "A backend developer that enjoys building cool things"
    })
});


app.set('port', PORT)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});