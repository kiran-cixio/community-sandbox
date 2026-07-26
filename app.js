function parseInput(data) {
    if (!data) return null; // Added safe null guard
    return data.trim();
}
module.exports = { parseInput };