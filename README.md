# AngularTodoapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Instrucciones subir proyecto Angular a Github Pages

- Crear repositorio
- Subir proyecto al repositorio
- Construir el proyecto para producción
```
ng build -c production
```
- Renombrar la carpeta del proyecto generado, dentro del directorio **/dist** a
```
docs
```
- Mover **/docs** a la raíz del proyecto
- Eliminar el directorio **/dist**
- Comentar el tag **<base>** del archivo html en docs
- Generar un **commit de los nuevos cambios** en el proyecto y hacer push al repo
```
git commit -m "Docs generado"
git push
```
- Ir a la configuración del repositorio de Github
- Seleccionar **Pages** en las opciones del sidebar
```
Source: Deploy from branch
Branch: main | /docs
Esperar 10 minutos y recargar página hasta que nos aparezca la URL del proyecto alojado
```


