const settings = {
  "name": "spadefensoriaambiental",
  "state": {
    "frontity": {
      "url": "https://defensoriaambiental.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nosotros",
              "/quienes-somos/"
            ],
            [
              "Comunidad",
              "/comunidades/"
            ],
            [
              "Centro de monitoreo",
              "/alianzas/"
            ],
            [
              "Contenidos",
              "/contenidos/"
            ],
            [
              "Contacto",
              "/contacto/"
            ],
            [
              "Donar",
              "/donar/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://defensoriaambiental.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
