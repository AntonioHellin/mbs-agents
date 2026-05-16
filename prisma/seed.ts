import { PrismaClient } from "../src/lib/generated";

const prisma = new PrismaClient();

const products = [
  {
    name: "I ❤️ Coding",
    slug: "i-love-coding",
    description: "La clásica taza para los que viven y respiran código. Perfecta para empezar el día con una dosis de amor por la programación.",
    price: 14.99,
    imageUrl: "love-coding",
    category: "humor",
    featured: true,
  },
  {
    name: "It works on my machine",
    slug: "it-works-on-my-machine",
    description: "La frase más famosa del desarrollo de software. Ahora en formato taza para que tus compañeros de equipo la recuerden siempre.",
    price: 15.99,
    imageUrl: "works-on-machine",
    category: "humor",
    featured: true,
  },
  {
    name: "There's no place like 127.0.0.1",
    slug: "no-place-like-localhost",
    description: "Para los que se sienten más seguros en localhost. Una taza que todo desarrollador backend debería tener.",
    price: 13.99,
    imageUrl: "localhost",
    category: "sistemas",
    featured: true,
  },
  {
    name: "404: Sleep not found",
    slug: "404-sleep-not-found",
    description: "Cuando estás tan metido en el código que el sueño es un recurso inexistente. Ideal para los que programan hasta tarde.",
    price: 14.99,
    imageUrl: "sleep-not-found",
    category: "humor",
    featured: false,
  },
  {
    name: "Sudo make me a coffee",
    slug: "sudo-make-me-coffee",
    description: "Si solo con sudo pudieras hacer café... Bueno, al menos puedes tenerlo en tu taza. Para los amantes de Linux y la cafeína.",
    price: 15.99,
    imageUrl: "sudo-coffee",
    category: "sistemas",
    featured: true,
  },
  {
    name: "JavaScript: The Good Parts",
    slug: "javascript-good-parts",
    description: "Una taza que contiene solo las partes buenas de JavaScript. Spoiler: la taza es bastante pequeña.",
    price: 16.99,
    imageUrl: "js-good-parts",
    category: "lenguajes",
    featured: false,
  },
  {
    name: "Python Zen",
    slug: "python-zen",
    description: "Beautiful is better than ugly. Una taza elegante para los que escriben Python con estilo.",
    price: 14.99,
    imageUrl: "python-zen",
    category: "lenguajes",
    featured: true,
  },
  {
    name: "Git Gud",
    slug: "git-gud",
    description: "Porque todos hemos tenido que aprender git a base de errores. Una taza para los que sobrevivieron a un merge conflict.",
    price: 13.99,
    imageUrl: "git-gud",
    category: "herramientas",
    featured: false,
  },
  {
    name: "Rust Ferris",
    slug: "rust-ferris",
    description: "La mascota oficial de Rust, el cangrejo Ferris, en una taza. Para los que prefieren sistemas seguros y rápidos.",
    price: 17.99,
    imageUrl: "rust-ferris",
    category: "lenguajes",
    featured: false,
  },
  {
    name: "Full Stack Developer",
    slug: "full-stack-developer",
    description: "Una taza que cubre tanto el frontend como el backend. Como tú, versátil y siempre listo para cualquier desafío.",
    price: 15.99,
    imageUrl: "full-stack",
    category: "humor",
    featured: true,
  },
];

async function main() {
  console.log("Seeding database...");

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  console.log(`Seeded ${products.length} products`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
