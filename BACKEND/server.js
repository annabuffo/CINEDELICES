import express from "";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Démarrage du port sur http://localhost:${PORT}`)
});
