import Home from './SRC/PAGES/Home.svelte';
import Legal from './SRC/PUBLIC/Legal.svelte':
import Contact from './SRC/PUBLIC/Contact.svelte':
import Login from './SRC/PUBLIC/Login.svelte':
import Privacy from './SRC/PUBLIC/Privacy.svelte':
import Recipe from './SRC/PUBLIC/Recipe.svelte':
import RecipeNew from './SRC/PUBLIC/RecipeNew.svelte':
import Register from './SRC/PUBLIC/Register.svelte':

export const routes = {
    '/':  Home,
    '/legal': Legal,
    '/contact': Contact,
    '/login': Login,
    '/privacy': Privacy,
    '/recipe': Recipe,
    '/recipe/new':RecipeNew,
    '/register': Register
};

