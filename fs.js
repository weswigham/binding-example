export let readFile = function() { console.log("read a file"); }

export default Object.defineProperties({}, {
    readFile: {
        get: () => readFile,
        set: v => readFile = v,
    }
});