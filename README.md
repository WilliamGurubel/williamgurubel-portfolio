# williamgurubel-portfolio

My personal portfolio showcasing web development, UX/UI and data visualization projects.

## Estructura del proyecto

```
williamgurubel-portfolio/
├── css/
│   └── style.css       # Estilos con metodología BEM (header) y tipografía fluida
├── js/
│   └── menu.js         # Lógica del menú responsivo
└── index.html
```

## Cambios aplicados

### 1. Menú responsivo con metodología BEM

El header fue refactorizado para usar [BEM](https://getbem.com/) (Block Element Modifier), una convención de nomenclatura CSS que mejora la mantenibilidad y evita conflictos de estilos.

**Bloque:** `.header`

| Clase | Tipo | Descripción |
|---|---|---|
| `.header__brand` | Elemento | Contenedor del logo y nombre |
| `.header__title` | Elemento | Título "GWS" |
| `.header__tagline` | Elemento | Subtítulo "Gurubel Web Solutions" |
| `.header__toggle` | Elemento | Botón hamburguesa (solo móvil) |
| `.header__toggle-bar` | Elemento | Barras del icono hamburguesa |
| `.header__nav` | Elemento | Contenedor de navegación |
| `.header__menu` | Elemento | Lista de enlaces |
| `.header__menu-item` | Elemento | Ítem individual del menú |
| `.header__menu-link` | Elemento | Enlace de navegación |
| `.header--open` | Modificador | Estado activo cuando el menú móvil está abierto |

**Comportamiento:**
- **Móvil (< 768px):** menú oculto por defecto con overlay a pantalla completa. El botón hamburguesa se anima a una "X" al abrirse.
- **Desktop (≥ 768px):** menú horizontal visible de forma permanente. El botón hamburguesa se oculta.

### 2. Carpeta `js/` y script del menú

Se creó la carpeta `js/` para separar la lógica JavaScript del HTML. El archivo `js/menu.js` controla:

- Apertura y cierre del menú móvil mediante la clase `header--open`.
- Bloqueo del scroll del body (`no-scroll`) mientras el menú está abierto.
- Cierre automático al hacer clic en un enlace, al redimensionar la ventana a desktop o al presionar `Escape`.
- Atributos ARIA (`aria-expanded`, `aria-label`, `aria-controls`) para accesibilidad.

### 3. Tipografía fluida con unidades relativas

Se reemplazaron todos los `font-size` en píxeles por un sistema tipográfico moderno basado en `rem`, `clamp()` y variables CSS.

**Base fluida en `html`:**
```css
font-size: clamp(1rem, 0.943rem + 0.286vw, 1.125rem);
```
Escala la fuente base de 16px a 18px según el ancho del viewport y respeta las preferencias de tamaño del usuario.

**Escala tipográfica (`:root`):**

| Variable | Uso | Rango aproximado |
|---|---|---|
| `--font-size-xs` | Tags, badges | 12px |
| `--font-size-sm` | Etiquetas pequeñas | 13px |
| `--font-size-base-sm` | Texto secundario | 14px |
| `--font-size-base` | Cuerpo de texto | 16px |
| `--font-size-md` | Descripciones | 18px |
| `--font-size-lg` | Subtítulos, menú móvil | 18px → 22px |
| `--font-size-xl` | Títulos de sección | 24px → 32px |
| `--font-size-2xl` | Logo del header | 28px → 34px |
| `--font-size-display` | Título del hero | 32px → 56px |
| `--font-size-btn` | Texto de botones | 14px → 16px |

Los valores con `clamp()` escalan de forma continua entre un mínimo y un máximo sin necesidad de media queries adicionales para el tamaño de fuente.

### 4. Botones adaptativos

Los botones (`.btn-primary`, `.btn-secondary`) no tenían `font-size` definido, lo que causaba desbordamiento del texto en pantallas pequeñas.

**Cambios:**
- `font-size: var(--font-size-btn)` con escala fluida de 14px a 16px.
- `padding: 1em 1.75em` en unidades `em`, de modo que el padding escala proporcionalmente al tamaño de fuente.
- Bordes y `border-radius` convertidos a `rem`.
- En pantallas ≤ 479px, los botones se apilan en columna y ocupan el 100% del ancho disponible.

## Próximos pasos

- [ ] Aplicar BEM y diseño responsivo a la sección hero
- [ ] Aplicar BEM y diseño responsivo a la sección de proyectos
- [ ] Convertir paddings y márgenes restantes en píxeles a unidades relativas
