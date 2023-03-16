

(async () => {
    try {
        const response = await axios.post("http://127.0.0.1:3000/api/stuff",{
            name: "Rower elektryczny źćąŹĆĘ",
            description: "Kross Hexagon Boost 1.0 522 Wh"
        });
    } catch (error) {
        console.log(`Brak komunikacji z serwerem ${error}`)
    }
})();