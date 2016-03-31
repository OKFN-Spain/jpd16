# Jornadas de Periodismo de Datos 2016, Madrid

* http://jpd16.okfn.es/
* Madrid, 5-7 mayo

Por cuarto año consecutivo, Open Knowledge España organiza la conferencia anual de Periodismo de Datos y Datos Abiertos que se celebra, en esta ocasión, en una sola ciudad, en Madrid.

Las ediciones anteriores se celebraron en Madrid, Barcelona y otras ciudades como Pamplona o Almería. Otras ciudades como Granada o Valencia querían sumarse a esta iniciativa, pero hemos decidido concentrar nuestros esfuerzos en una sola ciudad. Este año hemos elegido Madrid por varias razones. Por un lado, contamos con la misma infraestructura que los años anteriores: Fundación Telefónica, Asociación de la Prensa de Madrid y Medialab-Prado. Por otro, se celebra en octubre en Madrid la Conferencia Internacional de Datos Abiertos 2016, IODC2016, y nos gustaría aportar nuestra gotita de arena al gran número de actos satélites que se van a celebrar.

Durante tres días se desarrollarán conferencias, debates, mesas redondas, talleres prácticos, encuentros, barcamps, hackatones y cualquier cosa que se le ocurra a la comunidad de periodismo de datos de España.

Además, la joven Ley de Transparencia afronta su segundo año con el desafío por parte de gobiernos regionales y locales de liberar sus datos, lo que abre las puertas al desarrollo del periodismo de datos para temas locales.

## Web
Es un diseño propio, creado por [Martín González](https://twitter.com/martgnz).

Usa [Bootstrap](http://getbootstrap.com/), el framework creado por [Mark Otto](https://twitter.com/mdo) y [Jacob Thorton](https://twitter.com/fat) para Twitter.

Si tienes que modificar los estilos, están en `main.css`. Antes de ir a producción se minifica con [uncss](https://github.com/giakki/uncss):

```bash
$ uncss http://localhost:8080 > style.min.css
```
El Javascript está concatenado, uso jQuery, [balance-text](https://github.com/adobe-webplatform/balance-text) y [unveil](https://github.com/luis-almeida/unveil).

## Participa
Si quieres participar en la web o en las jornadas, puedes escribir a periodismodatos en la okfn.es o [crear una **issue**](https://github.com/OKFN-Spain/jpd16/issues/new)
