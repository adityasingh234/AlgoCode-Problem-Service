const { StatusCodes } = require("http-status-codes");

function pingProblemController(req, res) {
  res.json({ message: "Ping controller is up" });
}

function addProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function getProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function getProblems(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function deleteProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function updateProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
