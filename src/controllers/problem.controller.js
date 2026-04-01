function pingProblemController(req, res) {
  res.json({ message: "Ping controller is up" });
}

function addProblem(req, res) {
  res.json({ message: "Add problem" });
}

function getProblem(req, res) {
  res.json({ message: "Get problem" });
}

function getProblems(req, res) {
  res.json({ message: "Get problems" });
}

function deleteProblem(req, res) {
  res.json({ message: "Delete problem" });
}

function updateProblem(req, res) {
  res.json({ message: "Update problem" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
