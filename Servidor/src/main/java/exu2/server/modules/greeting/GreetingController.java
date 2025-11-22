package exu2.server.modules.greeting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import exu2.server.utils.APIResponse;

@RestController
@RequestMapping("/api/greeting")
@CrossOrigin(origins = "*")
public class GreetingController {

    @Autowired
    private GreetingService greetingService;

    @PostMapping("/saludar")
    public ResponseEntity<APIResponse<String>> saludar(@RequestBody GreetingRequest request) {
        if (request.getNombres() == null || request.getNombres().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(APIResponse.error("El campo nombres es requerido"));
        }
        if (request.getApellidos() == null || request.getApellidos().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(APIResponse.error("El campo apellidos es requerido"));
        }

        String saludo = greetingService.generarSaludo(request.getNombres(), request.getApellidos());
        return ResponseEntity.ok(APIResponse.success("Saludo generado exitosamente", saludo));
    }
}
