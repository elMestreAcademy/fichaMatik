 #  FichaMatik

    Solución pensada para pequeñas y medianas empresas. Esta App permite tanto un fichaje rápido para los trabajadores como un control y filtrado sencillo e intuitivo de la información más relevante para el empresario; como los datos de su equipo, sus horas trabajadas o un resumen semanal y mensual de las mismas. 

```mermaid
      gantt
    dateFormat  YYYY-MM-DD
    title       FichaMatik Hoja De Ruta
    excludes    weekends

    section Prioritarias
    Introducir info en la base de datos            :done,    des1, 2024-09-06,2024-09-06
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Investigación
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Investigación módulo de CRUD que funcione en JS         :done, after des1
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :until isadded
    Functionality added                 :milestone, isadded, 2014-01-25, 0d

    section Documentacion
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h




