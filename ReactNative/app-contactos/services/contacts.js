const MAX_ELEMENTS = 10

const nombres = ['Carlos', 'Paula', 'Lionel', 'Elena', 'Mateo', `Enzo`]
const apellidos = ['Messi', 'Perez', 'Romero', 'Gomez', 'Di Maria', `Martinez`]

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const generaNombre = () => `${nombres[random(0, nombres.length -1 )]}`
const generaApellido = () => `${apellidos[random(0, apellidos.length -1 )]}`


//Telefono seria: 55-555-555
const generarTelefono = () => `${random(10,99)}-${random(100,999)}-${random(100,999)}`

const crearContacto = () => {
    return {
      fullName: `${generaApellido()}, ${generaNombre()}`,
      phone: generarTelefono(),
      age: random(18, 99)
    }
}


const contactos = Array.from({
  length: MAX_ELEMENTS
}, crearContacto).map((item, index) => {
  return {
    ...item, 
    id: index
  }
})

const groupByLetter = contactos.reduce((grupo, contacto) => {
  
  //console.log(contacto, contacto.fullName[0])

  const letra = contacto.fullName[0]

  // Operador split para genera y/o modificar objetos iterables
  return {
    ...grupo,
    // Para cada iteración confirmo un nuevo contacto segun la primera letra.

    //[...(grupo[letra])] => Hago un spreed del array supuestamente existente en grupo[letra] 
    // Si no existe algo en grupo[letra], es decir NO hay array aun, se lo creo
    // utilizando el operador || []. 
    [letra]: [...(grupo[letra] || [] ), contacto]
  }

}, {})

const getContacts = () => {

  

  // Se supone que hace una llamada al back para traer contactos...
  return new Promise((resolve, reject) => {
    return resolve(contactos)
  })
}

const getContactsGroupByLetter = () => {

  

  // Se supone que hace una llamada al back para traer contactos...
  return new Promise((resolve, reject) => {
    return resolve(groupByLetter)
  })
}

const saveContact = (contact) => {
  //se supone que hace una llamada al back pasandole este contacto 
  // para que lo guarde en la lista

  return new Promise((resolve, reject) => {
    contactos.push(contact)
    return resolve(contact)
  })
}

const getContact = (id) => {
  //se supone que hace una llamada al back pasandole un ID 

  return new Promise((resolve, reject) => {
    const contact = contactos.find(item => item.id === id)
    return resolve(contact)
  })
}




export default {
  getContacts,
  getContactsGroupByLetter,
  saveContact,
  getContact
};