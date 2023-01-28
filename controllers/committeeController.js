import Committee from "../modules/committeeModel";

function postCommittee(req, res, next) {
  const committee = new Committee(req.body);
  console.log(committee);
  res.status(200).json({ status: true, message: "Data uploaded successfully" });
}
function getCommittee(req, res, next) {}

export { postCommittee, getCommittee };
