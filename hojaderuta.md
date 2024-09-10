 #  FichaMatik

    Solución pensada para pequeñas y medianas empresas. Esta App permite tanto un fichaje rápido para los trabajadores como un control y filtrado sencillo e intuitivo de la información más relevante para el empresario; como los datos de su equipo, sus horas trabajadas o un resumen semanal y mensual de las mismas. 

```mermaid
      gantt
    dateFormat  YYYY-MM-DD
    title       FichaMatik Hoja De Ruta
    excludes    weekends

    section Prioritarias
    Introducir info en la base de datos            :done,    a1, 2024-09-06, 2024-09-10
    Conectando información a base de datos               :active,  a2, after a1 2024-09-10, 2024-09-11
    Fichaje             :active, a3, after a2 2024-09-06, 2024-09-20
    Recuperar datos de la base de datos(1) :done, a4, 2024-09-06, 2024-09-10
    Crear insert fecha en SQL  : active, 2024-09-10, 2024-09-11
    
    section Investigacion
    Invest.react              :done, 2024-09-06, 2024-09-10
    Encontrar aplicación de CRUD para JS   : active, a5, 2024-09-10, 2024-09-13
    App React Native para Android : active, a6, after a5, 5d
    Despliegue con ".exe"       : active, a7, 2024-09-06, 2024-09-20 

    section Documentacion
    Mantener actualizada documentacion               :active, a1, 2024-09-06, 2024-09-20
    





