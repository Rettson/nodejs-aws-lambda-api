function index(req, res) {
    res.status(200).json({ message: 'hello' });
}

function store(req, res) {
    const message = req.body.message;
    res.status(201).json({ message });
}

export default { index, store };