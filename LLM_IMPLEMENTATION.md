# LLM Implementation Checklist — The Tooth Boutique

## Contexto

AEO (Answer Engine Optimization) y GEO (Generative Engine Optimization) es optimizar el sitio para que LLMs y answer engines (ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews) descubran, entiendan correctamente, y citen a The Tooth Boutique cuando alguien pregunta algo como "¿cuál es el mejor ortodoncista en San Salvador?". A diferencia del SEO tradicional, aquí no se compite por posición en una lista de links — se compite por ser la fuente que el modelo decide citar o parafrasear directamente en su respuesta.

## Datos confirmados (fuente de verdad — no inventar, no modificar sin confirmación del cliente)

- Fecha de fundación: 2020
- Teléfono: +503 7905 6000
- Universidad de maestría de la Dra. Melissa Reneé: Universidad Francisco Marroquín, Guatemala
- Frecuencia de controles confirmada por la clínica: Invisalign — normalmente cada 4 semanas, ocasionalmente cada 6, rara vez más. Brackets — aproximadamente cada 4 semanas, igual para todos los tipos (metálicos, cerámicos, autoligados), no varía por tipo.
- Costo de la evaluación inicial: $65 (incluye escaneo 3D, fotos extraorales e intraorales, diagnóstico y entrega del plan de tratamiento). Radiografías adicionales: $20 cada una. Los precios de tratamiento (Invisalign, brackets, blanqueamiento) NO se publican como dato fijo — varían por caso; el sitio siempre remite a la evaluación de $65 para cotización exacta.
- /careers (unete.thetoothboutique.com) y /review (review.thetoothboutique.com) son subdominios en el mismo proyecto Vercel, ruteados vía middleware.ts según el header Host. review.thetoothboutique.com es un review-gating funnel: 4-5 estrellas redirige a Google (g.page/r/.../review), 1-3 estrellas captura el comentario en un formulario interno vía webhook n8n sin publicarlo. Ambas páginas ya tienen noindex, nofollow explícito — correctamente excluidas de indexación. No requieren ninguna acción de sitemap, robots.txt, ni llms.txt. Cerrado.

## Checklist de implementación

- [x] 1. robots.txt explícito para bots de IA (GPTBot, ClaudeBot, PerplexityBot, etc.) — HECHO. `public/robots.txt` con bloques explícitos por bot.
- [x] 2. Crear llms.txt con datos confirmados — HECHO. `public/llms.txt` creado.
- [x] 3. Agregar foundingDate + founder al LocalBusiness schema (index.html) — HECHO.
- [x] 4. Enriquecer employee Person (Dra. Melissa) con alumniOf + hasCredential — HECHO. Texto fuente citado de src/components/DraMelissa.tsx:83,92 — credentialCategory usa "Máster en Ortodoncia" literal, sin inventar año de graduación ni nombre de programa distinto.
- [x] 5. Agregar Speakable schema a las secciones FAQ — HECHO. `id="faq"` en los 4 componentes FAQSection.tsx (home, invisalign, brackets, blanqueamiento), y `speakable: {cssSelector: ["#faq"]}` dentro del bloque FAQPage en los 4 HTML.
- [x] 6. Agregar HowTo schema al proceso de tratamiento — HECHO. Se corrigió primero el dato desactualizado de frecuencia de controles (invisalign.html y brackets.html, static-content + FAQ), usando el dato confirmado por la clínica. Luego se agregó HowTo con 5 HowToStep por página, usando el texto literal de ProcessSection.tsx de cada página como fuente.
- [x] 7. Expandir FAQ con preguntas de comparación y costo de evaluación (ajustado — no precios de tratamiento fijos) — HECHO. Home: nueva pregunta de evaluación inicial ($65 + $20/radiografía). Invisalign y Blanqueamiento: pregunta de precio existente actualizada (ya no dice "consulta gratuita" ni "escríbenos por WhatsApp"). Brackets: nueva pregunta de precio + nueva pregunta de comparación metálicos/cerámicos/autoligados, sintetizada solo con datos ya documentados en TypesOfBrackets.tsx y el static-content existente.
- [ ] 8. Auditoría de presencia en directorios médicos SV + prensa (fuera del repo, tarea manual del cliente) — PENDIENTE, tarea manual del cliente.

## Reglas para cualquier sesión que trabaje este checklist

- No inventar ni completar datos (fechas, teléfonos, credenciales, universidades) que no estén explícitamente confirmados en este archivo o en el código existente.
- Antes de escribir schema nuevo, citar literal el texto fuente (componente/archivo/línea) de donde sale cada dato.
- Marcar cada ítem como hecho solo después de mostrar el diff y recibir confirmación del cliente.
- Trabajar de a 2-3 ítems por sesión, no todos de una vez.
