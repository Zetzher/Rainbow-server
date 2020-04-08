# Rainbow

### Description

Rainbow es una app que proporciona al usuario información sobre entornos de ocio LGBT en la ciudad en el/la que se encuentra, así como eventos en los que puede participar y un chat para poder hablar con personas de su preferencia.


### User Stories

- Login: Permite al usuario loguearse para poder acceder al contenido Chat y poder asistir en un evento.

- Logout: Permite al usuario desconectarse.

- Register: Permite al usuario registrarse.

- Eventos: El usuario podrá asistir e informarse de los eventos que ocurren en la ciudad.

- Chat: El usuario podrá hablar con personas.

- Ocio: Proporcionará información de los locales que hay en la ciudad.

- Perfil: El usuario podrá personalizar una página con sus datos, así como su tribu.


### Backlog
Chat


### Client
#### Routes

| Path | Componente |Método | Permisos | Comportamiento |
|-----------|------------|-----------|-----------|--------------|
| / | Home page | - | usuario publico | pagina principal |
| /signup | SignUp| POST | publico |  Página de registro |
| /login | LogIn | POST | publico | Página de accceso |
| /profile/:id | Profile | GET | Sólo usuarios | Perfil del usuario |
| /profile/:id/edit | EditProfile | POST | Sólo usuarios | Formulario para modificación de datos del usuario
| /ocio | Ocio | GET | Público | Página donde se visualizan los lugares de ocio |
| /eventos | Eventos | GET | Sólo usuarios | Página donde se ven los eventos disponibles |
| /eventos/:id/ | EventoId | GET | Sólo usuarios | Página con detalles de el evento clicado, dónde el usuario podrá darle al botón asistir |
|/eventos/create | CreateEvent | POST | Sólo usuarios | Página para crear eventos |
|/eventos/edit | EditEvent | POST | Sólo usuarios | Página para editar eventos |
| /eventos/delete | DeleteEvent | POST | Sólo usuarios | Página para borrar eventos |
| /chat | Chat | Sólo usuarios | Página de chat para hablar con otros usuarios |

### Models
```
user ={
nombre: String,
apellido: String,
edad: Number,
email:{
type: String,
required: true,
unique:true
},
password:{
type:String, 
unique:true, 
requiered:true,
}
photo_url: String,
eventos:{type: Schema.Types.ObjectId, ref: evento}
}

evento ={
nombre: String,
descripcion: String,
lugar: string,
asistencia:{type: Schema.Types.ObjectId, ref: user}
}
```
# Links

## Trello 

[Link a trello ](https://trello.com/b/CS2s4NrI/proyecto-lgbt)

## Git Repo

[Link a GitHun](https://github.com/Zetzher/Rainbow)

## WireFrames

[Link a los Wireframes](https://www.figma.com/file/aNTByGhw9N6sDBLVLluKA3/Rainbow-BCN?node-id=0%3A1)

## Slides

## Agradecimientos

Pablo Grau - TA

