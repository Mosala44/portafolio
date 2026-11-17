// Fotos del carrusel de "Sobre mí". Reemplázalas por tus fotos
// (por ejemplo, guárdalas en public/fotos/ y usa url: '/fotos/mi-foto.jpg').

export const fotosPerfil = Array.from({ length: 5 }, (_, indice) => ({
  url: `https://picsum.photos/seed/perfil-${indice + 1}/600/750`,
  descripcion: `Foto personal ${indice + 1}`,
}))
