# Ghost-Issues
Reporte de incidencias Ghost 

# pruebas de regresión visuales
## Pasos para ejecutar los 10 test E2E seleccionados
- Ingrese al repositorio de GitHub del proyecto (https://github.com/jsanchezl12/2022_MISOPruebasAuto)
- Clone el repositorio (git clone https://github.com/jsanchezl12/2022_MISOPruebasAuto.git)
- Cambie de rama a la rama de Pruebas de regresión visuales (git checkout visual-regression-test)
- En la raiz del proyecto existen 2 carpetas principales (Ghost_3.41.1 y Ghost_4.41.3)
- Cada carpeta tiene los test seleccionados para cada herramienta (Cypress y Kraken) en su respectiva versión
- En la raiz tambien existe una carpeta donde este el resultado de las pruebas de regresión visual con (Backstop)
- Ingrese a la carpeta que quiere consultar (Cypress o Kraken)
- Ingrese a la carpeta (html_report)
- Ejecute el archivo (index.html) en un navegador (Chrome, Firefox, Opera, etc)
- Se desplegara el reporte del resultado de las pruebas de regresión visual


# pruebas-ghost
## Pruebas automatizadas - KRAKEN

# Pasos para ejecutar
- Descargar el repositorio: git clone + URL del repostitorio
- Para ir a la rama donde esta todos los test integrados (git checkhout develop)
- Iniciar servidor Ghost en su maquina local (ghost start)
- Para que los tests ejecuten de manera correcta ejecute el comando kraken run
- Los tests se deben iniciar en varios navegadores navegador. 

# FUNCIONALIDADES KRAKEN:

## FUNCIONALIDAD: POST
Prueba de funcionamiento: https://www.youtube.com/watch?v=iGCfGKJPimo

## Escenarios:
- Welcome to Ghost
- Creando cuenta Ghost
- Creación y publicación de un Post
- Actualización de un Post
- Cambiar Post de estado Publish a Draft
- Eliminación de un Post

## FUNCIONALIDAD: MEMBERS

## Escenarios:
- Como usuario registrado quiero acceder a la opción members y visualizar las opciones existente
- Como usuario administrador quiero poder crear un nuevo miembro
- Como usuario administrador quiero poder filtrar en la lista de miembros
- Como usuario administrador quiero poder gestionar los filtros en la biusqueda de miembros
- Como usuario administrador quiero poder eliminar un miembro

## FUNCIONALIDAD: PAGES

## Escenarios:
- Como usuario inicio sesion y creo una nueva Pagina
- Como usuario actualizo una Pagina Existente
- Como usuario elimino una Pagina Existente
- Como usuario filtro las paginas publicadas del listado de paginas

## FUNCIONALIDAD: TAGS
Prueba de Funcionamiento: https://youtu.be/sG5FoiNgN2k

## Escenarios:
- Inicio de Sesion - Tags
- Update Tag MetaData - Tags
- Update Tag TwitterData - Tags
- Update Tag FacebookData - Tags
- Check Metadata Tags - Tags

## Impacto pruebas de regresión
En terminos de pruebas fallidas y exitosas en el cambio de versiones de Ghost se pudo encontrar un gran numero de puebas fallidas, consideramos fue debido a:
- cambio en el nombre de selectores
- cambio en la  interfaz de página principal
- cambio de urls
- cambio en el numero de pasos para realizar la misma acción
