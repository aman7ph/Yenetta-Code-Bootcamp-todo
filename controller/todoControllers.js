const todo = require("../model/todModel");

//geting
const getTodos = async (req, res) => {
  const todos = await todo.find();
  res.status(200).json({ todos });
};

//creating
const createTodo = async (req, res) => {
  // const schema = Joi.object({
  //   title: Joi.string().required(),
  //   description: Joi.string().required(),
  // });

  // const { error, value } = schema.validate(req.body);
  // if (error) {
  //   res.status(400).json({ error: error.details.map((err) => err.message) });
  // }

  const todos = await todo.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(200).json(todos);
};

//updating
const updateTodo = async (req, res) => {
  const todoToBeUpdated = await todo.findById(req.params.id);
  if (!todoToBeUpdated) {
    res.status(400).json({ error: "todo not found" });
  }
  const updatedTodo = await todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ updatedTodo });
};

//deleting
const deleteTodo = async (req, res) => {
  const todoToBeUpdated = await todo.findById(req.params.id);
  if (!todoToBeUpdated) {
    res.status(400).json({ error: "todo not found" });
  }
  const deletedTodo = await todo.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Delete todo sucsessfull" });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
