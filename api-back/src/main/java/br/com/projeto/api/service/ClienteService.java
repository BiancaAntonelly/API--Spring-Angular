package br.com.projeto.api.service;

import br.com.projeto.api.entity.Cliente;
import br.com.projeto.api.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    private ClienteRepository clienteRepository;
    @Autowired
    public ClienteService(ClienteRepository clienteRepository){
        this.clienteRepository = clienteRepository;
    }


    public Cliente save(Cliente dadosCliente){
        return clienteRepository.save(dadosCliente);
    }
    public List<Cliente> listarClientes(){
        return clienteRepository.findAll();
    }

    public boolean remover(Long id){
        if (clienteRepository.existsById(id)) {
            clienteRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
