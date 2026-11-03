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

## Cómo enviar cambios

No se sube nada directo a `main`. Cada tarea se trabaja en una rama propia y se envía como pull request para que el profesor la revise.

1. Antes de empezar una tarea, actualizar `main`:

   ```bash
   git checkout main
   git pull
   ```

2. Crear una rama con un nombre que describa la tarea:

   ```bash
   git checkout -b agregar-cliente-modal
   ```

3. Trabajar y guardar los cambios con commits:

   ```bash
   git add .
   git commit -m "Agrega modal para crear clientes"
   ```

4. Subir la rama a GitHub:

   ```bash
   git push -u origin agregar-cliente-modal
   ```

5. En GitHub, presionar **Compare & pull request** y crear el pull request hacia `main`.

6. Esperar la revisión. Si hay correcciones, hacerlas en la misma rama y repetir el `git add`, `git commit` y `git push` (ya sin `-u origin ...`). El pull request se actualiza solo.

Cuando el pull request se aprueba y se integra, volver al paso 1 para la siguiente tarea.

## Tecnologías

- [Nuxt 4](https://nuxt.com) (Vue 3 + TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide](https://lucide.dev) para los iconos

## Notas

- Por ahora los datos son de prueba y están en `app/data/mock.ts`. Las páginas los obtienen a través de los composables de `app/composables/`, que más adelante se conectarán a Supabase.
- El login todavía no valida usuarios: cualquier correo y contraseña permiten entrar.
