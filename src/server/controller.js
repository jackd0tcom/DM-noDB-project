let testData = [
  { id: 0, song: "freebird", duration: 420 },
  { id: 1, song: "sandstorm", duration: 420 },
  { id: 2, song: "V", duration: 420 },
  { id: 3, song: "brain", duration: 420 },
];

const handlerFunctions = () => {
  getList: (req, res) => {
    res.send(testData);
  };
};

export default handlerFunctions;
