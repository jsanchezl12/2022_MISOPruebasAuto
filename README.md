# Ghost-Issues
Reporte de incidencias Ghost 

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
