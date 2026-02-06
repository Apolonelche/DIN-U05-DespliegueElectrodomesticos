# Despliegue Martin Davia Mora

## 1. ¿Dónde está desplegada cada parte?

### Frontend (Web)
El frontend está desplegado en Vercel, se puede acceder mediante la siguiente URL: https://din-u05-despliegue-electrodomestico.vercel.app

### Backend / API
La api está desplegada mediante Render, se puede acceder mediante el enlace:
https://din-u05-electrodomesticosapi.onrender.com

### Aplicación de escritorio
Está desplegada mediante Electron. Se puede acceder mediante el archivo Electrodomesticos.exe

---

## 2. Problemas encontrados durante el despliegue

- **Problema 1:**
El primer problema que tuve fué un fallo a la hora de conectar la api con MongoDB ya que me daba error de atenticación del usuario. Para solucionarlo tuve que cambiar la contraseña y poner la misma y se arregló.

- **Problema 2:**
El segundo problema que tuve ha sido a la hora de hacer el ``run electron-pack`` porque las dependencias de electron del package.json, tenían que estar en devDependencies 

---

## 3. Diferencias entre aplicación web y aplicación de escritorio

### Ventajas del despliegue web frente al de escritorio

- Accesible dese cualquier plataforma
- No hace falta descargar nada (salvo navegador)
- Puedes acceder donde quieras mientras tengas conexión

### ¿Por qué Electron no sustituye a una web?

Electron no sustituye a las webs ya que son mucho mas cómodas de acceder y utilizar. Por ejemplo, a la hora de actualzar una web, es instantáneo pero en Electron tienes que descargarte la nueva versión, Electron consume recursos de tu dispositivo y al final, es menos accesible.

---

## 4. Capturas de la aplicación de escritorio funcionando

### Pantalla principal
![Pantalla principal](ruta/a/la/captura1.png)

### Detalle de producto
![Detalle de producto](ruta/a/la/captura2.png)

### Eliminación de producto
![Eliminación de producto](ruta/a/la/captura3.png)

---
