
## Presupuestos

### Presupuesto 1
- https://uniandes-my.sharepoint.com/:b:/g/personal/mf_moraless1_uniandes_edu_co/EUiZaoARZXZCqHz_UOIVRQoBH5hEixFk6QAzsfhvcsl93g?e=Z93FpK

### Presupuesto 2
- https://uniandes-my.sharepoint.com/:b:/g/personal/mf_moraless1_uniandes_edu_co/EZ3vm3PRDrFNo81DJCdK9zUBq1ItQd421h2l0hQDeffQDA?e=2QMFxY

### presupuesto 3 Semana 8
- https://uniandes-my.sharepoint.com/:b:/g/personal/mf_moraless1_uniandes_edu_co/EXLAPnEMfNROht6Ex4rPGzoBHtOi0zT1J7uR5hSYWDuWcg?e=aS8l3c

## Insidencias encontradas
- https://github.com/jsanchezl12/2022_MISOPruebasAuto/issues

## Video presentación final
- https://www.youtube.com/watch?v=HOhs-u9LyqA&t=2s

## Inventario de pruebas manuales
- https://uniandes-my.sharepoint.com/:x:/g/personal/mf_moraless1_uniandes_edu_co/EZAZ6V1enP1IpOIsZwzI0KABFLnRYcZlqkWQPmnRlFJVhA?e=RqPJ8g

## Presentación de resultado de poruebas, Pros y contras 
- https://uniandes-my.sharepoint.com/:p:/g/personal/mf_moraless1_uniandes_edu_co/EccM-nNza5tEqxpW3NfjKjEBxzUn4T17avijpzsaoppwnw?e=YmlM16


# Pasos para ejecutar las pruebas Datapool-Random

- Clone el repositorio (git clone https://github.com/jsanchezl12/2022_MISOPruebasAuto.git)
- La pruebas se encuentran en la carpeta Ghost_Data_pool/cypress/integration/ cada una de las carpetas contiene 30 escenarios (10 Apriori, 10 Random, 10 Pseudo) para un total de 120 escenarios.
- Asegurese de ubicarse en la rama principal donde se encuentran todos los test integrados (git checkout main)
- Cambie las credenciales en el archivo config.js y en el "describe" de cada uno de los archivos que vaya a probar.
- Inicie el servidor Ghost en su maquina local (ghost start) VERSION GHOST 4.41.3 
- Inicie Cypress (cypress open)
- Ejecute las pruebas a través de la consola desplegada por Cypress.


# Pasos para ejecutar la pruebas de regresión
- Clone el repositorio (git clone https://github.com/jsanchezl12/2022_MISOPruebasAuto.git)
- Asegurese de ubicarse en la rama principal donde se encuentran todos los test integrados (git checkout main)
- Las pruebas se encuentran separadas en dos carpetas por versiones Ghost_3.41.1 y Ghost_4.41.3 cada una a su vez contienen las pruebas desarrolladas con Kraken y Cypress
- Inicie el servidor Ghost según la version que vaya probar en su maquina local (ghost start)
- Ubiquese en la carpeta contenedora segun la version de Ghost elegida
- Si decide realizar la pruebas con Kraken  por favor modifique el archivo properties.json con sus credenciales para que la pruebas se ejecuten correctamente
- Verifique que el directorio apunte a la carpeta con la version elegida de Ghost/KRAKEN
- Ejecute la pruebas con el comando ./node_modules/kraken-node/bin/kraken-node run
- Si decide realizar la pruebas con Cypress verifique que el directorio apunte a la carpeta con la version elegida de Ghost/CYPRESS
- Para que los tests ejecuten de manera correcta ingrese a los archivos (members.spect.js, pages.spect.js, post.spect.js y tags.spect.js) y edite el usuario y contraseña en cada archivo con su usuario y contraseña de Ghost,
- Ejecute la pruebas a través de la consola desplegada por Cypress
- Si decide cambiar de version ubiquese en la carpeta con la version de Ghost elegida
- Inicie el servidor Ghost según la version que vaya probar en su maquina local (ghost start) y repita los pasos anteriores
 
 
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

## IMPACTO PRUEBAS DE REGRESIÓN
En terminos de pruebas fallidas y exitosas en el cambio de versiones de Ghost se pudo encontrar un gran numero de puebas fallidas, consideramos fue debido a:
- cambio en el nombre de selectores
- cambio en la  interfaz de página principal
- cambio de urls
- cambio en el numero de pasos para realizar la misma acción
