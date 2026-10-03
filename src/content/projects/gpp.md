---
title: "GPP"
slug: "gpp"

subtitle: "Sistema de gestión de personal y producción"
description: "Aplicación web para planificar jornadas de producción, asignar operadores a máquinas y realizar seguimiento de los tiempos de fabricación."

category: "Aplicación web"
client: "Xavier Jara"
year: 2026

role: "Desarrollo Full Stack"

cover: "@/assets/projects/gpp/hero.png"
coverAlt: "Módulo de seguimiento de producción de GPP"

challenge:
  - "La planificación diaria de una planta productiva requiere distribuir operadores entre distintas máquinas, considerando su disponibilidad, habilitaciones y carga de trabajo."
  - "La solución debía facilitar la organización de las jornadas, evitar asignaciones repetitivas y permitir consultar tanto las planificaciones anteriores como el avance estimado de la producción."

decision:
  title: "Planificación basada en reglas operativas"
  description: "Se desarrolló una aplicación que permite generar y ajustar asignaciones de operadores según las condiciones de cada jornada. La lógica contempla disponibilidad, habilitaciones, rotación semanal y agrupación de máquinas con carga parcial. Las operaciones críticas de planificación se ejecutan mediante transacciones en PostgreSQL para mantener la consistencia de los datos."

result:
  - "GPP reúne la administración de operadores, máquinas y productos, junto con la planificación diaria y el historial de jornadas confirmadas."
  - "El módulo de producción permite calcular ciclos y estimar tiempos de finalización según la cantidad pendiente, los productos fabricados por ciclo y su duración."
  - "La interfaz responsive facilita la consulta y gestión de información desde dispositivos móviles dentro de la planta."

stack:
  - name: React
    category: development
  - name: TypeScript
    category: development
  - name: Tailwind CSS
    category: development
  - name: Supabase
    category: infrastructure

highlights:
  - "Desarrollo de aplicación web con React y TypeScript"
  - "Gestión de operadores, máquinas y productos"
  - "Planificación diaria con asignación automática y manual de operadores"
  - "Reglas de disponibilidad, habilitación y rotación semanal"
  - "Agrupación de máquinas según su carga operativa"
  - "Historial de jornadas y seguimiento de producción"
  - "Operaciones transaccionales y políticas de seguridad en PostgreSQL"




featured: false
order: 3

status: "development"

commercial: true
technical: true
---