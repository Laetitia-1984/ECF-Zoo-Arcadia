import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route ("/", "Accueil", "/pages/home.html"),
    new Route ("/habitats", "Les habitats", "/pages/habitats.html"),
    new Route ("/savane", "La savane", "/pages/savane.html"),
    new Route ("/connexion", "Connexion ", "/pages/connexion.html", "/js/auth/connexion.js"),
    new Route ("/homeAdmin", "Accueil Administrateur ", "/pages/admin/homeAdmin.html"),

    
];


//Le titre s'affiche comme ceci: Route.titre - websitename
export const websiteName = "Zoo Arcadia";