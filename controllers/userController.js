const UserModelApiTest = require("../model/userModel");
exports.getAllUser = async (req, res) => {
  try {
    // const users = await UserModelApiTest.find();
    res.status(200).json({
      status: "success",
      // lengt: users.length,
      // data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

exports.postUser = async (req, res) => {
  try {
    const datta = await UserModelApiTest.create({
      name: req.body.name,
      duration: req.body.duration,
      maxGroupSize: req.body.maxGroupSize,
      difficulty: req.body.difficulty,
      ratingsAverage: req.body.ratingsAverage,
      ratingsQuantity: req.body.ratingsQuantity,
      price: req.body.price,
      summary: req.body.summary,
      description: req.body.description,
      imageCover: req.body.imageCover,
    });
    res.status(201).json({
      status: "success",
      response: datta,
    });
  } catch (error) {
    res.status(500).json({
      status: "err",
      response: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // const deletedata = await UserModelApiTest.deleteOne({
    //   _id: req.params.id,
    // });
    res.status(202).json({
      message: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "fail",
      err: error,
    });
  }
};

exports.updateuse = async (req, res) => {
  try {
    const deletedata = await UserModelApiTest.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        duration: req.body.duration,
        maxGroupSize: req.body.maxGroupSize,
        difficulty: req.body.difficulty,
        ratingsAverage: req.body.ratingsAverage,
        ratingsQuantity: req.body.ratingsQuantity,
        price: req.body.price,
        summary: req.body.summary,
        description: req.body.description,
        imageCover: req.body.imageCover,
      },
      { new: true }
    );
    console.log(deletedata);
    res.status(202).json({
      message: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "fail",
      err: error,
    });
  }
};

// exports.updateuse = async (req, res) => {
//   try {
//     const deletedata = await UserModelApiTest.findByIdAndUpdate(
//       { _id: req.params.id },
//       {
//         imageCover: req.body.imageCover,
//       },
//       { new: true }
//     );
//     console.log(deletedata);
//     res.status(202).json({
//       message: "success",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "fail",
//       err: error,
//     });
//   }
// };
