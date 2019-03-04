import mongoose from 'mongoose'; 
import memo from '../models/memobookModel.js';

exports.getMemo = (req, res) => {
    memo.findById(req.params.memoId, (err, memo) => {
        if (err) {
            res.send(err);
        }
        console.log("Hi");
        res.json(memo);
    });
};

exports.getAllMemos = (req, res) => {
    memo.find({}, (err, memos) => {
        if (err) {
            res.send(err);
        }

        res.json(memos);
    });
};

exports.createMemo = (req, res) => {
    const newMemo = new memo(req.body);

    newMemo.save((err, memo) => {
        if (err) {
            res.send(err);
        }

        res.json(memo);
    });
};

exports.updateMemo = (req, res) => {
    memo.findOneAndUpdate({
        _id: req.params.memoId
    }, req.body,
        (err, memo) => {
            if (err) {
                res.send(err);
            }

            res.json(memo);
        });
};

exports.deleteMemo = (req, res) => {
    memo.remove({
        _id: req.params.memoId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `memo ${req.params.memoId} successfully deleted`
        });
    });
};