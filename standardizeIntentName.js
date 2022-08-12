const convertString = (string) => {

    const config = {

        //if every item on the list has a number prefix, set to true
        hasNumberPrefix: 'true',

        //leave empty if you don't want to add the prefix
        prefix: 'PREFIX' + '_'//add or remove the underline
    }

    //remove the number prefix if enabled.
    const removeNumberPrefix = () => {
        return config.hasNumberPrefix == 'yes' ? string.replace(/[0-9]/g, '') : string
    }
    //Convert the string in an array.
    const arraySeparator = removeNumberPrefix().split('*');

    //Remove nom normalized characters.
    const normalize = arraySeparator.map((array) => { return array.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").replace('/', "").replace(`\\`, "") })

    //Convert to upper case, remove spaces special characters.
    const deepNormalize = normalize.map((res) => {
        return config.hasNumberPrefix == 'true' ? res.toUpperCase().replace(/\s+/g, "_").substring(1).replace('(', '').replace(')', '').replace('.', '').replace(',', '')
            : res.toUpperCase().replace(/\s+/g, "_").replace('(', '').replace(')', '').replace('.', '').replace(',', '')
    });

    //add the prefix to every component in the array.
    const addPrefix = deepNormalize.map((res) => {
        return config.prefix + res
    })

    //Text output
    console.log('\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '---------------LUCAO-DO-CODIGO-------------------');
    console.log('\n');
    console.log(addPrefix.join('\n'));
    console.log('\n')
    console.log('-------------------------------------------------');

}

//Insert all the titles separated by *
//example: '1. Maça verde*2. Ônibus*3. Sítio'
//will return:
// MACA_VERDE
// ONIBUS
// SITIO

convertString('1. Maça verde*2. Ônibus*3. Sítio*4. Caminhão azul alado');


