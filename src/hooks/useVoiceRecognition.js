/**
 * Herramienta para usar el micrófono y convertir voz en texto.
 * @param {Function} onResult - Funcion que maneja el resultado de lo que el microfono ha escuchado
 * @returns {Object} Un objeto con:
 * - isSupported: Si el navegador permite usar el microfono
 * - isListening: Si el microfono esta encendido
 * - startListening: La función que debes llamar para empezar a hablar.
 * @description
 * Permite que la app escuche al usuario. 
 * Se apaga solo cuando terminas de hablar 
 * o si ocurre algún error.
 * @example
 * const { isSupported, isListening, startListening } = useVoiceRecognition((texto) => {
 * alert("Dijiste: " + texto);
 * });
 */

import { useState, useEffect, useRef } from "react";

// Creo una variable en la que guardo la respuesta de la API de reconocimiento de voz
const useVoiceRecognition = (onResult) => {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    // Creo una variable para guardar y modificar si el microfono esta encendido o apagado
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef(null);

    // Creo esta variable para ver si el navegador es compatible con el reconocimiento de voz
    const isSupported = !!SpeechRecognition;
    // Si SpeechRecognition existe → true; si es undefined → false

    useEffect(() => {
        // Aqui si el navegador no es compatible, no ejecutamos el reconocimiento de voz
        if (!isSupported) return;

        // Configuracion del reconocimiento de voz
        const recognition = new SpeechRecognition();
        recognition.lang = "es-ES";
        recognition.continuous = false;
        recognition.interimResults = false;

        // Evento que se activa cuando el reconocimiento de voz a recogido datos
        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            onResult(text);
            setIsListening(false);
        };

        // Aqui comprobamos si el microfono tiene algun fallo
        recognition.onerror = (event) => {
            console.error("Error en reconocimiento:", event.error);
            setIsListening(false);
        };

        // Aqui configuramos que el microfono ha terminado de escuchar y lo pone a falso
        recognition.onend = () => setIsListening(false);

        recognitionRef.current = recognition;
    }, [SpeechRecognition, onResult, isSupported]);

    // Creo una función para activar el microfono manualmente
    const startListening = () => {
        if (!isSupported || !recognitionRef.current) return;
        try {
            setIsListening(true);
            recognitionRef.current.start(); // Empieza a escuchar lo que digo por el microfono
        } catch {
            // Muestro esto por pantalla para avisar al usuario que esta escuchando
            console.warn("Ya está escuchando...");
        }
    };

    // Siempre retornamos un objeto consistente
    return {
        isSupported,
        isListening,
        startListening: isSupported ? startListening : () => { }
    };
};

export default useVoiceRecognition;
