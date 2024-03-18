package br.com.projeto.api.controller;

import br.com.projeto.api.entity.Cliente;
import br.com.projeto.api.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ClienteController {


    private ClienteService clienteService;
    @Autowired
    public ClienteController(ClienteService clienteService){
        this.clienteService = clienteService;
    }

    @PostMapping("/cadastrar")
    public Cliente cadastrar(@RequestBody Cliente dadosCliente){
        return clienteService.save(dadosCliente);
    }
    @GetMapping("/")
    public List<Cliente> obterClientes() {
        return clienteService.listarClientes();
    }
    @PutMapping("/editar")
    public Cliente editar(@RequestBody Cliente dadosCliente){
        return clienteService.save(dadosCliente);
    }
    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<?> remover(@PathVariable Long id){
        boolean removido = clienteService.remover(id);
        if (removido) {
            return ResponseEntity.ok().body("Cliente removido com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado com o ID fornecido.");
        }
    }
}
