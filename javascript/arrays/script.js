const propiedades_alquiler = [
  {
    nombre: "Departamento en el centro",
    src: "https://i0.wp.com/chocale.cl/wp-content/uploads/2019/03/loft-departamento.jpg?fit=1000%2C666&ssl=1",
    descripcion: "Cómodo departamento en pleno centro",
    ubicacion: "Ciudad Capital",
    habitaciones: 2,
    baños: 2,
    costo: 1000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento en la playa",
    src: "https://i0.wp.com/chocale.cl/wp-content/uploads/2019/03/loft-departamento.jpg?fit=1000%2C666&ssl=1",
    descripcion: "Cómodo departamento en pleno centro",
    ubicacion: "Ciudad Capital",
    habitaciones: 2,
    baños: 1,
    costo: 1000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento en la playa",
    src: "https://i0.wp.com/chocale.cl/wp-content/uploads/2019/03/loft-departamento.jpg?fit=1000%2C666&ssl=1",
    descripcion: "Cómodo departamento en pleno centro",
    ubicacion: "Ciudad Capital",
    habitaciones: 2,
    baños: 1,
    costo: 1000,
    smoke: true,
    pets: true,
  },
];

const propiedades_venta = [
  {
    nombre: "Casa en las colinas",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/384873727.jpg?k=27dae42bdf0c768749e4d00f3e12645675f4c9bfe85a974a71d25f1e529d58ae&o=&hp=1",
    descripcion: "Amplia casa con vista panorámica y jardín.",
    ubicacion: "Ciudad Montaña",
    habitaciones: 4,
    baños: 3,
    costo: 250000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Ático en el centro",
    src: "https://1557540.fs1.hubspotusercontent-na1.net/hubfs/1557540/Harmonia%20Elevated%20Apartments/Depa%20Harmonia%20Web%201-1.jpg",
    descripcion: "Moderno ático con terraza privada y vistas urbanas.",
    ubicacion: "Ciudad Capital",
    habitaciones: 3,
    baños: 2,
    costo: 350000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa de campo",
    src: "https://www.hogares.cl/wp-content/uploads/2018/05/losleones-render.jpg",
    descripcion: "Casa rústica con amplio terreno y huerto.",
    ubicacion: "Zona Rural",
    habitaciones: 5,
    baños: 2,
    costo: 200000,
    smoke: false,
    pets: true,
  },
];

const mostrarPropiedades = (array, containerId) => {
  const contenedor = document.getElementById(containerId);
  contenedor.innerHTML = "";

  array.forEach((propiedad) => {
    contenedor.innerHTML += `
        
          <div class="card col-md-2 col-sm-1" style="width: 18rem;">
            <img src="${
              propiedad.src
            }" class="card-img-top object-fit-cover" alt="${propiedad.nombre}">
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><small>${propiedad.ubicacion}</small></p>
              <p><small>${propiedad.habitaciones} Habitaciones | ${
      propiedad.baños
    } Baños</small></p>
              <p class="${
                propiedad.smoke ? "text-success" : "text-danger"
              }"><small>${
      propiedad.smoke ? "Permitido fumar" : "No está permitido fumar"
    }</small></p>
              <p class="${
                propiedad.pets ? "text-success" : "text-danger"
              }"><small>${
      propiedad.pets
        ? "Permitidas las mascotas"
        : "No están permitidas las mascotas"
    }</small></p>
            </div>
          </div>
        
      `;
  });
};
