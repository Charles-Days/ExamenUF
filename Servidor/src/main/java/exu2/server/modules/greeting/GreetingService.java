package exu2.server.modules.greeting;

import org.springframework.stereotype.Service;

@Service
public class GreetingService {

    public String generarSaludo(String nombres, String apellidos) {
        String nombreCompleto = nombres.trim() + " " + apellidos.trim();
        return "Hola " + nombreCompleto + ", ¿Cómo estás?";
    }
}
