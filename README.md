<h1>The Name Standardizer</h1>

This is a NodeJS console application that takes an string as input and convert into an array with standardized names.

<h3>example:</h3>
input:

```
'1. Maça verde*2. Ônibus*3. Sítio*4. Caminhão azul alado' //(elements must be separated by *)
```

return:

```
MACA_VERDE
ONIBUS
SITIO
CAMINHAO_AZUL_ALADO
```
As plain text that can easily be copied and pasted onto excel.

<h2>How to use:</h2>

<ul>
  <li>Modify the function call at the end of the code with your string: (separated by *)</li>

![image](https://user-images.githubusercontent.com/65919238/184282361-23792c66-1e8e-4a4c-be27-0208dc3a9ea3.png)


 <li>Modify the properties inside the config method:</li>

![image](https://user-images.githubusercontent.com/65919238/184282814-daa9ba9a-4ca0-4131-9f69-a0f90ffa57d9.png)

 <li>Run the code with </li>

```
node standardizeIntentName.js
```
</ul>
<h2>Images:</h2>
<figure>
  <figcaption>Output Example in daily use</figcaption>
  <img src="https://user-images.githubusercontent.com/65919238/184281472-a2493805-acb1-467c-be3e-8eeafb9cb7ad.PNG" alt="Output Example in daily use" title="Output Example in daily use" />
  <img src="https://user-images.githubusercontent.com/65919238/184283293-f8d85f10-494d-4acf-93b9-e42497054060.png" alt="Output Example in daily use" title="Output Example in daily use" />  
</figure>
