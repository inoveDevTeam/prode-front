# prode-front

## Archivo de variables de entorno
Crear un archivo .env con datos similares a estos. Solo se debe modificar el dominio:
```
DOMINIO=http://69.46.4.131:8070
REACT_APP_LOGIN_URL=$DOMINIO/api/v1.0/login/
REACT_APP_PARTIDOS_URL=$DOMINIO/api/v1.0/partidos/pronosticos/
REACT_APP_RANKING_URL=$DOMINIO/api/v1.0/ranking/
```

## Docker para dev
Lanzar el docker-compose de dev con el siguiente comando:
```sh
docker-compose up
```

Cuando haya terminado de levantar el server ingresar a la URL:
```
http://127.0.0.1:3000
```

## Entorno de producción
Para buildear la aplicación para prod lanzar el siguiente comando con el docker-compose:
```sh
docker-compose -f prod-compose.yml up
```

Cuando haya terminado el proceso estará la carpeta "build" disponible para linkear a nginx.
