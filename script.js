document.getElementById('ouvrirBlocNote').addEventListener('click', function() {
    document.getElementById('blocNote').style.display = 'block'; // Ouvre le bloc-notes
    // Charge le texte sauvegardé
    document.getElementById('texteBlocNote').value = localStorage.getItem('blocNoteTexte') || '';
});

document.querySelectorAll('.fermerFenetre').forEach(function(element) {
    element.addEventListener('click', function() {
        this.parentNode.style.display = 'none'; // Ferme la fenêtre
    });
});

document.getElementById('sauvegarderBlocNote').addEventListener('click', function() {
    // Sauvegarde le texte dans le stockage local du navigateur
    localStorage.setItem('blocNoteTexte', document.getElementById('texteBlocNote').value);
    alert('Texte sauvegardé');
});

document.getElementById('ouvrirCalculatrice').addEventListener('click', function() {
    document.getElementById('calculatrice').style.display = 'block'; // Ouvre la calculatrice
});

document.getElementById('calculer').addEventListener('click', function() {
    var nombre1 = parseFloat(document.getElementById('nombre1').value);
    var nombre2 = parseFloat(document.getElementById('nombre2').value);
    var operation = document.getElementById('operation').value;
    var resultat;

    switch (operation) {
        case 'add':
            resultat = nombre1 + nombre2;
            break;
        case 'sub':
            resultat = nombre1 - nombre2;
            break;
        case 'mul':
            resultat = nombre1 * nombre2;
            break;
        case 'div':
            if (nombre2 != 0) {
                resultat = nombre1 / nombre2;
            } else {
                alert("Erreur : Division par zéro.");
                return;
            }
            break;
    }

    document.getElementById('resultat').textContent = 'Résultat : ' + resultat;
});


// Code pour redimensionner les fenêtres
document.querySelectorAll('.redimensionner').forEach(function(element) {
    element.addEventListener('mousedown', function(e) {
        var fenetre = this.parentNode;
        var startX = e.clientX;
        var startY = e.clientY;
        var startWidth = parseInt(document.defaultView.getComputedStyle(fenetre).width, 10);
        var startHeight = parseInt(document.defaultView.getComputedStyle(fenetre).height, 10);

        function redimensionner(e) {
            fenetre.style.width = startWidth + e.clientX - startX + 'px';
            fenetre.style.height = startHeight + e.clientY - startY + 'px';
        }

        function arreterRedimensionnement() {
            document.documentElement.removeEventListener('mousemove', redimensionner, false);
            document.documentElement.removeEventListener('mouseup', arreterRedimensionnement, false);
        }

        document.documentElement.addEventListener('mousemove', redimensionner, false);
        document.documentElement.addEventListener('mouseup', arreterRedimensionnement, false);
    }, false);
});
document.getElementById('ouvrirParametres').addEventListener('click', function() {
    document.getElementById('parametres').style.display = 'block'; // Ouvre les paramètres
    // Charge l'URL du fond d'écran sauvegardé
    document.getElementById('fondEcran').value = localStorage.getItem('fondEcran') || '';
});

document.getElementById('changerFondEcran').addEventListener('click', function() {
    var urlFondEcran = document.getElementById('fondEcran').value;
    // Change le fond d'écran et sauvegarde l'URL dans le stockage local du navigateur
    document.body.style.backgroundImage = 'url(' + urlFondEcran + ')';
    localStorage.setItem('fondEcran', urlFondEcran);
});

document.getElementById('ouvrirLecteurMusique').addEventListener('click', function() {
    document.getElementById('lecteurMusique').style.display = 'block';
});

document.querySelector('#lecteurMusique .fermerFenetre').addEventListener('click', function() {
    document.getElementById('lecteurMusique').style.display = 'none';
});

document.getElementById('audioFile').addEventListener('change', function() {
    var files = this.files;
    var file = URL.createObjectURL(files[0]); 
    document.getElementById('audioPlayer').src = file;
});
document.getElementById('ouvrirNavigateurFichier').addEventListener('click', function() {
    document.getElementById('navigateurFichier').style.display = 'block';
});

document.querySelector('#navigateurFichier .fermerFenetre').addEventListener('click', function() {
    document.getElementById('navigateurFichier').style.display = 'none';
});

