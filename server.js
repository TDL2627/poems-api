var express = require("express");
var app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json())

const poems =  [{
    id: 1, title: 'Darkness ', type: 'Dark',des: 'there was once darkness'
  },
  {
    id: 2, title: 'Love', type: 'Romantic',des: 'When you love something you naturally protect it'
  },
  {
    id: 3,title: 'Wisdom ', type: 'Deep',des: 'when you talk you dont learn'
  },
  {
    id: 4,title: 'Giant ', type: 'Deep',des: 'Fee Fye Fo Fum'
  }
  ]

app.get("/", function(req, res){
    res.send("This is home page");
});
app.get("/poems", function(req, res){
     res.send(poems)
});

app.post('/',(req,res) =>{

const {title,type,des}=req.body;
const poem = {
  id:poems.length +1,
  title,
  type,
  des
};
poems.push(poem)
res.send(poem)
});
app.put('/:id',(req,res) =>{
  
});
app.get('/poems/:id',(req,res) =>{
  const poem = poems.find(poem => poem.id == req.params.id);
  if(!poem) res.status(404).send({msg:"Project not found"});
  res.send(poem)
});
app.delete('/:id',(req,res) =>{
  
})

const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});