# App Cotizador de Criptomonedas

## *React - La Guía Completa: Hooks Context Redux MERN + 15 Apps*

Aplicación que permite buscar la cotización de criptomenedas para una moneda tradicional dada.

**Fetch API**.
**Styled Components**.
**Custom Hooks**.

### Librerías utilizadas:
- [**@Emotion**](https://emotion.sh/docs/introduction): para crear los Styled Components.
- [**Axios**](https://www.npmjs.com/package/axios): para construir las consultas a las APIs.
- [**SpinKit**](https://tobiasahlin.com/spinkit/): Spinners simples en CSS.

### APIs utilizadas:
- [**CryptoCompare**](https://min-api.cryptocompare.com/documentation): API de criptomonedas.

    - [**URL Endpoint: Toplist by Market Cap Full Data**](https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD): _Get a number of top coins by their market cap. Default value is first page (0) and the top 10 coins_.
    - [**URL Endpoint: Multiple Symbols Full Data**](https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR): _Get all the current trading info (price, vol, open, high, low etc) of any list of cryptocurrencies in any other currency that you need_.

### Versión: 1.0.0

### Notas:
Comando para ejecutar la aplicación:
```
npm start
```