document.getElementById('fichier').addEventListener('change', function() {
    document.getElementById('nomFichier').textContent = this.files[0].name;

    // Créer un nouvel objet FileReader
    var reader = new FileReader();

    // Définir le gestionnaire d'événements onload pour le lecteur de fichiers
    reader.onload = function(e) {
        // Le contenu du fichier est dans e.target.result
        document.getElementById('contenuFichier').textContent = e.target.result;
    }

    // Lire le fichier en tant que texte
    reader.readAsText(this.files[0]);
});

document.getElementById('ouvrirJeu').addEventListener('click', function() {
    document.getElementById('jeu').style.display = 'block';
});

document.querySelector('#jeu .fermerFenetre').addEventListener('click', function() {
    document.getElementById('jeu').style.display = 'none';
});

var choix = ['Pierre', 'Papier', 'Ciseaux'];

document.getElementById('pierre').addEventListener('click', function() {
    jouer('Pierre');
});
document.getElementById('papier').addEventListener('click', function() {
    jouer('Papier');
});
document.getElementById('ciseaux').addEventListener('click', function() {
    jouer('Ciseaux');
});

function jouer(choixJoueur) {
    var choixOrdinateur = choix[Math.floor(Math.random() * choix.length)];
    if (choixJoueur === choixOrdinateur) {
        document.getElementById('resultatJeu').textContent = "C'est un match nul ! L'ordinateur a également choisi " + choixOrdinateur + ".";
    } else if (
        (choixJoueur === 'Pierre' && choixOrdinateur === 'Ciseaux') ||
        (choixJoueur === 'Papier' && choixOrdinateur === 'Pierre') ||
        (choixJoueur === 'Ciseaux' && choixOrdinateur === 'Papier')
    ) {
        document.getElementById('resultatJeu').textContent = "Vous gagnez ! L'ordinateur a choisi " + choixOrdinateur + ".";
    } else {
        document.getElementById('resultatJeu').textContent = "Vous perdez ! L'ordinateur a choisi " + choixOrdinateur + ".";
    }
}

document.getElementById('ouvrirAppStore').addEventListener('click', function() {
    document.getElementById('appStore').style.display = 'block';
});


var appLinks = document.getElementsByClassName('appLink');
for (var i = 0; i < appLinks.length; i++) {
    appLinks[i].addEventListener('click', function() {
        window.open(this.dataset.url, '_blank');
    });
}

// Liste des applications disponibles
var applications = [
    {
        name: "Gmail",
        description: "Une application de messagerie électronique",
        icon: "gmail-icon.png",
        url: "https://www.gmail.com",
    },
    {
        name: "Poki",
        description: "Une application de jeux en ligne",
        icon: "poki-icon.png",
        url: "https://www.poki.com",
    },
    {
        name: "Qui-est ce?",
        description: "Un jeu de devinette en ligne",
        icon: "qui-est-ce-icon.png",
        url: "https://qui-est-ce.alternumerica.org",
    },
    // Ajoutez d'autres applications ici
];

// Afficher les applications dans la boutique
var appStore = document.getElementById("appStore");
var applicationsContainer = document.getElementById("applications");

applications.forEach(function (app) {
    var appElement = document.createElement("div");
    appElement.classList.add("application");

    var appIcon = document.createElement("img");
    appIcon.src = app.icon;
    appIcon.alt = "Icône de l'application";
    appElement.appendChild(appIcon);

    var appName = document.createElement("h3");
    appName.textContent = app.name;
    appElement.appendChild(appName);

    var appDescription = document.createElement("p");
    appDescription.textContent = app.description;
    appElement.appendChild(appDescription);

    var installButton = document.createElement("button");
    installButton.textContent = "Installer";
    installButton.addEventListener("click", function () {
        // Vous pouvez gérer l'installation ici, par exemple, en ouvrant l'URL de l'application
        window.open(app.url, "_blank");
    });
    appElement.appendChild(installButton);

    applicationsContainer.appendChild(appElement);
});

// Gestion de la fermeture de la fenêtre de la boutique d'applications
document.querySelector('#appStore .fermerFenetre').addEventListener('click', function() {
    appStore.style.display = 'none';
});

