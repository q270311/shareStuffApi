

(async () => {
    try {
        const response = await axios.post("https://sharestuff.onrender.com/api/stuff",{
            name: "Namiot 3-osobowy",
            description: "Namiot 3-osobowy z tropikiem"
        });
    } catch (error) {
        console.log(`Brak komunikacji z serwerem ${error}`)
    }
})();