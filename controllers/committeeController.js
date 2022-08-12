import Committee from "../modules/committeeModel";

function postCommittee(req, res, next) {
  const committee = new Committee({
    ...req.body,
    avatar: req.files[0].filename,
  });
  console.log(committee);
  res.status(200).json(committee);
}

export { postCommittee };
