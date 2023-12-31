# BE-NT2-2023-II
Trabajo Practico para Nuevas Tecnologias 2 | React Native

Para este trabajo práctico, se pide a los alumnos implementar un Cronometro Pomodoro en una apliación mobile utilizando el framework React Native. El fin de este cronómetro es ayudar a las personas a utilizar la  [Técnica Pomodoro](https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro).

El dispositivo vibrará para indicar cuando tomar un descanso o volver al trabajo, basado en unos valores por defecto: veinticinco (25) minutos para trabajo, cinco (5) minutos para descanso.


## Requerimientos
- Las únicas librerias permitiras a importar serán las siguientes:
  - `expo`
  - `expo-constants`
  - `react`
  - `react-native`
  
- El cronómetro debe mostrar minutos y segundos en Texto.
- EL cronómetro debe decrementar los segundos hasta alcanzar 00:00.
- El dispositivo móvil debe vibrar cuando el cronómetro llegue a 00:00.
- Los cronómetros deben intercambiarses automáticamente entre 25 y 5 minutos.
- El cronómetro debe ser capaz de iniciar, pausar o reiniciar.

¡La interfaz gráfica depende de ustedes! Para mayor referencia: https://reactnative.dev/docs/style

### EXTRA (No requerido)
- Permitir al usuario ingresar cualquier valor para el cronómetro (ejemplo: 10 minutos para trabajo y 5 minutos para descanso, etc).


## Como empezar: 

Para empezar, recuerden que deben de tener instalado correctamente el entorno de desarrollo con *Expo*. Para mas información ver la última diapositiva de la clase [Unidad 2: React Native](https://docs.google.com/presentation/d/1Meftpk1SP9xJ1pLZ-naZrKNnTb20cysPycxHubCFUNQ/edit#slide=id.g74d6b8e9fc_0_0). Necesitaran el XDE para correrlo en su PC (modo desarrollo web) y el cliente mobile (aplicacion Expo para IOS y Android), para sus dispositivos. De igual manera pueden trabajar con emuladores [Android](https://developer.android.com/studio) o [IOS](https://developer.apple.com/xcode/) si lo prefieren. 

Depues de clonar este repositorio, es necesario instalar las dependencias del proyecto. Para eso necesitaran abrir una terminal en la carpeta del repo clonado (o naveguen mediante una terminal de comandos hasta la carpeta `cd /path/to/project`) y ejecutar: `npm install`. NPM buscara las dependencias del archivo [`package.json`](/package.json) e instalará aquellas librerías que hagan falta para ejecutar el proyecto.

Con esto, ya tendrían todo preparado para empezar a trabajar. En la misma terminal pueden ejecutar `npm start`.

Una vez tengan abierta la app en el dispositivo o en el emulador, intenten abrir [`App.js`](/App.js) con su editor de codigo favorito (recomiendo VS Code), y realicen alguna modificacion para empezar a trabajar. Con esto verán los cambios automáticamente en su teléfono. 

Ya en este punto, tendran todo listo para realizar este Trabajo Práctico. Para utilizar la funcionalidad de *Vibracion*, pueden ver un ejemplo que les dejé en [`/utils`](/utils). Pueden importarlo y usarlo tranquilamente en su aplicación así:

```javascript
import {vibrate} from './utils'

// Esto causa que el teléfono vibre.
vibrate()
```

Happy Codding!