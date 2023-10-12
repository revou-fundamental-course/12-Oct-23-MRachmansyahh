document.addEventListener("DOMContentLoaded", function() {
    // Mengambil referensi elemen-elemen yang diperlukan dari DOM
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const temperature1 = document.getElementById("temperature1");
    const temperature2 = document.getElementById("temperature2");
    const formula = document.getElementById("formula");
    const convertButton = document.querySelector(".convert-button");
    const resetButton = document.querySelector(".reset-button");
  
    function convertTemperature(from, to, input) {
      let result;
      if (from === "celcius" && to === "fahrenheit") {
        // Konversi dari Celcius ke Fahrenheit
        result = (input * 9/5) + 32;
        formula.value = `${input} °C to °F: (${input} * 9/5) + 32 = ${result}`;
      } else if (from === "fahrenheit" && to === "celcius") {
        // Konversi dari Fahrenheit ke Celcius
        result = (input - 32) * 5/9;
        formula.value = `${input} °F to °C: (${input} - 32) * 5/9 = ${result}`;
      } else if (from === "celcius" && to === "kelvin") {
        // Konversi dari Celcius ke Kelvin
        result = input + 273.15;
        formula.value = `${input} °C to K: ${input} + 273.15 = ${result}`;
      } else if (from === "kelvin" && to === "celcius") {
        // Konversi dari Kelvin ke Celcius
        result = input - 273.15;
        formula.value = `${input} K to °C: ${input} - 273.15 = ${result}`;
      } else if (from === "fahrenheit" && to === "kelvin") {
        // Konversi dari Fahrenheit ke Kelvin
        result = (input - 32) * 5/9 + 273.15;
        formula.value = `${input} °F to K: (${input} - 32) * 5/9 + 273.15 = ${result}`;
      } else if (from === "kelvin" && to === "fahrenheit") {
        // Konversi dari Kelvin ke Fahrenheit
        result = (input - 273.15) * 9/5 + 32;
        formula.value = `${input} K to °F: (${input} - 273.15) * 9/5 + 32 = ${result}`;
      } else {
        result = input;
        formula.value = "Same Temperature Scale";
      }
      return result;
    }

    convertButton.addEventListener("click", function() {
        // Ketika tombol convertButton diklik
        const inputValue = parseFloat(input1.value);
        const fromTemperature = temperature1.value;
        const toTemperature = temperature2.value;
    
        if (!isNaN(inputValue)) {
            // Mengkonversi suhu berdasarkan nilai input1, temperature1, dan temperature2
            const result = convertTemperature(fromTemperature, toTemperature, inputValue);
            input2.value = result.toFixed(2);
        }
    });
    
    input1.addEventListener("input", function() {
        // Ketika nilai input1 berubah
        const inputValue = parseFloat(input1.value);
        const fromTemperature = temperature1.value;
        const toTemperature = temperature2.value;
    
        if (!isNaN(inputValue)) {
            // Mengkonversi suhu berdasarkan nilai input1, temperature1, dan temperature2
            const result = convertTemperature(fromTemperature, toTemperature, inputValue);
            input2.value = result.toFixed(2);
        }
    });
    
    input2.addEventListener("input", function() {
        // Ketika nilai input2 berubah
        const inputValue = parseFloat(input2.value);
        const fromTemperature = temperature2.value;
        const toTemperature = temperature1.value;
    
        if (!isNaN(inputValue)) {
            // Mengkonversi suhu berdasarkan nilai input2, temperature2, dan temperature1
            const result = convertTemperature(fromTemperature, toTemperature, inputValue);
            input1.value = result.toFixed(2);
        }
    });
    
    resetButton.addEventListener("click", function() {
        // Ketika tombol resetButton diklik
        // Mereset nilai input1, input2, dan formula
        input1.value = "";
        input2.value = "";
        formula.value = "";
    });
});