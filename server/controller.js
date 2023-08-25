let testData = [
  { id: 1, song: "Freebird", duration: 420 },
  { id: 2, song: "Sandstorm", duration: 420 },
  { id: 3, song: "Ice V", duration: 420 },
  { id: 4, song: "Stairway to Heaven", duration: 420 },
];

let globalId = 5;

const handlerFunctions = {
  getList: (req, res) => {
    res.send(testData);
  },
  editItem: (req, res) => {
    const { id } = req.params;
    const { song, duration } = req.body;
    const index = testData.findIndex((el) => {
      return el.id === +id;
    });
    const item = testData[index];
    console.log(item);
    item.id = +(id ?? item.id);
    item.song = song ?? item.song;
    item.duration = +(duration ?? item.duration);

    res.send(item);
  },
  deleteItem: (req, res) => {
    const { id } = req.params;
    testData = testData.filter((el) => {
      return el.id !== +id;
    });
    res.send("deleted");
  },
  addItem: (req, res) => {
    const { song, duration } = req.body;
    const newObj = {
      id: globalId,
      song: song,
      duration: duration,
    };
    globalId++;
    testData.push(newObj);
    res.send(newObj);
  },
};

export default handlerFunctions;
