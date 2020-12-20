// Core modules
const Tour = require("../models/TourModel");

exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            status: "success",
            results: tours.length,
            data: {
                tours,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

exports.addNewTour = async (req, res) => {
    try {
        const tour = await Tour.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                tour,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};
exports.getSingleTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                tour,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};
exports.updateSingleTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        });
        res.status(201).json({
            status: "success",
            data: {
                tour,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

exports.deleteSingleTour = (req, res) => {
    // tours = tours.filter((tour) => tour.id !== +req.params.id);
    // fs.writeFile(
    //     `${__dirname}/../dev-data/data/tours-simple.json`,
    //     JSON.stringify(tours),
    //     "utf-8",
    //     (err) => {
    //         if (err) {
    //             return res.status(500).json({
    //                 status: "fail",
    //                 message: "Server error",
    //             });
    //         }
    //         res.status(204).json({
    //             status: "success",
    //             data: null,
    //         });
    //     }
    // );
};
