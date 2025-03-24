const translations = {
    fr: {
        welcome: "Sophie & Vicente",
        date: "09 août 2025",
        intro: "Nous sommes ravis de vous accueillir sur notre site de mariage. Retrouvez ici toutes les informations utiles pour le grand jour !",
        ceremony: "14h : Messe à l'Église Saint-Guénolé de Batz-sur-Mer",
        reception: "17h30 : Accueil au Château de Villeneuve",
        scheduleTitle: "Programme de la journée",
        mapLink: "Voir la carte des lieux",
        submitBtn: "Je confirme ma présence"
    },
    es: {
        welcome: "Sophie y Vicente",
        date: "9 de agosto de 2025",
        intro: "Estamos encantados de darles la bienvenida a nuestro sitio de boda. ¡Aquí encontrarán toda la información importante para el gran día!",
        ceremony: "14:00 - Misa en la Iglesia Saint-Guénolé de Batz-sur-Mer",
        reception: "17:30 - Recepción en el Château de Villeneuve",
        scheduleTitle: "Programa del día",
        mapLink: "Ver el mapa de los lugares",
        submitBtn: "Confirmo mi asistencia"
    }
};

function setLang(lang) {
    const t = translations[lang];
    document.getElementById('welcome').textContent = t.welcome;
    document.getElementById('date').textContent = t.date;
    document.getElementById('intro').textContent = t.intro;
    document.getElementById('ceremony').textContent = t.ceremony;
    document.getElementById('reception').textContent = t.reception;
    document.getElementById('schedule-title').textContent = t.scheduleTitle;
    document.getElementById('map-link').textContent = t.mapLink;
    document.getElementById('submit-btn').textContent = t.submitBtn;
}
