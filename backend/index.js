import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

morgan.token("contentOfBody", function (req, res) {
  return JSON.stringify(req.body);
});

//Middleware
app.use(express.static('../frontend/dist'))
app.use(cors());
app.use(express.json());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :contentOfBody",
  ),
);

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

//Info Page
app.get("/info", (request, response) => {
  const date = new Date();
  response.send(`
<div>
<p> Phonebook has info for ${persons.length} people </p>
<p> ${date} </p>
</div>
`);
});
//GET Request
app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((p) => p.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(400).send("Bad Request");
  }
});
//DELETE Request
app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((p) => p.id !== id);

  response.status(204).end();
});

//POST Request

app.post("/api/persons", (request, response) => {
  const body = request.body;
  console.log(body);

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  if (persons.some((p) => p.name === body.name)) {
    return response.status(409).json({
      error: "name must be unique",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);
  response.json(person);
});

function generateId() {
  const randomId = persons.length > 0 ? Math.floor(Math.random() * 1000) : 0;

  return String(randomId);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
