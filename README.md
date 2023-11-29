# FRONT RENT CAR

El proyecto permite gestionar las rentas de vehículos en una compañia de renta de vehículos.
* **Despliegue**
   - [**Render:**](https://drf-boilerplate-app.onrender.com/swagger-ui/)
   - [**Netlify:**](https://front-rent-car.netlify.app/)


## Requerimientos del Proyecto

1. Login
   - [x] Creación del token de acceso (JWT | access_token - refresh_token)
2. Registro
   - [x] Encriptación de contraseña (pkdpf2)
3. Recuperar Contraseña
   - [x] Generar una nueva contraseña encriptada
   - [x] Enviar un correo con un template (html)
4. CRUD por cada Modelo
   - [x] Listado con paginación
   - [x] Obtener un registro mediante el id
   - [x] Creación de un registro
   - [x] Actualización de un registro
   - [x] Eliminar un registro (SoftDelete)
5. Despliegue
   - [x] Netlify

## Modelos:

- Users (Extender del modelo de Django)

  | campo      | tipo         | constraint |
  | ---------- | ------------ | ---------- |
  | email      | VARCHAR(160) | UNIQUE     |
  | first_name | VARCHAR(150) |            |
  | last_name  | VARCHAR(150) |            |
  | password   | VARCHAR(150) |            |
  | created_at | DATETIME     |            |
  | updated_at | DATETIME     |            |

- Vehicles
  | campo      | tipo         |  constraint |
  | ---------- | ------------ | ----------- |
  | car_make   | VARCHAR(100) |             |
  | model      | VARCHAR(100) |             |
  | plate_num  | VARCHAR(150) |             |
  | password   | VARCHAR(12)  | UNIQUE      |
  | price_day  | FLOAT        |             |
  | condition  | VARCHAR(8)   |             |

- Rents
  | campo      | tipo         |  constraint |
  | ---------- | ------------ | ----------- |
  | date_start | DATETIME     |             |
  | date_end   | DATETIME     |             |
  | total_pay  | FLOAT        |             |
  | userId     | INTEGER      |             |
  | vehicleId  | FLOAT        |             |

## Arquitectura
Modelo Vista Template

## Tecnologías a utilizar
* **Database:** PostgreSQL
* **Backend:** Django Rest Framework
* **Frontend:** React
* **Documentation:** Swagger
* **Despliegue:** Para el backend se utilizará Render, y para el Frontend se utilizará Vercel.

# Comensando
Para que la api funcione correctamente se deve tener en cuenta las variable del archivo .env, y cambiarlas según sus necesidades.
* **Instalar los módulos de Node**
```bash
npm run install
```
* **Compilar los archivos**
```bash
npm build
```

### Prerequisitos

Es necesario instalar todas las dependencias de Node.