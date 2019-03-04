import memobook from '../controllers/memobookController.js';

export default (app) => {
    app.route('/memos')
        .get(memobook.getAllMemos)
        .post(memobook.createMemo);

    app.route('/memos/:memoId')
        .get(memobook.getMemo)
        .put(memobook.updateMemo)
        .delete(memobook.deleteMemo);
};