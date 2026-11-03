# Anders Seguros

Sistema web de gestión de clientes y pólizas para Anders Seguros, agencia de seguros de Coyhaique.

Proyecto del ramo Taller de Diseño y Desarrollo de Soluciones (TIHI42), INACAP Coyhaique.

## Requisitos

- [Node.js](https://nodejs.org) versión LTS (22 o 24)
- [Git](https://git-scm.com)
- [VS Code](https://code.visualstudio.com) con las extensiones **Vue - Official** y **Tailwind CSS IntelliSense**

Para revisar que Node y Git estén instalados:

```bash
node -v
git --version
```

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/felipedev98/anders-seguros.git
   cd anders-seguros
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el proyecto en modo desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Prueba la versión de producción en local |

## Tecnologías

- [Nuxt 4](https://nuxt.com) (Vue 3 + TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide](https://lucide.dev) para los iconos

## Notas

- Por ahora los datos son de prueba y están en `app/data/mock.ts`. Las páginas los obtienen a través de los composables de `app/composables/`, que más adelante se conectarán a Supabase.
- El login todavía no valida usuarios: cualquier correo y contraseña permiten entrar.
