import Committee from "../modules/committeeModel";

function postCommittee(req, res, next) {
  console.log(req.body);
  res.status(200).json(req.body);
}

function getCommittee(req, res, next) {
  res.status(200).json("test");
}

export { postCommittee, getCommittee };
