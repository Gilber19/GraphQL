# Proyecto NestJS con GraphQL, Prisma y PostgreSQL

Este es un proyecto sencillo de NestJS que utiliza GraphQL como API, Prisma como ORM y PostgreSQL como base de datos.

## 🚀 Características

- **NestJS**: Framework progresivo de Node.js
- **GraphQL**: API con Apollo Server
- **Prisma**: ORM moderno para TypeScript
- **PostgreSQL**: Base de datos relacional
- **Docker**: Contenedorización con Docker Compose

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Docker y Docker Compose (para ejecutar con contenedores)

## 🛠️ Instalación

### Opción 1: Desarrollo Local

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar PostgreSQL con Docker**
```bash
docker-compose up postgres -d
```

3. **Configurar variables de entorno**
Copia el archivo `.env.example` a `.env` y ajusta las variables si es necesario:
```bash
cp .env.example .env
```

4. **Generar el cliente de Prisma**
```bash
npm run prisma:generate
```

5. **Ejecutar migraciones**
```bash
npm run prisma:migrate
```

6. **Iniciar la aplicación en modo desarrollo**
```bash
npm run start:dev
```

### Opción 2: Docker Compose (Todo en contenedores)

1. **Iniciar todo con Docker Compose**
```bash
docker-compose up
```

Esto iniciará tanto PostgreSQL como la aplicación NestJS.

## 🎮 Uso

Una vez que la aplicación esté corriendo, puedes acceder a:

- **GraphQL Playground**: http://localhost:3000/graphql

### Ejemplos de Queries y Mutations

#### Crear un usuario
```graphql
mutation {
  createUser(createUserInput: {
    email: "usuario@example.com"
    name: "Juan Pérez"
  }) {
    id
    email
    name
    createdAt
  }
}
```

#### Obtener todos los usuarios
```graphql
query {
  users {
    id
    email
    name
    createdAt
  }
}
```

#### Obtener un usuario por ID
```graphql
query {
  user(id: 1) {
    id
    email
    name
    createdAt
  }
}
```

#### Actualizar un usuario
```graphql
mutation {
  updateUser(updateUserInput: {
    id: 1
    name: "Juan Actualizado"
  }) {
    id
    email
    name
    updatedAt
  }
}
```

#### Eliminar un usuario
```graphql
mutation {
  removeUser(id: 1) {
    id
    email
    name
  }
}
```

## 🗄️ Base de Datos

### Prisma Studio

Para visualizar y editar los datos de manera gráfica:
```bash
npm run prisma:studio
```

### Crear nuevas migraciones
Después de modificar el schema de Prisma:
```bash
npm run prisma:migrate
```

## 📁 Estructura del Proyecto

```
├── prisma/
│   └── schema.prisma          # Schema de la base de datos
├── src/
│   ├── prisma/
│   │   └── prisma.service.ts  # Servicio de Prisma
│   ├── users/
│   │   ├── dto/               # Data Transfer Objects
│   │   ├── entities/          # Entidades GraphQL
│   │   ├── users.module.ts
│   │   ├── users.resolver.ts  # Resolver GraphQL
│   │   └── users.service.ts   # Lógica de negocio
│   ├── app.module.ts
│   └── main.ts
├── .env                       # Variables de entorno
├── docker-compose.yml         # Configuración Docker
├── Dockerfile                 # Imagen Docker de la app
└── package.json
```

## 🔧 Scripts Disponibles

- `npm run start` - Iniciar la aplicación
- `npm run start:dev` - Iniciar en modo desarrollo (watch mode)
- `npm run start:prod` - Iniciar en modo producción
- `npm run build` - Compilar el proyecto
- `npm run prisma:generate` - Generar el cliente de Prisma
- `npm run prisma:migrate` - Ejecutar migraciones
- `npm run prisma:studio` - Abrir Prisma Studio

## 🐳 Docker

### Solo Base de Datos
```bash
docker-compose up postgres -d
```

### Aplicación Completa
```bash
docker-compose up
```

### Reconstruir la imagen
```bash
docker-compose up --build
```

### Detener los contenedores
```bash
docker-compose down
```

## 📝 Notas

- Los errores de TypeScript que aparecen antes de instalar las dependencias son normales
- Asegúrate de que el puerto 5432 (PostgreSQL) y 3000 (aplicación) estén disponibles
- La base de datos se persiste en un volumen de Docker para no perder datos

## 🤝 Contribuir

Este es un proyecto educativo. Siéntete libre de modificarlo según tus necesidades.

## 📄 Licencia

MIT
