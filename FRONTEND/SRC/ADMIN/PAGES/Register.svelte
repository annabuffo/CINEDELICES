
<script>
    import svelte from "svelte";
    import { DataType } from '..'
</script>
<div class="container-register">
    <h2 class="title-register">INSCRIPTION</h2>
    <form class="form_register" action="inscription" method="post">
        <label for="nom">Nom d'utilisateur</label>
        <input type="text" id="nom" name="user_nom" required />

        <label for="email">Email</label>
        <input type="text" id="email" name="user_email" required />

        <label for="password">Mot de passe</label>
        <input type="text" id="" name="" required />

        <label for="password">Confirmation mot de passe</label>
        <input type="text" id="" name="" required />

        <button class="button_form_register" type="submit">Inscription</button>
    </form>
    <p>
        Vous avez déjà un compte ?<a href="/connexion.html">Connectez-vous</a>
    </p>
</div>


<style>
    .container-register {
    background-color: rgb(6, 6, 48);
    width: 90%;
    padding: 20px;
    max-width: 500px;
    border-radius: 8px;
    margin: 60px auto;
    border: 1px solid grey;
}

.title-register {
    background-color: rgb(6, 6, 48);
    color: white;
    text-align: center;
}

.container-register label {
    color: #aaa;
    background-color: rgb(6, 6, 48);
}


.container-register input {
    width: 100%;
    padding: 10px;
    margin: 20px 0 20px;
    border: 1px solid grey;
    border-radius: 2px;
    background-color: rgb(12, 12, 78);
    color: white;
}

.form_register label {
    text-align: center;
    flex-direction: column;
}

.button_form_register {
    flex-direction: column;
    display: flexbox;
    background-color: #e94560;
    border: #d4af37;
    width: 100%;
}

button {
    padding: 10px;
    background: #d4af37;
    border: none;
}


p {
    color: #aaa;
    text-align: center;
    font-size: 13px;
}

</style>