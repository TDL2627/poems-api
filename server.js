var express = require("express");
var app = express();
const cors = require('cors')
app.use(cors());
app.get("/", function(req, res){
    res.send("This is home page");
});
app.get("/poems", function(req, res){
    let poems =  [{
        id: 1, title: 'Darkness ', type: 'Dark',des: 'there was once darkness'
      },
      {
        id: 2, title: 'Love', type: 'Romantic',des: 'When you love something you naturally protect it'
      },
      {
        id: 3,title: 'Wisdom ', type: 'Deep',des: 'when you talk you dont learn'
      }
      ]
     res.send(poems)
});
app.get("/poems:id", function(req, res){
  let poems =  [{
      id: 1, title: 'Darkness ', type: 'Dark',des: 'there was once darkness'
    },
    {
      id: 2, title: 'Love', type: 'Romantic',des: 'When you love something you naturally protect it'
    },
    {
      id: 3,title: 'Wisdom ', type: 'Deep',des: 'when you talk you dont learn'
    }
    ]
   res.send(poems)
});


app.listen(2627);