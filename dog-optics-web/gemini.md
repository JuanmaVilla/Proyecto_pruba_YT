# gemini.md — Constitución del Proyecto: Dog Optics Web

> Este archivo es LEY. Toda arquitectura, esquema y regla vive aquí.
> Solo se actualiza cuando cambia un esquema, se agrega una regla o la arquitectura se modifica.

---

## 1. Identidad del Proyecto

| Campo | Valor |
|-------|-------|
| Proyecto | Landing Page — Óptica para Perros |
| Tipo | Single-Page Website (SPA) |
| Stack | React + Tailwind CSS |
| Objetivo | Captar leads y agendar citas médicas para perros |
| Público | Dueños de perros amantes y con poder adquisitivo alto |

---

## 2. Identidad de Marca

| Campo | Valor |
|-------|-------|
| Nombre del negocio | [PENDIENTE — ver Preguntas de Descubrimiento] |
| Tono | Premium pero cercano, tierno, cálido |
| Estilo visual | Playful & Soft |
| Diferenciador | Únicos en hacer esto (lentes médicos y de sol para perros) |
| CTA principal | "Reserva tu cita" |

---

## 3. Paleta de Colores (Propuesta — sujeta a aprobación)

| Token | Color | Uso |
|-------|-------|-----|
| `primary` | `#C084FC` (púrpura suave) | Botones CTA, acentos |
| `primary-dark` | `#9333EA` | Hover states |
| `secondary` | `#FDE68A` (amarillo cálido) | Acentos secundarios |
| `bg-base` | `#FAFAF9` | Fondo base |
| `bg-section` | `#F5F0FF` | Fondos de sección alternos |
| `text-primary` | `#1C1C1E` | Títulos |
| `text-muted` | `#6B7280` | Subtítulos, cuerpo |

---

## 4. Tipografía

| Rol | Fuente | Peso |
|-----|--------|------|
| Display / Headlines | `Plus Jakarta Sans` | 700, 800 |
| Body | `Plus Jakarta Sans` | 400, 500 |
| Accent / Labels | `Plus Jakarta Sans` | 600 |

---

## 5. Esquema de Datos — Secciones (Content Schema)

```json
{
  "hero": {
    "headline": "string",
    "subheadline": "string",
    "cta_text": "string",
    "cta_url": "string (booking link o #contact)",
    "visual": "imagen/ilustración de perro con lentes"
  },
  "social_proof": {
    "metrics": [{ "value": "string", "label": "string" }],
    "trust_badges": ["string"]
  },
  "features": [
    { "icon": "string", "title": "string", "description": "string" }
  ],
  "how_it_works": [
    { "step": "number", "title": "string", "description": "string" }
  ],
  "testimonials": [
    {
      "name": "string",
      "dog_name": "string",
      "text": "string",
      "avatar": "string (url o placeholder)"
    }
  ],
  "faq": [
    { "question": "string", "answer": "string" }
  ],
  "contact": {
    "form_fields": ["nombre", "email", "telefono", "nombre_perro", "mensaje"],
    "booking_url": "string [PENDIENTE]",
    "whatsapp": "string [PENDIENTE]",
    "email": "string [PENDIENTE]"
  },
  "footer": {
    "business_name": "string [PENDIENTE]",
    "tagline": "string",
    "social_links": { "instagram": "string", "facebook": "string" },
    "nav_links": ["string"]
  }
}
```

---

## 6. Invariantes Arquitectónicos

1. **Single-file de contenido**: Todo el copy vive en `src/data/content.js` — nunca hardcodeado en los componentes.
2. **Componentes atómicos**: Cada sección es su propio componente en `src/components/sections/`.
3. **Un solo punto de entry de estilos**: `tailwind.config.js` define los tokens de color y fuente.
4. **Sin dependencias innecesarias**: Solo `react`, `tailwindcss`, fuentes de Google, y `lucide-react` para íconos.
5. **Mobile-first**: Todo el CSS usa breakpoints `sm:`, `md:`, `lg:` en ese orden.

---

## 7. Reglas de Comportamiento del Sistema

- **NO** usar lorem ipsum en ningún texto.
- **NO** usar librerías de animación externas (solo Tailwind `transition`, `animate`, `@keyframes` custom en CSS).
- **NO** conectar a backend real hasta que las integraciones estén confirmadas.
- El formulario de contacto usa `mailto:` o un endpoint `[PENDIENTE]` hasta fase Link.
- Todos los CTAs apuntan a `#reserva` o a la URL de booking confirmada.

---

## 8. Estado Actual

| Fase BLAST | Estado |
|-----------|--------|
| Blueprint | 🟡 En progreso — Preguntas de Descubrimiento pendientes |
| Link | ⏳ Pendiente |
| Architect | ⏳ Pendiente |
| Stylize | ⏳ Pendiente |
| Trigger | ⏳ Pendiente |

---

*Última actualización: 2026-03-31 — Protocolo 0 completado*
