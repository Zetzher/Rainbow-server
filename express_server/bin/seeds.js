const mongoose = require('mongoose');
const Ocio = require('../models/ocio');


mongoose.connect(`mongodb://localhost:27017/rainbow`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
Ocio.collection.drop();
// horario: "string",
// nombre: "string",
// descripcion: "string",
// calle: "string",
// image_url: "string",
// website: "string",
// type: ["pub", "sexshop"]

const ocio = [{
        horario: "En construcción",
        nombre: "OGB World",
        descripcion: "El mejor encuentro de sexo en grupo de la ciudad",
        calle: "En construcción",
        image_url: "https://www.layoproducciones.com/OGBWorld/wp-content/uploads/2018/09/OGB-World-Logo-movile-4.png",
        website: "https://www.layoproducciones.com/OGBWorld/?fbclid=IwAR0euxFdyXqUvQIzQCkcYPkZysCsUvgOWzpXIDf5OtKq04H5t2xCJILuokg",
        type: ["fetish", "bar", "sex"]
    },
    {
        horario: "De martes a jueves de 22:30 a 02:30. Viernes y sábado de 22:30 a 03:30. Domingo de 21:30 a 23:00/01:30",
        nombre: "Berlin Dark",
        descripcion: "Es un 'HARD & FETISH' bar para relacionarse con otros hombres libremente y sin otras limitaciones que el respeto a los demás.",
        calle: "Passatge de Prunera, 18 08004 Barcelona",
        image_url: "https://www.acegal.org/wp-content/uploads/2018/01/01-76.jpg",
        website: "http://www.berlindark.com/",
        type: ["fetish", "bar", "sex"]
    },
    {
        horario: "Martes: de 17:00 a 23:00. Miércoles: de 17:00 a 23:00. Jueves: de 17:00 a 23:00. Viernes: de 23:00 a 05:00. Sábado: de 23:00 a 05:00. Domingo: de 17:00 a 23:00",
        nombre: "Black Hole Barcelona",
        descripcion: "El fetish & sex club gay más grande de Barcelona donde podrás encontrar 400m2 de morbo y sexo en la ciudad.",
        calle: "C/ Sepúlveda, 81 08015 Barcelona",
        image_url: "http://www.blackholebcn.com/wp-content/uploads/2017/02/banner1-2.jpg",
        website: "http://www.blackholebcn.com/",
        type: ["pub", "fetish", "sex"]
    },
    {
        horario: "De lunes a viernes de 12:00 a 23:00. Sábado y domingo de 15:00 a 24:00",
        nombre: "Boyberry",
        descripcion: "Sex-shop gay con gran zona de cruising, distribuida en dos plantas.",
        calle: "Carrer de Calàbria, 96, 08015 Barcelona",
        image_url: "https://elevatedescapes.com/wp-content/uploads/2017/08/Boyberry-Header.jpg",
        website: "https://boyberry.com/barcelona/",
        type: ["sexshop"]
    },
    {
        horario: "Todos los días de 18:00 a 02:30/03:00",
        nombre: "Night Barcelona",
        descripcion: "Bar gay en el barrio de Eixample.",
        calle: "Carrer de la Diputació, 161, 08015 Barcelona",
        image_url: "https://d33hncv3fqajvb.cloudfront.net/ipe2UJw_vI5wq5qI1lcgwFEVtkc=/480x0/filters:quality(70)/location_photos/data/12893/original/barcelona-nightbarcelona-1513336144.jpg",
        website: "http://www.nightbarcelona.net/",
        type: ["pub"]
    },
    {
        horario: "Miercoles y jueves de 23:00 a 04:00. Viernes de 23:00 a 07:00. Sábado de 23:00 a 08:00. domingo de 23:00 a 04:00. Vísperas de festivo de 23:00 a 06:00",
        nombre: "Open Mind",
        descripcion: "Extenso club de cruising gay, distribuido en dos plantas. Club privado y todos los chicos que lo visitan están obligados a registrarse y hacerse socio, por un día, 3 meses o 1 año.",
        calle: "Carrer d'Aragó, 130, 08011 Barcelona",
        image_url: "https://www.openmindbcn.com/images/openmind/instalaciones/cache_2457955371.jpg",
        website: "http://www.openmindbcn.com/es",
        type: ["pub", "cruising"]
    },
    {
        horario: "Lunes y domingo de 18:00 a 00:00. Jueves de 18:00 a 00:00. Viernes y sábado de 22:00 a 05:00",
        nombre: "XManClub",
        descripcion: "Sexclub gay para la comunidad fetichista en Barcelona.",
        calle: "C/ Calabria 91, Barcelona",
        image_url: "https://xmanclub.es/wp-content/uploads/2019/05/thumb/A08-20190420_174846__600x300.jpg",
        website: "https://xmanclub.es/",
        type: ["pub", "sex", "fetish"]
    },
    {
        horario: "De lunes a jueves de 18:00 a 02:30. Viernes y sábado de 18:00 a 03:00",
        nombre: "Bacon Bear Bar",
        descripcion: "El nombre lo dice todo. Bacon Bear Bar es uno de los bares más populares de Barcelona, daddies, chubby men y sus amigos os están esperando.",
        calle: "Casanova 64 08011 Barcelona",
        image_url: "https://haztequeer.com/wp-content/uploads/2019/04/Bacon-Bear-Gay-Bar-Barcelona.jpg",
        website: "https://www.facebook.com/baconbearbar/",
        type: ["pub"]
    },
    {
        horario:"Todos los días 23:00 – 05:00/06:00",
        nombre: "Believe",
        descripcion: "Bar gay con pequeño escenario, drag hosts, espectáculos y karaoke.",
        calle: "Carrer de Balmes, 56, 08011 Barcelona",
        image_url: "data:image/jpeg;base64,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",
        website: "https://www.thebelieve.club/",
        type: ["pub"]
    },
    {
        horario: "Todos los días de 18:00 a 02:30. Viernes y sábado hasta de 18:00 a 03:00",
        nombre: "Botanic",
        descripcion: "Bar musical con varios rincones y con una pequeña terraza en el patio",
        calle: "Carrer de Muntaner, 64, 08011 Barcelona",
        image_url: "data:image/jpeg;base64,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",
        website: "https://www.facebook.com/BotanicBarCafe/",
        type: ["pub"]
    },
    {
        horario: "Todos los días excepto los martes de 17:00 a 01:00/02:00",
        nombre: "Boxer Café Bar",
        descripcion: "Nuevo café-bar en el barrio de Eixample con la esencia de Boxer",
        calle: "Carrer de la Diputació, 167, 169, 08011 Barcelona",
        image_url: "https://gaymap.info/users_content/users_images/images/920318fbb5852780b2b9f7e70e24e76d.jpg",
        website: "https://www.facebook.com/boxercafebar",
        type: ["pub"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "De martes a domingo de 18:00 a 21:30 y de 02:30 a 03:00",
        nombre: "BoysBar",
        descripcion: "Bar musical gay en el barrio de Eixample.",
        calle: "Carrer de la Diputació, 174, 08011 Barcelona",
        image_url: "https://lh3.googleusercontent.com/proxy/4A4SCqPYUi_13BnlSzgGqrB4WjbQKBgjSW0k4MSNzLcINzdp--C8ulhAUsrTdsUkC7CoMahPNYpRNwmZY3c7Ag4GJGxF2z1zTQ8b6L9wgOufDXpBtYENJHIT5PLyoM_Ns-0",
        website: "https://www.boysbarbcn.com/",
        type: ["pub"]
    },
    {
        horario: "De miércoles de 20:00 a 02:30. De jueves a sábado de 20:00 a 03:00. Domingo de 20:00 a 02:30",
        nombre: "Demn's",
        descripcion: "Intimo, neon-lit y energetico bar gay con cócteles.",
        calle: "Carrer del Consell de Cent, 257, 08011 Barcelona",
        image_url: "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/72898284_148631819821799_4703527447283343590_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=_VoMJRrJnK4AX9uTR8M&oh=fe5fa24e23647c85f8ef03d0db337937&oe=5EC4B5F0",
        website: "https://www.facebook.com/dmensbcn",
        type: ["pub"]
    },
    {
        horario: "Viernes y sábado de 23:00 a 03:30",
        nombre: "El Cangrejo, (Eixample)",
        descripcion: "Bar gay con pista de baile y música Pop internacional y español de las últimas décadas.",
        calle: "Carrer de Villarroel, 88, 08011 Barcelona",
        image_url: "https://scontent.fbcn10-1.fna.fbcdn.net/v/t1.0-9/15823654_1374428049246970_4053054315225863287_n.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_ohc=k_q4i1fpUmcAX8BrB82&_nc_ht=scontent.fbcn10-1.fna&oh=f1cd7bc97042266b4502a7ca42f280bb&oe=5EB3E798",
        website: "https://www.facebook.com/elcangrejoeixample/",
        type: ["pub"]
    },
    {
        horario: "Todos los días de 18:00 a 02:30/03:00",
        nombre: "El patio central",
        descripcion: "Bar de copas en el corazon del Eixample.",
        calle: "Carrer del Consell de Cent, 273, 08011 Barcelona",
        image_url: "https://u.tfstatic.com/restaurant_photos/151/418151/169/612/el-patio-central-vista-del-interior-bc1c7.jpg",
        website: "https://www.facebook.com/elpatiocentral",
        type: ["pub", "restaurante"]
    },
    {
        horario: "Todos los días de 18:00 a 02:30/03:00",
        nombre: "Gingin",
        descripcion: "Nuevo bar delante del Axel Hotel.",
        calle: "Carrer d'Aribau, 40, 08011 Barcelona",
        image_url: "https://pinksider.com/image/1244/0/0/w700h413/thumbnail.png?signature=o0dRI9Aiqu2nst-CGOejYgHdQF0=",
        website: "https://www.gingingaybar.com/",
        type: ["pub"]
    },
    {
        horario: "De jueves a sábado de 19:00 a 03:00. Domingo de 17:00 a 24:00",
        nombre: "La Casa de la Pradera",
        descripcion: "Local alternativo y queer-inclusivo en el barrio de Raval.",
        calle: "Carrer de les Carretes, 57, 08001 Barcelona",
        image_url: "https://d33hncv3fqajvb.cloudfront.net/9097Ac-VU_DZiFzJoP432z6_z_Y=/1600x0/filters:quality(70)/location_photos/data/13274/original/la-casa-de-la-pradera-1527254410.jpg",
        website: "https://m.facebook.com/lacasadelapraderaraval/",
        type: ["pub"]
    },
    {
        horario: "Todos los días de 16:00 a 02:00. Viernes y sábado hasta las 02:30",
        nombre: "La Chapelle",
        descripcion: "Pequeño bar gay, decorado con viejos objetos devocionales. Durante el día un café-bar relajado, por la noche muy concurrido con hombres de edad 30+.",
        calle: "Carrer de Muntaner, 67, 08011 Barcelona",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/47/44/e1/calido-ambiente.jpg",
        website: "https://www.facebook.com/pages/La-Chapelle/194590847332632?rf=569129056925013",
        type: ["pub"]
    },
    {
        horario: "De martes a jueves de 19:00 a 01:00/02:30. Viernes y sábado de 19:00 y 03:00. En verano a partir de las 21:00",
        nombre: "La Federica",
        descripcion: "Bar hipster-friendly en el barrio de Poble-sec.",
        calle: "Carrer de Salvà, 3, 08004 Barcelona",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/09/a8/d2/9b/la-federica.jpg",
        website: "https://www.facebook.com/barlafederica",
        type: ["pub"]
    },
    {
        horario: "Todos los días de 18:30 a 02:30/03:00. Viernes y sábado hasta las 03:00/03:30",
        nombre: "Madame Jasmine",
        descripcion: "Bar queer inclusivo, ubicado en el barrio de Raval.",
        calle: "Rambla del Raval, 22, 08001 Barcelona",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    },
    {
        horario: "string",
        nombre: "string",
        descripcion: "string",
        calle: "string",
        image_url: "string",
        website: "string",
        type: ["pub", "sexshop"]
    }

]


Ocio.create(ocio, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${ocio.length} locales`)
    mongoose.connection.close();
});