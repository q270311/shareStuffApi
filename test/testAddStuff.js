

(async () => {
    try {
        const response = await axios.post("http://localhost:3000/api/stuff",{
            name: "Przyczepka samochodowa",
            description: "Przyczepka samochodowa. Max. ładowność 1000kg"
        });
    } catch (error) {
        console.log(`Brak komunikacji z serwerem ${error}`)
    }
})();